<script lang="ts">
  import Icon from '@iconify/svelte';

  type Feature = {
    title: string;
    description: string;
    icon: string;
    meta?: string;
  };

  let {
    eyebrow = 'Capabilities',
    title = 'Key features engineered into the system.',
    intro = 'A focused overview of the architectural, functional, and experiential features that define the project.',
    features = []
  }: {
    eyebrow?: string;
    title?: string;
    intro?: string;
    features?: Feature[];
  } = $props();
</script>

<section
  class="relative mx-auto max-w-7xl overflow-hidden px-[var(--page-padding-x)] py-24 sm:py-32"
>

  <!-- Header -->
  <div
    class="relative mb-20 grid gap-10 border-b border-border pb-10 lg:grid-cols-[1.1fr_0.9fr]"
  >
    <div>
      <p
        class="mb-5 text-[0.72rem] uppercase tracking-[0.24em] text-foreground/45"
      >
        {eyebrow}
      </p>

      <h2
        class="max-w-5xl font-display leading-[0.95] tracking-tight text-foreground"
        style="
          font-size:
            clamp(3rem, 7vw, 6rem);
        "
      >
        {title}
      </h2>
    </div>

    <div class="flex items-end">
      <p
        class="max-w-xl text-body leading-relaxed text-foreground/70"
      >
        {intro}
      </p>
    </div>
  </div>

  <!-- Features Grid -->
  <div
    class="relative grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
  >
    {#each features as feature, i}
      <article
        class="group relative overflow-hidden rounded-[calc(var(--radius-container)*1.5)] border border-border bg-card/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-transparent"
      >
        <!-- Hover Glow -->
        <div
          class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style="
            background:
              linear-gradient(
                135deg,
                color-mix(
                  in oklab,
                  var(--color-tertiary-500) 8%,
                  transparent
                ),
                transparent 45%
              );
          "
        />

        <!-- Top Accent -->
        <div
          class="absolute left-0 top-0 h-px w-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
          style="
            background:
              linear-gradient(
                90deg,
                var(--color-secondary-500),
                var(--color-tertiary-500),
                transparent
              );
          "
        />

        <div class="relative flex h-full flex-col p-7 sm:p-8">
          <!-- Meta -->
          <div
            class="mb-8 flex items-start justify-between gap-4"
          >
            <!-- Icon -->
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background/60 transition-transform duration-500 group-hover:scale-105"
            >
              <Icon
                icon={feature.icon}
                class="h-7 w-7 text-foreground"
              />
            </div>

            <!-- Number -->
            <div
              class="text-body-small tracking-[0.18em] text-foreground/30"
            >
              0{i + 1}
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-1 flex-col">
            <div>
              <h3
                class="text-body-lg uppercase tracking-[0.08em] text-foreground"
              >
                {feature.title}
              </h3>

              <p
                class="mt-4 text-body-small leading-relaxed text-foreground/70"
              >
                {feature.description}
              </p>
            </div>

            <!-- Bottom Meta -->
            {#if feature.meta}
              <div
                class="mt-8 flex items-center gap-3 border-t border-border pt-5"
              >
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
                />

                <p
                  class="text-[0.68rem] uppercase tracking-[0.18em] text-foreground/45"
                >
                  {feature.meta}
                </p>
              </div>
            {/if}
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>
