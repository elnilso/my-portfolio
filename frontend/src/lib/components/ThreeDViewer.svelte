<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';

  interface Props {
    plyFile?: string;
    pointSize?: number;
    flipY?: boolean;
    rotationSpeed?: number;
  }

  let {
    plyFile = '/sphinx_mesh.ply',
    pointSize = 0.01,
    flipY = true,
    rotationSpeed = 0.15,
  }: Props = $props();

  let container = $state<HTMLDivElement | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let object: THREE.Points | THREE.Mesh | null = null;
  let animationId: number;
  let clock: THREE.Clock;

  onMount(() => {
    init();
    animate();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onWindowResize);
      renderer?.dispose();
      disposeObject();
    };
  });

  // $effect is the sole trigger for loading — avoids double-load with init()
  $effect(() => {
    if (plyFile && scene) loadPLY(plyFile);
  });

  function disposeObject() {
    if (!object) return;
    scene?.remove(object);
    object.geometry.dispose();
    if (Array.isArray(object.material)) {
      object.material.forEach((m) => m.dispose());
    } else {
      (object.material as THREE.Material).dispose();
    }
    object = null;
  }

  function init() {
    if (!container) return;

    clock = new THREE.Clock();
    scene = new THREE.Scene();

    // Camera perfectly level so Y-axis spin has zero apparent lean
    camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.001, 1000);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights — needed for mesh rendering, harmless for point clouds
    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(3, 5, 3);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xaaccff, 0.4);
    fill.position.set(-3, 0, -2);
    scene.add(fill);

    window.addEventListener('resize', onWindowResize);
    // Do NOT call loadPLY here — $effect handles it after mount
  }

  async function loadPLY(url: string) {
    loading = true;
    error = null;
    disposeObject();

    try {
      const geometry = await new Promise<THREE.BufferGeometry>((resolve, reject) => {
        new PLYLoader().load(url, resolve, undefined, reject);
      });

      if (flipY) geometry.scale(1, -1, 1);

      // Center and normalise scale
      geometry.computeBoundingBox();
      const center = new THREE.Vector3();
      geometry.boundingBox!.getCenter(center);
      geometry.translate(-center.x, -center.y, -center.z);

      const size = new THREE.Vector3();
      geometry.boundingBox!.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      geometry.scale(3 / maxDim, 3 / maxDim, 3 / maxDim);

      const hasColors = geometry.attributes.color !== undefined;
      const isMesh = geometry.index !== null; // faces present → triangle mesh

      if (isMesh) {
        geometry.computeVertexNormals();
        object = new THREE.Mesh(
          geometry,
          new THREE.MeshStandardMaterial({
            vertexColors: hasColors,
            color: hasColors ? 0xffffff : 0xcccccc,
            roughness: 0.6,
            metalness: 0.05,
            side: THREE.DoubleSide, // show back-faces too
          }),
        );
      } else {
        object = new THREE.Points(
          geometry,
          new THREE.PointsMaterial({
            size: pointSize,
            vertexColors: hasColors,
            color: hasColors ? 0xffffff : 0x88aacc,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.92,
            depthWrite: false,
          }),
        );
      }

      scene.add(object);
      loading = false;

      console.log(
        `[PLYViewer] Loaded as ${isMesh ? 'mesh' : 'point cloud'} —`,
        `${geometry.attributes.position.count.toLocaleString()} vertices`,
        hasColors ? '(vertex colours)' : '(no colour data)',
      );
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to load PLY file';
      loading = false;
    }
  }

  function animate() {
    animationId = requestAnimationFrame(animate);
    if (object) object.rotation.y += rotationSpeed * clock.getDelta();
    renderer?.render(scene, camera);
  }

  function onWindowResize() {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
</script>

<div bind:this={container} class="relative h-screen w-full overflow-hidden">
  {#if loading && plyFile}
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center gap-3 text-sm text-white/70">
      <span class="spinner"></span>
      Loading…
    </div>
  {/if}

  {#if error}
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-red-400">
      ⚠ {error}
    </div>
  {/if}
</div>

<style>
  .spinner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top-color: rgba(255, 255, 255, 0.75);
    animation: spin 0.9s linear infinite;
    flex-shrink: 0;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
