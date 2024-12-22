<template>
  <div
    :class="[
      'grid grid-rows-[60px,0fr] transition-all ease-in-out duration-300',
      isOpen ? 'grid-rows-[60px,1fr]' : 'grid-rows-[60px,0fr]',
    ]"
  >
    <button
      type="button"
      @click="toggle"
      class="flex justify-center space-x-4 items-center"
    >
      <span>{{ isOpen ? closeLabel : openLabel }}</span>
      <IconArrowDown
        :class="[
          'transition-transform ease-in-out duration-300',
          { '-scale-100': isOpen },
        ]"
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
