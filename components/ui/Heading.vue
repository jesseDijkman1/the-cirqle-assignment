<template>
  <component :is="tag">
    <div
      v-if="isLoading"
      class="w-full max-w-xs bg-skeleton-loader rounded h-8"
    />
    <slot v-else />
  </component>
</template>

<script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        default: false,
      },
      tag: {
        type: String,
        default: "h1",
        validator(value) {
          const validTags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div"];
          return validTags.includes(value);
        },
      },
    },
  };
</script>

<style scoped>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
    font-weight: bold;
    margin-bottom: 0.75em;
    text-transform: capitalize;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.625rem;
  }
  h3 {
    font-size: 1.375rem;
  }
  h4 {
    font-size: 1.125rem;
  }
  h5 {
    font-size: 1.625rem;
  }
  h6 {
    font-size: 0.875rem;
  }
</style>
