<template>
  <div
    :class="[
      'w-full h-auto bg-black flex justify-center rounded-xl',
      { '!bg-skeleton-loader min-h-[28.75rem]': isLoading },
    ]"
  >
    <video
      :width="width"
      :height="height"
      controls
      :class="['max-h-[28.75rem] h-full w-auto', { 'opacity-0': isLoading }]"
    >
      <source
        v-for="(source, index) in sources"
        :key="`source-${index}`"
        :src="source.src"
        :type="source.type"
      />
    </video>
  </div>
</template>

<script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        default: false,
      },
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
