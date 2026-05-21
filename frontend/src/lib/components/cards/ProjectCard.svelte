<script lang="ts">
  import Icon from '@iconify/svelte';
  import placeholder from '$lib/assets/placeholder.png';

  type Props = {
    title?: string;
    description?: string;
    tags?: string[];
    href?: string;
    image?: string;
  };

  let {
    title = '3DCompare',
    description = 'Real-time geometric analysis tool.',
    tags = ['WebGL', 'Next.js'],
    href = '/projects/3dcompare',
    image = placeholder
  }: Props = $props();
</script>

<a
  href={href}
  class="group block w-full"
>
  <article
    class="overflow-hidden rounded-[calc(var(--radius-container)*1.5)] border border-border bg-card/60 transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-foreground/20"
  >
    <!-- Image -->
    <div class="relative aspect-[0.74] overflow-hidden">
      <!-- Ambient Overlay -->
      <div
        class="absolute inset-0 z-10 opacity-0 transition-opacity duration-[var(--duration-slow)] group-hover:opacity-100"
        style="
          background:
            radial-gradient(
              circle at top center,
              color-mix(
                in oklab,
                var(--color-tertiary-500) 18%,
                transparent
              ),
              transparent 60%
            );
        "
      ></div>

      <!-- Image -->
      <enhanced:img
        src={image}
        alt={title}
        class="h-full w-full object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-emphasized)] group-hover:scale-[1.03]"
        loading="lazy"
      />

      <!-- Image Fade -->
      <div
        class="absolute inset-0"
        style="
          background:
            linear-gradient(
              to top,
              color-mix(
                in oklab,
                var(--color-primary-950) 70%,
                transparent
              ),
              transparent 40%
            );
        "
      ></div>

      <!-- Tags -->
      <div
        class="absolute left-4 top-4 z-20 flex flex-wrap gap-2"
      >
        {#each tags as tag}
          <span
            class="rounded-full border border-border bg-overlay/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-overlay-foreground backdrop-blur-sm"
          >
            {tag}
          </span>
        {/each}
      </div>
    </div>

    <!-- Content -->
    <div
      class="flex items-start justify-between gap-4 px-5 py-5 sm:px-6"
    >
      <div class="min-w-0">
        <h3
          class="truncate text-h3 text-foreground"
        >
          {title}
        </h3>

        <p
          class="mt-2 text-body-small leading-relaxed text-foreground/65"
        >
          {description}
        </p>
      </div>

      <!-- Arrow -->
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition-all duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-foreground/20 group-hover:text-foreground"
      >
        <Icon
          icon="ph:arrow-up-right"
          width="18"
        />
      </div>
    </div>

    <!-- Accent Line -->
    <div class="relative h-px w-full overflow-hidden">
      <div
        class="absolute inset-y-0 left-0 w-0 transition-all duration-700 group-hover:w-full"
        style="
               background:
               linear-gradient(
               90deg,
               var(--color-tertiary-500),
               var(--color-secondary-500),
               transparent
               );
               "
      ></div>

    </div>
  </article>
</a>
