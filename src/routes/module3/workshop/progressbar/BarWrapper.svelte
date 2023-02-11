<script>
  import Bar from "./Bar.svelte";
  export let value;
  export let height;
</script>

<div>
  <Bar {value} {height} />
</div>

<style>
  div {
    border-radius: 4px;
    /* Trim off corners when progress bar is near-full. */
    overflow: hidden;
  }
</style>
