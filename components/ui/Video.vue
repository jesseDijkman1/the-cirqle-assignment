<template>
  <div class="w-full h-auto bg-black flex justify-center rounded-xl">
    <video
      :width="width"
      :height="height"
      controls
      class="max-h-[460px] w-auto"
    >
      <source v-for="source in sources" :src="source.src" :type="source.type" />
    </video>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: Number,
        required: true,
      },
      height: {
        type: Number,
        required: true,
      },
      sources: {
        type: Array,
        required: true,
        validator(value) {
          return (
            Array.isArray(value) &&
            value.every((source) => source.src && source.type)
          );
        },
      },
    },
  };
</script>
