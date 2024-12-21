<template>
  <div
    :class="`grid grid-rows-[60px,0fr] [&.open]:grid-rows-[60px,1fr] transition-all ease-in-out duration-300 ${isOpen ? 'open' : ''}`"
  >
    <button
      type="button"
      @click="toggle"
      class="flex justify-center space-x-4 items-center"
    >
      <span>{{ isOpen ? closeLabel : openLabel }}</span>
      <IconArrowDown
        class="[.open_&]:-scale-100 transition-transform ease-in-out duration-300"
      />
    </button>

    <div class="overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: ["label", "open", "openLabel", "closeLabel"],
    data() {
      return {
        isOpen: this.open ?? false,
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      },
    },
  };
</script>
