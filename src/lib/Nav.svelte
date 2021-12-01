<script context="module" lang="ts">
  const NAV_SECTIONS = ["home", "about"] as const;
  export type NavSection = typeof NAV_SECTIONS[number];
  export const section: NavSection = "home";
</script>

<nav class="bg-gray-800 md:px-8 py-4">
  <ul class="flex items-center justify-around text-white font-bold">
    <li>
      <a sveltekit:prefetch href="/" class:selected="{section === "home"}">Home</a>
    </li>
    <li>
      <a sveltekit:prefetch href="/about" class:selected="{section === "about"}">About</a>
    </li>
  </ul>
</nav>

<style lang="postcss">
  ul li {
    @apply text-gray hover:text-green-light;
    &.selected {
      @apply text-green;
    }
  }
</style>
