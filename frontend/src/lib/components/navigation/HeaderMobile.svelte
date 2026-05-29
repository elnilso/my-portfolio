<script lang="ts">
  import gsap from 'gsap';

  type Props = {
    open: boolean;
    onToggle: () => void;
  };

  let { open, onToggle }: Props = $props();

  let buttonEl: HTMLButtonElement;
  let leftDot: HTMLDivElement;
  let rightDot: HTMLDivElement;

  // CLOSED: distance from button center to dot — just enough to flank the label
  const CLOSED_OFFSET = 50;

  // OPEN: dots travel to the page edge, matching the overlay's corner dot position.
  // Calculated from the real button width so it's correct on every screen size.
  const EDGE_MARGIN = 24; // matches --page-padding-x: 1.5rem
  let openOffset = $state(CLOSED_OFFSET); // safe default; updated after mount

  const labelText = $derived(open ? 'CLOSE' : 'MENU');

  // ── Measure button width; recalculate on resize ──────────────
  $effect(() => {
    if (!buttonEl) return;
    const measure = () => {
      // Half the button width minus the edge margin = how far a dot must travel
      // from center to sit EDGE_MARGIN px from the button's right/left edge.
      openOffset = buttonEl.getBoundingClientRect().width / 2 - EDGE_MARGIN;
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  });

  // ── Snap to closed position immediately on mount (no animation) ─
  $effect(() => {
    if (!leftDot || !rightDot) return;
    // yPercent handles vertical centering via GSAP to avoid a transform
    // conflict with Tailwind's -translate-x-1/2 class on the same element.
    gsap.set(leftDot,  { yPercent: -50, x: -CLOSED_OFFSET });
    gsap.set(rightDot, { yPercent: -50, x:  CLOSED_OFFSET });
  });

  // ── Animate on open / close ──────────────────────────────────
  $effect(() => {
    if (!leftDot || !rightDot) return;

    //  open  → spread outward to the page edges
    //  close → pull back in to flank the label
    const target = open ? openOffset : CLOSED_OFFSET;

    const tl = gsap.timeline();
    tl.to(leftDot,  { x: -target, duration: 0.45, ease: 'power3.out' }, 0)
      .to(rightDot, { x:  target, duration: 0.45, ease: 'power3.out' }, 0);

    return () => tl.kill();
  });
</script>

<button
  bind:this={buttonEl}
  onclick={onToggle}
  class="
    relative
    z-[1000]
    w-full
    py-4
    flex
    items-center
    justify-center
    overflow-visible
    select-none
  "
>
  <!-- LEFT DOT -->
  <div
    bind:this={leftDot}
    class="
      absolute
      top-1/2
      left-1/2
      w-2
      h-2
      rounded-full
      bg-[var(--header-foreground)]
      -translate-x-1/2
    "
  ></div>

  <!-- LABEL -->
  <span
    class="
      relative
      z-10
      text-body-md
      text-[var(--header-foreground)]
      tracking-[0.3em]
      uppercase
    "
    style="font-size: var(--text-tag-size); line-height: var(--text-button-line);"
  >
    {labelText}
  </span>

  <!-- RIGHT DOT -->
  <div
    bind:this={rightDot}
    class="
      absolute
      top-1/2
      right-1/2
      w-2
      h-2
      rounded-full
      bg-[var(--header-foreground)]
      -translate-x-1/2
    "
  ></div>
</button>

