<script>
  export let value;
  export let height;
</script>

<div style="--width: {value}%; --height: {height}px"></div>

<style>
  div {
    background-color: hsl(240deg 80% 60%);
    border-radius: 4px 0 0 4px;
    width: var(--width);
    height: var(--height);
  }
</style>