<script lang="ts">
  import Icon from '@iconify/svelte';
  import { headerSection} from '$lib/actions/headerSection';

  type Field = {
    title: string;
    points: string[];
    icon: string;
  };

  const fields: Field[] = [
    {
      title: 'Infrastructure',
      points: [
        'Cloud Architecture',
        'Docker & Kubernetes',
        'CI/CD Pipeline Design',
        'Linux & Bash'
      ],
      icon: 'ph:bridge'
    },
    {
      title: 'Web Development',
      points: [
        'Svelte & SvelteKit',
        'Tailwind CSS Architecture',
        'TypeScript Systems',
        'Headless CMS Integration'
      ],
      icon: 'ph:code'
    },
    {
      title: 'Business',
      points: [
        'Statistics',
        'Marketing',
        'Business Management',
        'GDPR Compliance'
      ],
      icon: 'ph:chart-bar'
    }
  ];
</script>

<section
  class="relative mx-auto max-w-7xl px-[var(--page-padding-x)] py-24"
>
  <!-- Header -->
  <div
    class="relative mb-12 flex items-end justify-between gap-4 border-b border-border pb-6"
  >
    <div>
      <p
        class="mb-3 text-[0.7rem] uppercase tracking-[0.22em] text-foreground/45"
      >
        Core Competencies
      </p>

      <h2
        class="text-h2 font-display leading-none text-foreground"
      >
        Foundation
      </h2>
    </div>
  </div>

  <!-- GRID -->
  <div
    use:headerSection={'inverse'}
    class="relative grid grid-cols-1 items-start gap-8 md:grid-cols-2 xl:grid-cols-3"
  >
    {#each fields as field, index}
      <article
        class="group relative overflow-hidden border border-border transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-background/20"
        style={`
          background:
            color-mix(
              in oklab,
              var(--foreground) ${100 - index * 20}%,
              transparent
            );
        `}
      >
        <!-- Ambient Hover -->
        <div
          class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style="
            background:
              radial-gradient(
                circle at top left,
                color-mix(
                  in oklab,
                  var(--color-tertiary-500) 10%,
                  transparent
                ),
                transparent 55%
              );
          "
        ></div>

        <!-- Content -->
        <div
          class="relative flex h-full flex-col px-6 py-6"
        >
          <!-- Header -->
          <div
            class="mb-8 flex items-center gap-3"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full border border-background/10 bg-background/8 backdrop-blur-sm"
            >
              <Icon
                icon={field.icon}
                class="h-5 w-5 text-background"
              />
            </div>

            <h3
              class="text-body-lg uppercase text-background"
            >
              {field.title}
            </h3>
          </div>

          <!-- Points -->
          <ul class="space-y-3">
            {#each field.points as point}
              <li
                class="flex items-start gap-3 text-body-sm uppercase text-background/72"
              >
                <span
                  class="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-background/40"
                ></span>

                <span>
                  {point}
                </span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Bottom Accent -->
        <div
          class="absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full"
          style="
		 background:
		 linear-gradient(
                 90deg,
                 var(--color-tertiary-500),
                 var(--color-secondary-500)
		 );
		 "
        ></div>
      </article>
    {/each}
  </div>
</section>
