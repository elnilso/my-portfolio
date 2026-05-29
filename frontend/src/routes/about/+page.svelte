<script lang="ts">
 import AboutHero from "$lib/components/AboutHero.svelte";
 import FoundationCards from "$lib/components/cards/FoundationCards.svelte";
 import Education from "$lib/components/Education.svelte";
 import Languages from "$lib/components/lists/Languages.svelte";
 import ContactMe from "$lib/components/CTAs/ContactMe.svelte";
 import Available from "$lib/components/CTAs/Available.svelte";

 import { animate } from '$lib/actions/animate';
</script>

<div>
  <AboutHero />

  <!-- FOUNDATION -->
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
    <FoundationCards />
  </div>

  <!-- EDUCATION -->
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
    <Education />
  </div>

  <!-- LANGUAGES -->
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
    <Languages />
  </div>

  <!-- AVAILABLE CTA -->
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
    <Available />
  </div>

  <!-- CONTACT -->
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
</div>
