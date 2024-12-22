<template>
  <div v-if="isLoading" class="flex flex-col space-y-2">
    <div
      v-for="index in loaderLines"
      :key="index"
      class="h-4 bg-skeleton-loader rounded"
      :style="{
        width: `${((loaderLines - (index - 1)) / loaderLines) * 100}%`,
      }"
    />
  </div>
  <p v-else><slot /></p>
</template>

<script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        default: false,
      },
      loaderLines: {
        type: Number,
        default: 1,
      },
    },
  };
</script>
