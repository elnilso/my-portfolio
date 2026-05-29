<script lang="ts">
  import Icon from '@iconify/svelte';
  import avatar from '$lib/assets/Avatar.jpeg';

  import * as m from '$paraglide/messages.js';

  let hovered = $state(false);
</script>

<section
  class="relative mx-auto max-w-7xl overflow-hidden px-[var(--page-padding-x)] pt-12 pb-24 sm:pt-18 sm:pb-32"
>
  <!-- Top Metadata -->
  <div
    class="relative mb-10 flex items-center justify-between border-b border-border pb-5"
  >
    <div class="flex items-center gap-3">
      <!-- <div
           class="h-2 w-2 rounded-full"
           style="
           background:
           linear-gradient(
           135deg,
           var(--color-secondary-500),
           var(--color-tertiary-500)
           );
           "
	   /> -->

      <p
        class="text-[0.7rem] uppercase tracking-[0.22em] text-foreground/45"
      >
        {m.about_sub1()} / Portfolio 2026
      </p>
    </div>

    <p
      class="hidden text-body-small tracking-[0.2em] text-foreground/35 sm:block uppercase"
    >
      [{m.about_sub2()}]
    </p>
  </div>

  <!-- Main Grid -->
  <div
    class="relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]"
  >
    <!-- Avatar -->
    <div class="relative">
      <!-- Outer Glow -->
      <div
        class="absolute inset-0 scale-[1.08] rounded-[calc(var(--radius-container)*2)] opacity-60 blur-3xl"
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

      <!-- Image Container -->
      <div
        class="group relative overflow-hidden rounded-[calc(var(--radius-container)*2)] border border-border bg-card/60"
        onmouseenter={() => hovered = true}
        onmouseleave={() => hovered = false}
      >
        <!-- Glass Overlay -->
        <div
          class="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style="
            background:
              linear-gradient(
                135deg,
                color-mix(
                  in oklab,
                  var(--color-surface-500) 8%,
                  transparent
                ),
                transparent 40%
              );
          "
        ></div>

        <!-- Image -->
        <enhanced:img
          src={avatar}
          alt="Portrait"
          class="aspect-[0.82] h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-emphasized)] group-hover:scale-[1.03]"
          loading="lazy"
        />

        <!-- Bottom Fade -->
        <div
          class="absolute inset-0"
          style="
            background:
              linear-gradient(
                to top,
                color-mix(
                  in oklab,
                  var(--background) 75%,
                  transparent
                ),
                transparent 45%
              );
          "
        ></div>

        <!-- Floating Badge -->
        <!-- <div
             class="absolute bottom-5 left-5 z-20 rounded-full border border-border bg-background/75 px-4 py-2 backdrop-blur-md"
             >
             <div class="flex items-center gap-2">
             <div
             class="h-2 w-2 rounded-full"
             style="
             background:
             linear-gradient(
             135deg,
             var(--color-success-500),
             var(--color-secondary-500)
             );
             "
             />

             <p
             class="text-[0.65rem] uppercase tracking-[0.18em] text-foreground/70"
             >
             Available for projects
             </p>
             </div>
             </div> -->
	
      </div>
    </div>

    <!-- Content -->
    <div class="relative">
      <!-- Small Intro -->
      <p
        class="mb-5 text-[0.7rem] uppercase tracking-[0.24em] text-foreground/45"
      >
        {m.about_sub3()} / Designer
      </p>

      <!-- Main Heading -->
      <h1
        class="font-display leading-[1.01] tracking-tight text-foreground"
        style="
          font-size:
            clamp(3.5rem, 8vw, 8rem);
        "
      >
        {m.about_title1()}
        <br />

        <span
          class="bg-gradient-to-r from-foreground via-[var(--color-tertiary-400)] to-foreground bg-clip-text text-transparent"
        >
          {m.about_title2()}
        </span>

        {m.about_title3()}
        <br />

        {m.about_title4()}
      </h1>

      <!-- Description -->
      <div
        class="mt-10 max-w-2xl border-l border-border pl-6"
      >
        <p
          class="text-body leading-relaxed text-foreground/72"
        >
          {m.about_text()}
        </p>
      </div>

      <!-- Meta Info -->
      <div
        class="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-3"
      >
        <div>
          <p
            class="mb-2 text-[0.65rem] uppercase tracking-[0.18em] text-foreground/40"
          >
            Focus
          </p>

          <p class="text-body-small text-foreground/75">
            Full-Stack Systems
            <br />
            Interaction Design
          </p>
        </div>

        <div>
          <p
            class="mb-2 text-[0.65rem] uppercase tracking-[0.18em] text-foreground/40"
          >
            Location
          </p>

          <p class="text-body-small text-foreground/75">
            Germany / Remote
          </p>
        </div>

        <div>
          <p
            class="mb-2 text-[0.65rem] uppercase tracking-[0.18em] text-foreground/40"
          >
            Experience
          </p>

          <p class="text-body-small text-foreground/75">
            Design Engineering
            <br />
            Creative Development
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 flex flex-wrap gap-4">
        <a
          href="/cv"
          class="group inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-body-small text-foreground transition-all duration-[var(--duration-fast)] hover:-translate-y-0.5 hover:border-foreground/20"
        >
          View CV

          <Icon
            icon="ph:arrow-up-right"
            width="18"
            class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <a
          href="/contact"
          class="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-body-small text-foreground/70 transition-all duration-[var(--duration-fast)] hover:border-foreground/20 hover:text-foreground"
        >
          Contact
        </a>
      </div>
    </div>
  </div>
</section>
