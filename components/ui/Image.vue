<template>
  <div class="w-32 h-32 rounded-full overflow-hidden bg-skeleton-loader">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover object-center"
    />
  </div>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
    },
  };
</script>
