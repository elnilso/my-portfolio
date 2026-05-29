<script lang="ts">
  import Me from '$lib/components/buttons/Me.svelte';
</script>

<!--
  Layout breakdown (matching the Figma):

    ┌─────────────────────────────────┐
    │  CONTACT  [●ME]                 │  ← flex row, items-center, no hacks
    │  Feel free to contact me        │  ← serif subtitle, below the row
    │  with questions, offers…        │
    └─────────────────────────────────┘

  Everything is in normal document flow. The -ml / -mt hacks are gone.
  The Me button scales via explicit responsive classes that match the
  heading breakpoints (see Me.svelte for the sizing table).
-->
<section class="relative mx-auto max-w-xl px-[var(--page-padding-x)] py-24">

  <!-- ── Heading row ─────────────────────────────────────────── -->
  <!--
    gap-3 at mobile keeps the circle tight to CONTACT.
    At larger sizes gap-5/gap-6 gives the circle a little air.
    items-center vertically centres the circle with the heading text.
  -->
  <div class="flex items-center gap-3 sm:gap-4 md:gap-5">

    <h2
      class="
        font-display leading-none text-foreground
        text-h2 sm:text-h1 md:text-display-lg
      "
    >
      CONTACT
    </h2>

    <Me />

  </div>

  <!-- ── Subtitle ────────────────────────────────────────────── -->
  <!--
    font-display → Abril Fatface gives the natural serif/italic quality.
    max-w-xs/sm prevents the line from running too long on wide screens.
    text-foreground/60 keeps it visually secondary to the heading.
    mt scales with the heading size so the gap breathes correctly.
  -->
  <p
    class="
      max-w-[17rem] sm:max-w-xs md:max-w-sm
      font-display leading-snug text-foreground/60
      text-lg sm:text-xl md:text-2xl
    "
  >
    Feel free to contact me<br />
    with questions, offers or ideas.
  </p>

</section>
