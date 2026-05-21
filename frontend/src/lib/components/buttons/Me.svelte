<!-- src/lib/components/UserAvatarButton.svelte -->
<script lang="ts">
  /**
   * Props
   */
  type Props = {
    initials?: string;
    ariaLabel?: string;
    class?: string;
    onOpen?: () => void;
  };

  let {
    initials = 'ME',
    ariaLabel = 'Open profile menu',
    class: className = '',
    onOpen
  }: Props = $props();

  function handleClick() {
    onOpen?.();
  }
</script>

<button
  type="button"
  aria-label={ariaLabel}
  onclick={handleClick}
  class={[
  'group relative flex h-36 w-36 items-center justify-center rounded-full',
  'border border-border',
  'bg-foreground',
  'text-foreground',
  'shadow-lg',
  'transition-all duration-200 ease-out',

  'hover:scale-[1.01]',
  'hover:bg-foreground',
  'hover:shadow-md',

  'active:scale-[0.98]',

  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-background',
  'focus:ring-offset-2',
  'focus:ring-offset-background',

  className
  ].join(' ')}
  >
  <span
    class="
	   select-none
	   text-background
	   text-h1
	   font-semibold
	   tracking-tight
	   "
    >
    {initials}
  </span>
</button>
