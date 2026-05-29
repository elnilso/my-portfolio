<script lang="ts">
  type EducationEntry = {
    period: string;
    degree: string;
    institution: string;
    active?: boolean;
  };

  const entries: EducationEntry[] = [
    {
      period: '2023 — Present',
      degree: 'BSC Information Technology',
      institution: 'University of Bielefeld',
      active: true,
    },
    {
      period: '2019 — 2023',
      degree: 'BSC Information Technology',
      institution: 'FernUni in Hagen',
      active: false,
    },
  ];

  // Must match the Tailwind spacing class used on the entries list below.
  // space-y-12 = 3rem. The line height is derived from this so it runs
  // exactly from the first marker centre to the last marker centre.
  const ENTRY_GAP_REM = 12;
</script>

<section class="relative mx-auto max-w-7xl py-24 px-[var(--page-padding-x)]">

  <!-- ── Section header — same pattern as all other sections ── -->
  <div class="relative mb-12 flex items-end justify-between gap-4 border-b border-border pb-6">
    <div>
      <p class="mb-3 text-[0.7rem] uppercase tracking-[0.22em] text-foreground/45">
        Academic Background
      </p>
      <h2 class="text-h2 font-display leading-none text-foreground">
        Education
      </h2>
    </div>
  </div>

  <!-- ── Timeline ─────────────────────────────────────────────
       Structure:
         relative container  ← line is anchored at left: 0 of this
           entry (relative)  ← marker is absolute within this, at left: 0
             marker          ← absolute, left-0 -translate-x-1/2 → centred on line
             content         ← pl-6, starts 24 px right of the line
  ────────────────────────────────────────────────────────────── -->
  <div class="relative">

    <!--
      Vertical connecting line.
      • top: aligns with the vertical centre of the first marker
      • height: (n−1) × gap  →  ends exactly at the centre of the last marker
      This way the line connects the markers without dangling above or below.
    -->
    <div
      class="absolute left-0 w-px bg-foreground/25"
      style="
        top:    0.25rem;
        height: calc({entries.length - 1} * {ENTRY_GAP_REM}rem);
      "
    ></div>

    <!-- Entries -->
    <ul class="space-y-12">
      {#each entries as entry}
        <li class="relative">

          <!--
            Square marker.
            left-0          → sits at the vertical line's x-position
            -translate-x-1/2 → shifts left by 6 px (half of w-3 = 12 px)
                               so the marker's visual centre is on the line
            top-[0.25rem]   → nudges down to align with the first line of text
          -->
          <div
            class="absolute left-0 z-40 top-[0.25rem] h-3 w-3 -translate-x-1/2"
            style="background: {entry.active
              ? 'var(--foreground)'
              : 'var(--muted)'};"
          ></div>

          <!-- Content — indented 24 px from the line -->
          <div class="pl-6 flex flex-col gap-0.5">
            <p class="font-body text-label text-foreground/45 tracking-[0.08em]">
              {entry.period}
            </p>
            <h3 class="font-body text-body-lg uppercase text-foreground/90">
              {entry.degree}
            </h3>
            <p class="font-body text-label text-foreground/60">
              {entry.institution}
            </p>
          </div>

        </li>
      {/each}
    </ul>

  </div>

</section>
