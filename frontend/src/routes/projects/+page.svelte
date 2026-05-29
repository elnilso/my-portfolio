<script lang="ts">
 import AllProjects from "$lib/components/lists/AllProjects.svelte";
  import LetsTalk from "$lib/components/CTAs/LetsTalk.svelte";

  import { animate } from '$lib/actions/animate';
</script>

<div>
  <div class="relative mx-auto max-w-7xl px-[var(--page-padding-x)] pt-12 pb-8 sm:pt-18 sm:pb-4" >
    <!-- TOP METADATA -->
    <div class="relative mb-2 flex items-center justify-between border-b border-border pb-4">
      <div class="flex items-center gap-3">
	<p class="text-[0.7rem] uppercase tracking-[0.22em] text-foreground/45">
	  Projects / Portfolio 2026
	</p>
      </div>
      <p class="hidden text-body-sm tracking-[0.2em] text-foreground/35 sm:block uppercase">
	[My Projects]
      </p>
    </div>
  </div>
  
  <AllProjects />
  
  <div
    use:animate={{
		type: 'from',
		duration: 1,
		yPercent: 50,
		opacity: 0,
		ease: 'power4.out',
		scrollTrigger: {
		  start: 'top 100%',
		  toggleActions: 'play none none none'
		}
		}}
  >
    <LetsTalk />
  </div>
</div>
