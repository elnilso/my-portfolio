<script lang="ts">
  import Icon from '@iconify/svelte'
 </script>

<div class="relative mx-auto flex max-w-3xl flex-col items-center text-center py-24 md:py-32">
  
  <!-- subtle ambient glow -->
  <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div class="h-72 w-72 rounded-full bg-foreground/5 blur-3xl"></div>
  </div>

  <!-- TEXT BLOCK -->
  <div class="relative font-display text-display-lg md:text-display-xl text-foreground leading-[1.05] tracking-tight transition-transform duration-700 hover:-translate-y-1">
    
    <span class="block text-foreground/70 text-h3 md:text-body-lg mb-6 uppercase tracking-[0.25em]">
      Thank you for reading
    </span>

    <div class="flex items-center justify-center gap-6">
      
      <!-- ICON -->
      <span class="relative group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
        <span class="absolute h-12 w-12 rounded-full bg-foreground/5 blur-md"></span>
        <Icon 
          icon="ph:heart" 
          class="relative text-foreground/80 animate-pulse"
          width="42" 
          height="42" 
        />
      </span>

    </div>
  </div>

</div>
