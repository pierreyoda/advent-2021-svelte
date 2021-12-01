<script context="module" lang="ts">
  import { days } from "../../advent/days";

  /**
   * @type {import("@sveltejs/kit").Load}
   */
  export const load = async ({ page }) => {
    const dayNumber = Number(page.params.day);
    if (!Number.isSafeInteger(dayNumber)) {
      return {
        status: 404,
        error: new Error(`Invalid day slug "${dayNumber}"`),
      };
    }
    const day = days.find(d => d.dayNumber === dayNumber);
    if (!day) {
      return {
        status: 404,
        error: new Error(`Cannot find day with number "${dayNumber}"`),
      };
    }
    return {
      props: {
        day,
      },
    };
  };
</script>

<script lang="ts">
  import type { AdventOfCodeDay } from "../../advent/days";
  import MarkdownRenderer from "$lib/MarkdownRenderer.svelte";
  import AdventOfCodeDaySectionSolver from "$lib/AdventOfCodeDaySectionSolver.svelte";

  export let day: AdventOfCodeDay;
</script>

<svelte:head>
  <title>Advent of Code 2021 - Day {day.dayNumber}</title>
</svelte:head>

<div class="flex flex-col text-gray p-4 xl:p-12">
  <h2 class="my-6 text-center font-semibold text-xl">
    <span class="text-yellow">{day.dayNumber}</span>
    <span class="mx-1">-</span>
    {day.title}
  </h2>
  {#each day.sections as section, sectionIndex}
    <div class="w-full flex flex-col">
      <h3 class="my-6 text-yellow">Part {sectionIndex + 1}</h3>
      <MarkdownRenderer source={section.description} />
      <div class="w-full mt-6">
        <AdventOfCodeDaySectionSolver section={section} />
      </div>
    </div>
  {/each}
</div>


