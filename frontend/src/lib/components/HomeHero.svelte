<script lang="ts">
 import SphinxModel from '$lib/assets/SphinxModel.png';

 import Icon from '@iconify/svelte';
 
 import * as m from '$paraglide/messages.js';

 import { animate } from '$lib/actions/animate'

 let hasScrolled = $state(false);

 function handleScroll() {
   hasScrolled = window.scrollY > 15;
 }
</script>

<svelte:window onscroll={handleScroll} />

<section
  class="mx-auto max-w-7xl px-[var(--page-padding-x)] pt-10 pb-20 sm:pt-16 sm:pb-28"
>
  <!-- TOP HERO ROW -->
  <div
    class="flex flex-col-reverse gap-10 md:flex-row md:items-start md:justify-between"
  >
    <!-- Hero Copy -->
    <div class="text-foreground">
      <div class="space-y-1">
        <h2 class="text-h3 text-foreground/75">
          {m.hero_subtitle1()}
        </h2>

        <h2 class="text-h3 text-foreground/75">
          {m.hero_subtitle2()}
        </h2>
      </div>

      <!-- Main Heading -->
      <div class="mt-6">
        <h1
          class="font-display leading-[0.9] tracking-tight text-foreground"
          style="font-size: clamp(4rem, 12vw, 10rem);"
        >
          NILS
          <br />
          HENNER
        </h1>
      </div>

      <!-- Metadata -->
      <div class="mt-6">
        <p
          class="text-caption tracking-[0.22em] text-foreground/55"
        >
          PORTFOLIO 2026
        </p>
      </div>
    </div>

    <!-- SPHINX -->
    <div class="flex justify-center md:justify-end">
      <enhanced:img
        src={SphinxModel}
        alt="Sphinx"
        class="w-full max-w-[400px] p-6 md:p-0"
        loading="lazy"
      />
    </div>
  </div>

  <!-- Intro -->
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
    class="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-12"
  >
    <!-- Accent line -->
    <div class="md:col-span-5">
      <div
	class="h-px w-16"
	style="
               background: linear-gradient(
               90deg,
               var(--color-tertiary-500),
               transparent
               );
	       "
      />
    </div>

    <!-- Intro text + CTA grouped properly -->
    <div class="md:col-span-7 flex flex-col gap-8">
      <p class="max-w-2xl text-body leading-relaxed text-foreground/72">
	{m.hero_introduction()}
      </p>

      <!-- CTA aligned WITH text block (not floating) -->
      <div class="flex justify-start md:justify-end">
	<a
          href="/about"
          class="
		group relative inline-flex items-center gap-3
		rounded-full px-6 py-3

		text-body-sm uppercase tracking-[0.18em]
		text-foreground

		border border-border/60

		bg-gradient-to-b from-foreground/10 to-transparent
		backdrop-blur-md

		shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,0,0,0.25)]

		transition-all duration-300 ease-out

		hover:-translate-y-1
		hover:border-foreground/30
		hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]

		active:translate-y-0
		"
	>
          <span
            class="
		   absolute inset-0 rounded-full opacity-0
		   bg-gradient-to-r from-tertiary-500/20 via-transparent to-tertiary-500/20
		   blur-xl transition-opacity duration-500
		   group-hover:opacity-100
		   "
          />

          <span class="relative z-10 text-foreground">
            More about me
          </span>

          <Icon
            icon="ph:arrow-up-right"
            class="
		  relative z-10 text-lg
		  text-foreground
		  transition-transform duration-300 ease-out
		  group-hover:translate-x-1 group-hover:-translate-y-1
		  "
          />
	</a>
      </div>
    </div>
  </div>

  <!-- <div -->
  <!--   class=" -->
  <!-- 	   w-fit mx-auto py-24 -->
  <!-- 	   flex items-center justify-center gap-4 -->
  <!-- 	   font-mono -->
  <!-- 	   text-label -->
  <!-- 	   uppercase -->
  <!-- 	   tracking-[0.35em] -->
  <!-- 	   text-foreground/60 -->
  <!-- 	   select-none -->
  <!-- 	   transition-all transform duration-500 -->
  <!-- 	   " -->
  <!--   class:animate-pulse={!hasScrolled} -->
  <!--   class:opacity-0={hasScrolled} -->
  <!--   class:translate-y-4={hasScrolled} -->
  <!--   class:scale-95={hasScrolled} -->
  <!--   > -->
  <!--   <div class="h-px w-16 bg-foreground/40"></div> -->

  <!--   <span class="whitespace-nowrap"> -->
  <!--     {m.hero_scroll()} -->
  <!--   </span> -->
  <!-- </div> -->
</section>
