<script lang="ts">
  import Icon from '@iconify/svelte';
  import { headerSection } from '$lib/actions/headerSection';
</script>

<section
  class="relative mx-auto max-w-7xl overflow-hidden px-[var(--page-padding-x)] py-24 sm:py-32"
>

  <!-- CTA Container -->
  <div
    class="relative overflow-hidden rounded-[calc(var(--radius-container)*2)] border border-border bg-card/40 px-8 py-14 backdrop-blur-sm sm:px-14 sm:py-20"
  >
    <!-- Soft Glow -->
    <div
      class="pointer-events-none absolute inset-0 opacity-40"
      style="
             background:
             linear-gradient(
             135deg,
             color-mix(
             in oklab,
             var(--color-tertiary-500) 6%,
             transparent
             ),
             transparent 45%
             );
	     "
    ></div>

    <!-- Top Meta -->
    <div
      class="relative mb-10 flex items-center justify-between border-b border-border pb-5"
    >
      <div class="flex items-center gap-3">
        <div
          class="h-2 w-2 rounded-full animate-pulse"
          style="
		 background:
		 linear-gradient(
                 135deg,
                 var(--color-success-500),
                 var(--color-success-500)
		 );
		 "
        ></div>

        <p
          class="text-[0.68rem] uppercase tracking-[0.24em] text-foreground/45"
        >
          Collaboration / Open
        </p>
      </div>

      <p
        class="hidden text-body-small tracking-[0.18em] text-foreground/35 md:block"
      >
        [2026]
      </p>
    </div>

    <!-- Main Content -->
    <div
      class="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
    >
      <!-- Left -->
      <div>
        <p
          class="mb-6 text-label uppercase tracking-[0.24em] text-foreground/45"
        >
          Let’s Talk
        </p>

        <h2
          class="max-w-4xl font-display leading-[0.94] tracking-tight text-foreground"
          style="
		 font-size:
		 clamp(3rem, 7vw, 6.5rem);
		 "
        >
          If you have a project
          you’d like to build,
          let’s create something
          exceptional together.
        </h2>
      </div>

      <!-- Right -->
      <div
        class="flex flex-col items-start gap-8 lg:items-end"
      >
        <p
          class="max-w-md text-body leading-relaxed text-foreground/70 lg:text-right"
        >
          Available for selected freelance work,
          creative development, digital systems,
          and long-term collaborations.
        </p>

        <!-- CTA Button -->
        <a
	  use:headerSection={'inverse'}
          href="/contact"
          class="group inline-flex items-center gap-4 rounded-full border border-border bg-foreground px-7 py-4 text-body-small uppercase tracking-[0.16em] text-background transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/10"
        >
          Start a Conversation

          <div
            class="flex h-8 w-8 items-center justify-center rounded-full bg-background/10 transition-transform duration-300 group-hover:translate-x-1"
          >
            <Icon
              icon="ph:arrow-up-right"
              class="h-4 w-4 text-background"
            />
          </div>
        </a>
      </div>
    </div>

    <!-- Bottom Accent -->
    <div
      class="relative mt-16 flex items-center justify-center"
    >
      <div
        class="h-px flex-1"
        style="
               background:
               linear-gradient(
               90deg,
               transparent,
               var(--border)
               );
               "
      ></div>
    </div>
  </div>
</section>
