<script lang="ts">
 import ProjectCard from '$lib/components/cards/ProjectCard.svelte';

 import placeholder from '$lib/assets/placeholder.png';
 import { animate } from '$lib/actions/animate';

 import Icon from '@iconify/svelte';

 import * as m from '$paraglide/messages.js';

 const projects = [
   {
     title: '3DCompare',
     description: 'Real-time geometric analysis tool.',
     tags: ['WebGL', 'Next.js'],
     href: '/projects/3dcompare',
     image: placeholder
   },
   {
     title: 'SOPHIE’S Way',
     description: 'Adaptive digital storefront for fashion.',
     tags: ['E-Commerce', 'Design'],
     href: '/projects/sophies-way',
     image: placeholder
   },
   {
     title: 'Core Algorithm',
     description: 'Efficiency optimization framework.',
     tags: ['Data', 'Algorithm'],
     href: '/projects/core-algorithm',
     image: placeholder
   },
   {
     title: 'Structural Integrity',
     description: 'Scalable infrastructure design.',
     tags: ['Systems', 'Architecture'],
     href: '/projects/structural-integrity',
     image: placeholder
   }
 ];
</script>

<section
  class="relative mx-auto max-w-7xl px-[var(--page-padding-x)] py-24"
>

  <!-- Header -->
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
    class="relative mb-10 flex items-end justify-between gap-4 border-b border-border pb-6"
  >
    <div>
      <p
        class="mb-3 text-[0.7rem] uppercase tracking-[0.22em] text-foreground/45"
      >
        {m.sel_projects_subtitle()}
      </p>

      <h2
        class="text-h2 font-display leading-none text-foreground"
      >
        {m.sel_projects_title()}
      </h2>
    </div>

    <div
      class="flex items-center gap-3 text-foreground/45"
    >
      <div
        class="h-px w-12"
        style="
               background:
               linear-gradient(
               90deg,
               transparent,
               var(--border)
               );
               "
      ></div>

      <p class="text-body-small tracking-[0.2em]">
        [0{projects.length}]
      </p>
    </div>
  </div>

  <!-- Grid -->
  <div
    class="relative grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:[&>*:nth-child(even)]:translate-y-16"
  >
    {#each projects as project}
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
	<ProjectCard
	  title={project.title}
	  description={project.description}
	  tags={project.tags}
	  href={project.href}
	  image={project.image}
	/>
      </div>
    {/each}
  </div>
  <div class="flex justify-center mx-auto translate-y-28 text-foreground/75">
    <button class="flex items-center justify-center text-button transition-all duration-300 hover:-translate-y-1">
      <a href="/projects"
	 aria-label="projects"
	 class="me-4"
      >
	{m.sel_more()}
	
      </a>
      <Icon icon="ph:arrow-right" class="h-8 w-8"/>
    </button>
  </div>
</section>
