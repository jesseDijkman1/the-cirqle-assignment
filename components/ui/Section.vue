<template>
  <div
    class="p-4 lg:p-10 rounded lg:rounded-lg bg-section-bg flex flex-col [&>*:not(first-child)]:mt-4 lg:[&>*:not(first-child)]:mt-10"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ["flex"],
  };
</script>
