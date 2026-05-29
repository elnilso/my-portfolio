<script lang="ts">
 import ProjectCard from "$lib/components/cards/ProjectCard.svelte";
 import placeholder from '$lib/assets/placeholder.png';

 import * as m from '$paraglide/messages.js';
 import { animate } from '$lib/actions/animate';

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

<section class="relative mx-auto max-w-7xl px-[var(--page-padding-x)] py-24">

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

  
</section>


