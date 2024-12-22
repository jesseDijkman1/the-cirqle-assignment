<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
  export default {
    props: {
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
    font-size: 32px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 22px;
  }
  h4 {
    font-size: 18px;
  }
  h5 {
    font-size: 16px;
  }
  h6 {
    font-size: 14px;
  }
</style>
