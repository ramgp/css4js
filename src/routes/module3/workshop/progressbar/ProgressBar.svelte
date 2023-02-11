<script>
  import BarWrapper from "./BarWrapper.svelte";
  let value = 52;
  let size = "large";

  const styleFor = {
    small: {
      height: 8,
      padding: 0,
      radius: 4,
    },
    medium: {
      height: 12,
      padding: 0,
      radius: 4,
    },
    large: {
      height: 16,
      padding: 4,
      radius: 8,
    },
  };

  $: currentStyle = styleFor[size] || styleFor.medium;
</script>

<div
  style="--radius: {currentStyle.radius}px; --padding: {currentStyle.padding}px"
  role="progressbar"
  aria-valuenow={value}
  aria-valuemin="0"
  aria-valuemax="100"
>
  <BarWrapper {value} height={currentStyle.height} />
</div>
<p>
  <input type="number" bind:value />
  <select bind:value={size}>
    <option value="small">Small</option>
    <option value="medium">Medium</option>
    <option value="large">Large</option>
  </select>
</p>

<style>
  div {
    background-color: hsl(0deg 0% 50% / 0.15);
    box-shadow: inset 0px 2px 4px hsl(0deg 0% 50% / 0.35);
    border-radius: var(--radius);
    padding: var(--padding);
  }
</style>
