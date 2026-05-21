<script lang="ts">
  import HeaderMobile from './HeaderMobile.svelte';
  import HeaderDesktop from './HeaderDesktop.svelte';

  type Props = {
    open: boolean;
    onToggle: () => void;
  };

  let { open, onToggle }: Props = $props();
</script>

<header
  class="sticky top-0 z-70 w-full"
>
  <!-- Content -->
  <div class="relative">
    <!-- Desktop -->
    <div class="hidden lg:block">
      <HeaderDesktop />
    </div>

    <!-- Mobile -->
    <div class="block lg:hidden">
      <HeaderMobile {open} {onToggle} />
    </div>
  </div>
</header>
