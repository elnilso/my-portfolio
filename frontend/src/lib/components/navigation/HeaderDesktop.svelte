<script lang="ts">
 import ThemeToggle from '$lib/components/ThemeToggle.svelte';
 import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
 import * as m from '$paraglide/messages.js';
 import { page } from '$app/stores';
 import { headerTheme } from '$lib/stores/headerTheme.svelte';
 import { theme } from '$lib/stores/theme.svelte';

 const isActive = (path: string) => $page.url.pathname === path;

 // One ref per element — each checks its own horizontal overlap independently
 let nameEl     = $state<HTMLElement | undefined>();
 let homeEl     = $state<HTMLElement | undefined>();
 let aboutEl    = $state<HTMLElement | undefined>();
 let projectsEl = $state<HTMLElement | undefined>();
 let themeEl = $state<HTMLElement | undefined>();
 let langEl = $state<HTMLElement | undefined>();

 function overlapsSection(el: HTMLElement | undefined): boolean {
   const sr = headerTheme.activeSectionRect;
   if (!el || !sr || headerTheme.current === null) return false;
   const er = el.getBoundingClientRect();
   return er.left < sr.right && er.right > sr.left;
 }

 const nameTheme     = $derived(overlapsSection(nameEl)     ? headerTheme.current! : theme.current);
 const homeTheme     = $derived(overlapsSection(homeEl)     ? headerTheme.current! : theme.current);
 const aboutTheme    = $derived(overlapsSection(aboutEl)    ? headerTheme.current! : theme.current);
 const projectsTheme = $derived(overlapsSection(projectsEl) ? headerTheme.current! : theme.current);
 const themeTheme = $derived(overlapsSection(themeEl) ? headerTheme.current! : theme.current);
 const langTheme = $derived(overlapsSection(langEl) ? headerTheme.current! : theme.current);

 const muted = 'color-mix(in oklab, var(--foreground) 72%, transparent)';
</script>

<header class="relative flex w-full items-center justify-between px-[var(--page-padding-x)] py-6">

  <div
    bind:this={nameEl}
    data-theme={nameTheme}
    class="font-display text-h3 tracking-tight"
    style="color: var(--foreground);
              transition: color var(--duration-normal) var(--ease-standard);"
  >
    NH
  </div>

  <nav class="flex items-center gap-10 font-body text-body-sm tracking-wide">

    <a href="/" class="block">
      <div
        bind:this={homeEl}
        data-theme={homeTheme}
        class="leading-none inline-block pb-1 border-b uppercase"
        class:border-[var(--foreground)]={isActive('/')}
        class:border-transparent={!isActive('/')}
        style:color={isActive('/') ? 'var(--foreground)' : muted}
        style:transition="color var(--duration-normal) var(--ease-standard),
                  border-color var(--duration-normal) var(--ease-standard)"
        onmouseenter={(e) => { if (!isActive('/'))
		     (e.currentTarget as HTMLElement).style.color = 'var(--foreground)'; }}
        onmouseleave={(e) => { if (!isActive('/'))
		     (e.currentTarget as HTMLElement).style.color = muted; }}
	>{m.link1()}</div>
    </a>

    <a href="/about" class="block">
      <div
        bind:this={aboutEl}
        data-theme={aboutTheme}
        class="leading-none inline-block pb-1 border-b uppercase"
        class:border-[var(--foreground)]={isActive('/about')}
        class:border-transparent={!isActive('/about')}
        style:color={isActive('/about') ? 'var(--foreground)' : muted}
        style:transition="color var(--duration-normal) var(--ease-standard),
                  border-color var(--duration-normal) var(--ease-standard)"
        onmouseenter={(e) => { if (!isActive('/about'))
		     (e.currentTarget as HTMLElement).style.color = 'var(--foreground)'; }}
        onmouseleave={(e) => { if (!isActive('/about'))
		     (e.currentTarget as HTMLElement).style.color = muted; }}
	>{m.link2()}</div>
    </a>

    <a href="/projects" class="block">
      <div
        bind:this={projectsEl}
        data-theme={projectsTheme}
        class="leading-none inline-block pb-1 border-b uppercase"
        class:border-[var(--foreground)]={isActive('/projects')}
        class:border-transparent={!isActive('/projects')}
        style:color={isActive('/projects') ? 'var(--foreground)' : muted}
        style:transition="color var(--duration-normal) var(--ease-standard),
                  border-color var(--duration-normal) var(--ease-standard)"
        onmouseenter={(e) => { if (!isActive('/projects'))
		     (e.currentTarget as HTMLElement).style.color = 'var(--foreground)'; }}
        onmouseleave={(e) => { if (!isActive('/projects'))
		     (e.currentTarget as HTMLElement).style.color = muted; }}
	>{m.link3()}</div>
    </a>

    <div
      bind:this={themeEl}
      data-theme={themeTheme}
      class="flex items-center gap-6"
      style="transition: color var(--duration-normal) var(--ease-standard);"
    >
      <ThemeToggle />
    </div>

    <div
      bind:this={langEl}
      data-theme={langTheme}
      class="flex items-center gap-6"
      style="transition: color var(--duration-normal) var(--ease-standard);"
    >
      <LanguageSwitcher />
    </div>

  </nav>
</header>
