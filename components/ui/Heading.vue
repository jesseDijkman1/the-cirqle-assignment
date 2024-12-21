<template>
  <component :is="tag">
    <div v-if="loading" class="w-full max-w-40 h-4 bg-gray-500"></div>
    <slot v-else></slot>
  </component>
</template>

<script>
  export default {
    props: {
      tag: {
        default: "h1",
        type: String,
      },
      loading: {
        default: false,
        type: Boolean,
      },
    },
    setup(props, { slots }) {
      const hasSlot = (name) => !!slots[name];

      console.log(slots.default);
      return { hasSlot };
    },
    mounted() {
      console.log(this.$slots.default());
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
</style>
