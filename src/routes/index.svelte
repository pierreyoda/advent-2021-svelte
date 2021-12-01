<script lang="ts">
  import { days } from "../advent/days";
</script>

<svelte:head>
  <title>Advent of Code 2021 Svelte</title>
</svelte:head>

<div class="flex flex-col items-start">
  <ul class="w-full flex flex-col items-start pl-12 lg:pl-24 mt-10">
    {#each days as day}
      <li>
        <a sveltekit:prefetch href={`/days/${day.dayNumber}/`} class="flex items-center text-gray hover:text-yellow">
          <span class="text-yellow">
            {day.dayNumber}
          </span>
          <span class="ml-1 mr-1">-</span>
          {day.title}
        </a>
      </li>
    {/each}
  </ul>
</div>
