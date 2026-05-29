<script lang="ts">
  import gsap from 'gsap';
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  import { createEventDispatcher } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

  type Props = {
    open: boolean;
  };

  const isActive = (path: string) => $page.url.pathname === path;
  const currentYear = new Date().getFullYear();
  const dispatch = createEventDispatcher<{ close: void }>();

  let { open }: Props = $props();
  let overlay: HTMLDivElement;

  afterNavigate(() => {
    gsap.to(overlay, {
      autoAlpha: 0,
      y: -20,
      duration: 0.4,
      ease: 'power3.in',
      onComplete: () => {
	dispatch('close');
      }
    });
  });

  $effect(() => {
    if (!overlay) return;
    if (open) {
      gsap.to(overlay, {
	autoAlpha: 1,
	y: 0,
	duration: 0.5,
	ease: 'power3.out'
      });
    } else {
      gsap.to(overlay, {
	autoAlpha: 0,
	y: -20,
	duration: 0.4,
	ease: 'power3.in'
      });
    }
  });
</script>

<div
  bind:this={overlay}
  class={`
  fixed inset-0
  w-screen h-screen
  bg-background
  z-60
  text-foreground
  ${open ? 'pointer-events-auto' : 'pointer-events-none'}
  `}
  style="opacity: 0; visibility: hidden;"
  >
  <!-- LAYOUT: flex column, nav takes remaining height and centers its content -->
  <div class="relative h-full w-full flex flex-col px-6 pt-16 pb-6">

    <!-- CENTER NAV — flex-1 so it fills remaining height, justify-center to center content -->
    <nav class="flex-1 flex flex-col items-center justify-center text-center gap-8">
      <!-- Title -->
      <h1 class="font-display text-4xl mb-2">Portfolio</h1>

      <!-- Links -->
      <div class="flex flex-col gap-8">
        <a href="/" class="block group">
	  <div
	    class={`font-display text-5xl leading-none inline-block pb-1 border-b transition-all duration-400
	    ${isActive('/') ? 'border-foreground' : 'border-transparent'}
	    `}
	    >
	    HOME
	  </div>
	  <div class="font-body text-label tracking-[0.3em] opacity-60 mt-2">001</div>
	</a>

        <a href="/about" class="block group">
	  <div
	    class={`font-display text-5xl leading-none inline-block pb-1 border-b transition-all duration-400
	    ${isActive('/about') ? 'border-foreground' : 'border-transparent'}
	    `}
	    >
	    ABOUT
	  </div>
	  <div class="font-body text-label tracking-[0.3em] opacity-60 mt-2">002</div>
	</a>

        <a href="/projects" class="block group">
	  <div
	    class={`font-display text-5xl leading-none inline-block pb-1 border-b transition-all duration-400
	    ${isActive('/projects') ? 'border-foreground' : 'border-transparent'}
	    `}
	    >
	    PROJECTS
	  </div>
	  <div class="font-body text-label tracking-[0.3em] opacity-60 mt-2">003</div>
	</a>
      </div>


    </nav>

    <!-- FOOTER — sits at the bottom (no flex-1 so it's auto height) -->
    <div class="flex flex-col items-center gap-8 shrink-0">
      
      <!-- Social icons -->
      <div class="flex gap-10 items-center">
        <!-- Email -->
        <a href="mailto:" aria-label="Email" class="hover:opacity-60 transition-opacity duration-200">
          <Icon icon="ph:at" class="text-3xl"/>
        </a>
        <!-- GitHub -->
        <a href="https://github.com" aria-label="GitHub" class="hover:opacity-60 transition-opacity duration-200">
          <Icon icon="ph:github-logo" class="text-3xl" />
        </a>
      </div>

      <div class="flex items-center gap-8">
	<ThemeToggle />

	<LanguageSwitcher direction="up" />

      </div>
      
      <!-- Year -->
      <div class="font-body text-xs tracking-[0.3em] opacity-70">{currentYear}©</div>
    </div>

    <div class="absolute w-2 h-2 rounded-full bg-foreground"
	 style="
		left: var(--page-padding-x);
		bottom: var(--page-padding-x);
		"
	 ></div>
    <div class="absolute w-2 h-2 rounded-full bg-foreground"
	 style="
		right: var(--page-padding-x);
		bottom: var(--page-padding-x);
		"
	 ></div>
  </div>
</div>
