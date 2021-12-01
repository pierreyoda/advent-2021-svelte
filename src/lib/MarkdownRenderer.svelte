<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";

  export let source: string;
</script>

<div class="markdown-container">
  <SvelteMarkdown source={source} />
</div>

<style lang="postcss">
.markdown-container {
  @apply text-gray text-sm;

  :global(> *) {
    @apply mb-4;
  }

  :global(p em) {
    @apply text-yellow not-italic;
  }

  :global(a) {
    @apply text-green;
  }

  :global(pre) {
    @apply bg-blue-darker border border-gray-dark;
  }
}
</style>
