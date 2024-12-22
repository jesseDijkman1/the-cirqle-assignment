<template>
  <button :type="type" class="button bg-green-400 w-[18.75rem]">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: "button",
      },
    },
  };
</script>
