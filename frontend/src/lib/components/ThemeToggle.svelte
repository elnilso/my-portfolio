<script lang="ts">
  import Icon from '@iconify/svelte';

  import { theme } from '$lib/stores/theme.svelte';

  const isDark = $derived(
    theme.current === 'dark'
  );
</script>

<button
  type="button"
  aria-label="Toggle theme"
  onclick={() => theme.toggle()}
  class="
  group
  relative
  flex
  h-12
  w-24
  border
  border-surface-500/20
  items-center
  rounded-full
  backdrop-blur-md
  transition-all
  duration-300
  hover:scale-[1.01]
  "
  style="
  background:
  color-mix(
  in oklab,
  var(--header-foreground, var(--foreground)) 10%,
  transparent
  );

  transition:
  background var(--duration-normal) var(--ease-standard),
  border-color var(--duration-normal) var(--ease-standard),
  transform var(--duration-fast) var(--ease-standard);
  "
  onmouseenter={(e) => {
  e.currentTarget.style.background =
  `color-mix(
  in oklab,
  var(--header-foreground, var(--foreground)) 15%,
  transparent
  )`;
  }}
  onmouseleave={(e) => {
  e.currentTarget.style.background =
  `color-mix(
  in oklab,
  var(--header-foreground, var(--foreground)) 10%,
  transparent
  )`;
  }}
  >
  <!-- Track Icons -->
  <div
    class="
	   absolute
	   inset-0
	   flex
	   items-center
	   justify-between
	   px-4
	   "
    style="
	   color:
           var(
           --header-foreground,
           var(--foreground)
           );
	   "
	   >
	   <Icon
	     icon="ph:sun"
	     class="
		    text-lg
		    transition-opacity
		    duration-300
		    {isDark ? 'opacity-40' : 'opacity-100'}
		    "
	     />

	   <Icon
	     icon="ph:moon"
	     class="
		    text-lg
		    transition-opacity
		    duration-300
		    {isDark ? 'opacity-100' : 'opacity-40'}
		    "
	     />
</div>

<!-- Sliding Knob -->
<div
  class={`
  absolute
  left-1
  flex
  h-10
  w-10
  items-center
  justify-center
  rounded-full
  shadow-lg
  transition-all
  duration-300
  ${isDark ? 'translate-x-12' : 'translate-x-0'}
  bg-background
  text-foreground
  `}
  >
  <Icon
    icon={isDark ? 'ph:moon' : 'ph:sun'}
    class="text-xl"
    />
</div>
</button>
