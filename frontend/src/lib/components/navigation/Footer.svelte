<script lang="ts">
  import Icon from '@iconify/svelte';

  import * as m from '$paraglide/messages.js';

  const currentYear = new Date().getFullYear();
</script>

<footer
  class="relative overflow-hidden bg-background"
  >
  <!-- Ambient Background -->
  <div
    class="pointer-events-none absolute inset-0 opacity-60"
    ></div>

  <!-- Social Icons -->
  <section class="relative mx-auto max-w-7xl px-[var(--page-padding-x)] pt-12 sm:pt-16">
    <ul class="flex items-center justify-center gap-8 sm:gap-6">
      <li>
        <a
          href="https://linkedin.com"
          rel="noreferrer"
          target="_blank"
          aria-label="LinkedIn"
          class="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/60 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[color-mix(in_oklab,var(--color-tertiary-500)_12%,var(--card))] hover:shadow-xl"
          >
          <Icon
            icon="ph:linkedin-logo"
            width="24"
            class="transition-transform duration-300 group-hover:scale-110"
            />
        </a>
      </li>

      <li>
        <a
          href="mailto:" 
          rel="noreferrer"
          target="_blank"
          aria-label="Instagram"
          class="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/60 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[color-mix(in_oklab,var(--color-secondary-500)_16%,var(--card))] hover:shadow-xl"
          >
          <Icon
            icon="ph:at"
            width="24"
            class="transition-transform duration-300 group-hover:scale-110"
            />
        </a>
      </li>
    </ul>
  </section>

  <!-- Main Footer -->
  <section class="relative">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-y-14 gap-x-10 px-[var(--page-padding-x)] py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr]"
      >
      <!-- Brand -->
      <div class="max-w-sm">
        <a
          href="/"
          class="inline-block text-h2 text-foreground transition-all duration-300 hover:opacity-90"
          >
          <span
            class="bg-gradient-to-r from-foreground via-[var(--color-tertiary-400)] to-foreground bg-clip-text text-transparent"
            >
            NILS HENNER
          </span>
        </a>

        <p class="mt-5 text-body-small leading-relaxed text-foreground/70">
          {m.motto()}
        </p>

        <!-- Accent Line -->
        <div
          class="mt-6 h-px w-24 rounded-full"
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

      <!-- Links -->
      <nav aria-label="Footer Navigation">
        <p class="text-h2 text-foreground">
          {m.footer_header1()}
        </p>

        <ul class="mt-6 space-y-4">
	  <li>
            <a
              href="/about"
              class="group inline-flex items-center gap-2 text-button text-foreground/70 transition-all duration-300 hover:text-foreground"
              >
              <span
                class="h-1.5 w-1.5 rounded-full bg-[var(--color-tertiary-500)] transition-transform duration-300 group-hover:scale-125"
		></span>
              {m.link2()}
            </a>
          </li>
          <li>
            <a
              href="/projects"
              class="group inline-flex items-center gap-2 text-button text-foreground/70 transition-all duration-300 hover:text-foreground"
              >
              <span
                class="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary-500)] transition-transform duration-300 group-hover:scale-125"
		></span>
              {m.link3()}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Legal -->
      <nav aria-label="Legal Navigation">
        <p class="text-h2 text-foreground">
          {m.footer_header2()}
        </p>

        <ul class="mt-6 space-y-4">
          <li>
            <a
              href="/imprint"
              class="group inline-flex items-center gap-2 text-button text-foreground/70 transition-all duration-300 hover:text-foreground"
              >
              <span
                class="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary-500)] transition-transform duration-300 group-hover:scale-125"
		></span>
              {m.link4()}
            </a>
          </li>

          <li>
            <a
              href="/data-policy"
              class="group inline-flex items-center gap-2 text-button text-foreground/70 transition-all duration-300 hover:text-foreground"
              >
              <span
                class="h-1.5 w-1.5 rounded-full bg-[var(--color-tertiary-500)] transition-transform duration-300 group-hover:scale-125"
		></span>
              {m.link5()}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>

  <!-- Bottom Bar -->
  <section class="relative">
    <div
      class="mx-auto items-center flex justify-between p-[var(--page-padding-x)]"
      >
      <!-- Left Dot -->
      <div
        class="h-2 w-2 rounded-full shadow-sm bg-foreground"
	></div>

      <!-- Copyright -->
      <p
        class="text-body-small text-center tracking-[0.12em] text-foreground/75"
	>
        ©{currentYear} NILS HENNER
      </p>

      <!-- Right Dot -->
      <div
        class="h-2 w-2 rounded-full shadow-sm bg-foreground"
	></div>
    </div>
  </section>
</footer>
