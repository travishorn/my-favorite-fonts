<script>
  import { fontFamily, fontFamilies, typeScale, typeScales } from '../store.js';
</script>

<aside class="fixed top-5 left-5 flex flex-col gap-3">
  <select bind:value={$fontFamily} class="border border-gray-400 rounded p-1">
    {#each $fontFamilies as family}
      <option>{family}</option>
    {/each}
  </select>

  <select bind:value={$typeScale} class="border border-gray-400 rounded p-1">
    {#each $typeScales as typeScale}
      <option>{typeScale}</option>
    {/each}
  </select>
</aside>