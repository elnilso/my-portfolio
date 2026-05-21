<script lang="ts">
  import '$lib/styles/layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import Header from '$lib/components/navigation/Header.svelte';
  import MenuOverlay from '$lib/components/overlays/MenuOverlay.svelte';
  import Footer from '$lib/components/navigation/Footer.svelte';

  let menuOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
  
  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header open={menuOpen} onToggle={toggleMenu} />
<MenuOverlay open={menuOpen} />

<main>
  {@render children()}
</main>

<Footer />
