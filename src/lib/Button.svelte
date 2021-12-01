<script lang="ts">
  export let label: string;
  export let onClick: () => void;

  $: buttonLabel = `[${label}]`;
</script>

<button class="outline-none focus:outline-none" on:click="{onClick}">
  {buttonLabel}
</button>

<style lang="postcss">
  button {
    @apply text-green;
  }
</style>
