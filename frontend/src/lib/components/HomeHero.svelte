<script lang="ts">
  import SphinxModel from '$lib/assets/SphinxModel.png';

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
          Programmer
        </h2>

        <h2 class="text-h3 text-foreground/75">
          Designer
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
    class="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-12"
    >
    <div class="md:col-span-5">
      <div
        class="h-px w-16"
        style="
               background:
               linear-gradient(
               90deg,
               var(--color-tertiary-500),
               transparent
               );
               "
	></div>
    </div>

    <div class="md:col-span-7">
      <p
        class="max-w-2xl text-body leading-relaxed text-foreground/72"
	>
        Architecting digital environments where
        high-performance engineering meets
        meticulous editorial design. Based in the
        intersection of code and aesthetics.
      </p>
    </div>
  </div>

  <div
    class="
	   w-fit mx-auto py-24
	   flex items-center justify-center gap-4
	   font-mono
	   text-label
	   uppercase
	   tracking-[0.35em]
	   text-foreground/60
	   select-none
	   transition-all transform duration-500
	   "
    class:animate-pulse={!hasScrolled}
    class:opacity-0={hasScrolled}
    class:translate-y-4={hasScrolled}
    class:scale-95={hasScrolled}
    >
    <div class="h-px w-16 bg-foreground/40"></div>

    <span class="whitespace-nowrap">
      Scroll to explore
    </span>
  </div>
</section>
