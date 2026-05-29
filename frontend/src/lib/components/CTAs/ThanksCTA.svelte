<script lang="ts">
 import * as m from '$paraglide/messages.js';
 import Icon from '@iconify/svelte';
</script>

<section
  class="relative mx-auto max-w-7xl overflow-hidden px-[var(--page-padding-x)] py-24 sm:py-32"
>
  <!-- Card -->
  <div
    class="relative overflow-hidden rounded-[calc(var(--radius-container)*2)] px-8 py-16 sm:px-14 sm:py-24"
  >
    <!-- Soft Overlay -->
    <div
      class="pointer-events-none absolute inset-0 opacity-30"
      style="
             background:
             linear-gradient(
             135deg,
             color-mix(
             in oklab,
             var(--color-tertiary-500) 6%,
             transparent
             ),
             transparent 50%
             );
	     "
    ></div>

    <!-- Center Content -->
    <div
      class="relative mx-auto flex max-w-4xl flex-col items-center text-center"
    >
      <!-- Decorative Orb -->
      <div class="relative mb-10">
        <!-- Glow -->
        <div
          class="absolute inset-0 scale-[2.8] rounded-full blur-3xl opacity-50"
          style="
		 background:
		 radial-gradient(
                 circle,
                 color-mix(
                 in oklab,
                 var(--color-tertiary-500) 18%,
                 transparent
                 ),
                 transparent 70%
		 );
		 "
        ></div>

        <!-- Orb -->
        <div
          class="relative flex h-16 w-16 items-center justify-center rounded-full border border-border bg-foreground shadow-xl shadow-foreground/10"
        >
          <Icon
            icon="ph:check"
            class="h-7 w-7 text-background"
          />
        </div>
      </div>

      <!-- Label -->
      <p
        class="mb-6 text-label uppercase tracking-[0.26em] text-foreground/45"
      >
        {m.thanks_title()}
      </p>

      <!-- Main Heading -->
      <h2
        class="max-w-4xl font-display leading-[0.95] tracking-tight text-foreground"
        style="
               font-size:
               clamp(2.5rem, 6vw, 5.5rem);
               "
      >
        {m.thanks_text()}
      </h2>

      <!-- Bottom Accent -->
      <div
        class="mt-14 flex items-center gap-5"
      >
        <div
          class="h-px w-16"
          style="
		 background:
		 linear-gradient(
                 90deg,
                 transparent,
                 var(--border)
		 );
		 "
        ></div>

        <div
          class="h-1.5 w-1.5 rounded-full"
          style="
		 background:
		 linear-gradient(
                 135deg,
                 var(--color-secondary-500),
                 var(--color-tertiary-500)
		 );
		 "
        ></div>

        <div
          class="h-px w-16"
          style="
		 background:
		 linear-gradient(
                 90deg,
                 var(--border),
                 transparent
		 );
		 "
        ></div>
      </div>
    </div>
  </div>
</section>
