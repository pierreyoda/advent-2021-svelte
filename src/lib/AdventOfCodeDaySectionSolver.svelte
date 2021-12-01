<script lang="ts">
  import Button from "./Button.svelte";
  import { AdventOfCodeDaySection, areSolutionsEqual } from "../advent/days";

  export let section: AdventOfCodeDaySection;

  let [solved, solution, hasError, time] = [false, null, false, 0];
  const solveSection = () => {
    if (solved) {
      return;
    }
    solution = null;
    hasError = false;
    try {
      const inputs = section.processInputs(section.inputs);
      const t0 = performance.now();
      solution = section.computeFunction.compute(inputs);
      time = performance.now() - t0;
      console.log(solution)
      solved = areSolutionsEqual(solution, section.expectedAnswer);
      if (!solved) {
        throw new Error("Solution and expected solution must be equal.");
      }
    } catch (err) {
      console.error(err);
      hasError = true;
    }
  };

  $: inputsDisplay = section.inputs.split('\n').filter(l => !!l.trim()).join('\n');
</script>

<div class="flex items-center justify-around w-full border border-gray-dark">
  <!-- inputs -->
  <div class="flex flex-col w-1/2">
    <pre class="h-48 overflow-y-scroll bg-blue-darker">
      <code>
        {inputsDisplay}
      </code>
    </pre>
  </div>
  <!-- solution -->
  <div class="flex flex-col items-center w-1/2 p-4">
    {#if hasError}
      <p class="error-message">
        An error has occurred during computation.
      </p>
    {:else if solved}
      <div class="answer-row">
        <span class="label">Solution:</span>
        <span class="value">{solution}</span>
      </div>
      <div class="answer-row">
        <span class="label">Expected:</span>
        <span class="value expected">{section.expectedAnswer}</span>
      </div>
      <div class="time">
        <span>Computed in {time.toFixed(2)}ms.</span>
      </div>
    {:else}
      <Button label="Solve" onClick={solveSection}  />
    {/if}
  </div>
</div>

<style lang="postcss">
  .error-message {
    @apply text-red;
  }

  .answer-row {
    @apply text-gray;
    @apply flex items-center justify-between;
    .label {
      @apply font-semibold;
    }
    .value {
      @apply ml-6 text-green-light;
      &.expected {
        @apply text-yellow;
      }
    }
  }

  .time {
    @apply mt-2;
  }
</style>
