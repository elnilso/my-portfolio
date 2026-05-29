<script lang="ts">
  import * as m from "$paraglide/messages.js";
  import { headerSection } from '$lib/actions/headerSection'; 
</script>

<section class="p-8 mt-20 gap-y-20 md:p-28 max-w-7xl mx-auto">
  <div use:headerSection={'inverse'} class="bg-foreground shadow-md shadow-foreground p-12 md:p-20">
    <h2 class="text-h2 text-background font-display">
      {m.philosophy_title()}
    </h2>
    <p class="text-sm text-background pt-10">
      {m.philosophy_text()}
    </p>
  </div>
</section>
