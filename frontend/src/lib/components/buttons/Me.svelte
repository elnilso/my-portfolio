<script lang="ts">
  type Props = {
    initials?: string;
    ariaLabel?: string;
    class?: string;
    onOpen?: () => void;
  };

  let {
    initials = 'ME',
    ariaLabel = 'Open contact form',
    class: className = '',
    onOpen
  }: Props = $props();
</script>

<!-- Entrance wrapper (prevents transform conflicts) -->
<div class="button-enter">
  <button
    type="button"
    aria-label={ariaLabel}
    onclick={() => onOpen?.()}
    class={[
      'group relative flex shrink-0 items-center justify-center rounded-full',
      'h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32',

      // base look
      'bg-foreground text-background',

      // interaction motion (clean and consistent)
      'transition-[transform,box-shadow,background-color] duration-500 ease-out',
      'hover:-translate-y-0.5 hover:scale-[1.04]',
      'active:translate-y-0 active:scale-[0.98]',

      // focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40',
      'focus-visible:ring-offset-4 focus-visible:ring-offset-background',

      className
    ].join(' ')}
  >
    <!-- soft highlight -->
    <div
      class="
        pointer-events-none absolute inset-0 rounded-full
        opacity-0 transition-opacity duration-500
        group-hover:opacity-100
      "
      style="
        background: radial-gradient(
          circle at 32% 28%,
          color-mix(in oklab, var(--background) 18%, transparent) 0%,
          transparent 60%
        );
      "
    />

    <span
      class="
        relative select-none font-display leading-none tracking-tight
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
      "
    >
      {initials}
    </span>
  </button>
</div>

<style>
  /* Premium entrance animation */
  .button-enter {
    animation: enter 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
    animation-delay: 120ms;
  }

  @keyframes enter {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.92);
      filter: blur(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }
  }
</style>
