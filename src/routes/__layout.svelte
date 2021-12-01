<script lang="ts">
  import "../app.css";
  import "../fonts.css";
  import Nav from "$lib/Nav.svelte";
  import type { NavSection } from "$lib/Nav.svelte";

  $: section = ((): NavSection => "home")() // TODO:
</script>

<svelte:head>
  <meta name="description" content="Advent of Code 2021 challenges completed in Typescript with a SvelteKit front-end.">
</svelte:head>

<div class="w-screen h-screen flex flex-col">
  <Nav {section} />
  <main>
    <slot />
  </main>
</div>
