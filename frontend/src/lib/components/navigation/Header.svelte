<script lang="ts">
  import HeaderMobile from './HeaderMobile.svelte';
  import HeaderDesktop from './HeaderDesktop.svelte';
  import { headerTheme } from '$lib/stores/headerTheme.svelte';
  import { theme } from '$lib/stores/theme.svelte';

  type Props = { open: boolean; onToggle: () => void };
  let { open, onToggle }: Props = $props();

  let headerEl: HTMLElement | undefined = $state();

  const resolvedTheme = $derived(
    headerTheme.current ?? theme.current
  );

  $effect(() => {
    if (headerEl) {
      headerEl.dataset.theme = resolvedTheme;
    }
  });
</script>

<header bind:this={headerEl} class="sticky top-0 z-70 w-full pointer-events-none">
  <div class="relative pointer-events-auto">
    <div class="hidden lg:block"><HeaderDesktop /></div>
    <div class="block lg:hidden"><HeaderMobile {open} {onToggle} /></div>
  </div>
</header>
