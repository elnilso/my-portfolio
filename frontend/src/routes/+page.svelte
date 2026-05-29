<script lang="ts">
 import SelectedProjects from '$lib/components/lists/SelectedProjects.svelte';
 import QuoteCard from '$lib/components/cards/QuoteCard.svelte';
 import HomeHero from '$lib/components/HomeHero.svelte';
 import TechStack from '$lib/components/cards/TechStack.svelte';
 import PhilosophyCard from '$lib/components/cards/PhilosophyCard.svelte';
 import ThanksCTA from '$lib/components/CTAs/ThanksCTA.svelte';
 import ContactMe from '$lib/components/CTAs/ContactMe.svelte';

 import { animate } from '$lib/actions/animate';

</script>

<section>
  
  <!-- HERO -->
  <HomeHero />
  
  <!-- PROJECTS -->
  <SelectedProjects />

  <!-- QUOTE -->
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
    <QuoteCard />
  </div>		  


  <!-- TECH STACK -->
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
    <TechStack />
  </div>
  
  <!-- PHILOSOPHY -->
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
    <PhilosophyCard />
  </div>

  <!-- THANK YOU -->
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
    <ThanksCTA />
  </div>

  <!-- CONTACT ME -->
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
    <ContactMe />
  </div>
  
</section>
