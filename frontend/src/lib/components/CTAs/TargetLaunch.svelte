<script lang="ts">
  import Icon from '@iconify/svelte';

  type Props = {
    quarter?: string;
    year?: string;
    status?: string;
  };

  let {
    quarter = 'Q3',
    year = '2026',
    status = 'Currently in development'
  }: Props = $props();
</script>

<section
  class="
    relative
    overflow-hidden
    border
    border-border
    bg-card/40
    backdrop-blur-sm
  "
>
  <!-- Ambient Gradient -->
  <div
    class="pointer-events-none absolute inset-0 opacity-60"
    style="
      background:
        radial-gradient(
          circle at top right,
          color-mix(
            in oklab,
            var(--color-tertiary-500) 14%,
            transparent
          ),
          transparent 35%
        ),
        radial-gradient(
          circle at bottom left,
          color-mix(
            in oklab,
            var(--color-secondary-500) 10%,
            transparent
          ),
          transparent 40%
        );
    "
  ></div>

  <!-- Top Border Accent -->
  <div
    class="absolute inset-x-0 top-0 h-px"
    style="
      background:
        linear-gradient(
          90deg,
          transparent,
          color-mix(
            in oklab,
            var(--color-tertiary-500) 55%,
            transparent
          ),
          transparent
        );
    "
  ></div>

  <div
    class="
      relative
      grid
      gap-12
      px-6
      py-10
      md:grid-cols-[1fr_auto]
      md:items-end
      md:px-10
      md:py-12
    "
  >
    <!-- LEFT -->
    <div class="max-w-2xl">
      <div
        class="
          mb-5
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-border
          px-3
          py-1.5
          text-[0.68rem]
          uppercase
          tracking-[0.22em]
        "
        style="
          background:
            color-mix(
              in oklab,
              var(--foreground) 4%,
              transparent
            );

          color:
            color-mix(
              in oklab,
              var(--foreground) 72%,
              transparent
            );
        "
      >
        <div
          class="h-2 w-2 rounded-full animate-pulse"
          style="
            background:
              var(--color-success-500);
          "
        ></div>

        {status}
      </div>

      <h2
        class="
          font-display
          text-display-lg
          leading-[1.1]
          text-foreground
        "
      >
        Target Launch
        <span
          class="block"
          style="
            color:
              color-mix(
                in oklab,
                var(--foreground) 70%,
                transparent
              );
          "
        >
          {quarter} {year}
        </span>
      </h2>

      <p
        class="
          mt-6
          max-w-xl
          text-body-small
          leading-relaxed
        "
        style="
          color:
            color-mix(
              in oklab,
              var(--foreground) 72%,
              transparent
            );
        "
      >
        This project is currently evolving through active
        iteration, system refinement, and interface testing.
        Additional features, technical insights, and launch
        details will be shared progressively.
      </p>
    </div>

    <!-- RIGHT -->
    <div
      class="
        flex
        flex-col
        items-start
        gap-4
        md:items-end
      "
    >
      <a
        href="/contact"
        class="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-border
          px-5
          py-3
          text-body-small
          uppercase
          tracking-[0.18em]
          transition-all
          duration-300
          hover:-translate-y-0.5
        "
        style="
          background:
            color-mix(
              in oklab,
              var(--foreground) 6%,
              transparent
            );

          color:
            var(--foreground);
        "
      >
        Stay Updated

        <Icon
          icon="ph:arrow-up-right"
          class="
            text-lg
            transition-transform
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      </a>

      <div
        class="
          flex
          items-center
          gap-3
          text-[0.68rem]
          uppercase
          tracking-[0.22em]
        "
        style="
          color:
            color-mix(
              in oklab,
              var(--foreground) 55%,
              transparent
            );
        "
      >
        <div
          class="h-px w-12"
          style="
            background:
              linear-gradient(
                90deg,
                transparent,
                var(--border)
              );
          "
        ></div>

        Portfolio Release Pipeline
      </div>
    </div>
  </div>
</section>
