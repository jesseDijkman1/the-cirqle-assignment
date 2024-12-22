<template>
  <div class="w-32 h-32 bg-gray-500 rounded-full overflow-hidden">
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
