<script lang="ts">
 type Step = {
   title: string;
   description: string;
   meta?: string[];
   image?: string;
 };

 let {
   eyebrow = 'How it works',
   title = 'From Video to 3D Model in 5 Steps',
   steps = []
 }: {
   eyebrow?: string;
   title?: string;
   steps?: Step[];
 } = $props();
</script>

<section
  class="mx-auto max-w-7xl px-[var(--page-padding-x)] py-28 md:py-40"
>
  <!-- HEADER -->
  <div class="mb-28 gap-4 pb-10 border-b border-border">
    <p
      class="mb-4 uppercase tracking-[0.25em] text-[0.7rem] text-foreground/50"
    >
      {eyebrow}
    </p>

    <h2
      class="max-w-3xl font-display leading-none tracking-tight text-foreground text-5xl md:text-7xl"
    >
      {title}
    </h2>
  </div>

  <!-- STEPS -->
  <div class="flex flex-col gap-32 md:gap-48">
    {#each steps as step, i}
      <article
	class={`relative group ${
	      i % 2 !== 0 ? 'md:translate-y-20' : ''
	      }`}
      >
	<!-- BIG NUMBER -->
	<div
	  class={`absolute top-0 z-0 font-display leading-none tracking-tight pointer-events-none select-none
		text-[6rem] md:text-[10rem]
		text-foreground/15
		${
		  i % 2 === 0
		  ? '-left-2 md:-left-6'
		  : 'md:left-[60%]'
		}`}
	>
	  <span class="relative inline-block">
	    0{i + 1}
	  </span>
	</div>

	<!-- CONTENT -->
	<div
	  class={`relative grid gap-10 md:gap-16 items-center ${
		i % 2 === 0
		? 'md:grid-cols-[0.9fr_1.1fr]'
		: 'md:grid-cols-[1.1fr_0.9fr]'
		}`}
	>
	  <!-- TEXT -->
	  <div
	    class={`
		  relative z-10
		  ${i % 2 !== 0 ? 'md:order-2 md:pl-10' : 'md:pr-10'}
		  transition-transform duration-700
		  group-hover:-translate-y-1
		  `}
	  >
	    <h3
	      class="
		     font-display
		     text-4xl md:text-6xl
		     leading-[1.1]
		     tracking-[-0.04em]
		     text-foreground
		     "
	    >
	      {step.title}
	    </h3>

	    <p
	      class="
		     mt-5
		     max-w-[32rem]
		     text-base md:text-lg
		     leading-relaxed
		     text-foreground/75
		     "
	    >
	      {step.description}
	    </p>

	    {#if step.meta}
	      <ul
		class="
		       mt-10 space-y-3
		       text-[0.75rem]
		       uppercase
		       tracking-[0.18em]
		       text-foreground/50
		       "
	      >
		{#each step.meta as item}
		  <li class="flex items-start gap-3">
		    <span
		      class="mt-[0.35rem] h-[4px] w-[4px] rounded-full bg-foreground/50"
		    ></span>

		    <span>{item}</span>
		  </li>
		{/each}
	      </ul>
	    {/if}
	  </div>

	  <!-- MEDIA -->
	  <div
	    class="
		   group relative overflow-hidden
		   aspect-[4/3] w-full
		   rounded-2xl
		   border border-white/10
		   bg-gradient-to-br from-white/[0.03] to-white/[0.01]
		   shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
		   "
	  >
	    {#if step.image}
	      <img
		src={step.image}
		alt={step.title}
		class="
		    h-full w-full object-cover
		    transition-transform duration-700
		    group-hover:scale-[1.02]
		    "
	      />

	      <!-- subtle overlay -->
	      <div
		class="
		       absolute inset-0
		       bg-gradient-to-t
		       from-black/20 via-transparent to-transparent
		       "
	      ></div>
	    {:else}
	      <!-- Placeholder -->
	      <div
		class="
		       absolute inset-0
		       backdrop-blur-sm
		       "
	      ></div>

	      <!-- Glow -->
	      <div
		class="
		       absolute inset-0 opacity-0 transition-opacity duration-700
		       group-hover:opacity-100
		       bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]
		       "
	      ></div>

	      <!-- Noise -->
	      <div
		class="absolute inset-0 opacity-[0.03] mix-blend-overlay"
		style="
		       background-image:
		       url('https://grainy-gradients.vercel.app/noise.svg');
		       "
	      ></div>
	    {/if}
	  </div>
	  
      </article>
    {/each}
	</div>
</section>
