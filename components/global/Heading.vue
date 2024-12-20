<template>
  <component :is="tag">
    <div v-if="loading" class="w-full max-w-40 h-4 bg-gray-500"></div>
    <slot v-else></slot>
  </component>
</template>

<script>
  export default {
    props: ["level", "loading"],
    data() {
      return {
        tag: `h${this.level}`,
      };
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
