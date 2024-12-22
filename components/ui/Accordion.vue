<template>
  <div
    :class="[
      'grid grid-rows-[3.75rem,0fr] transition-all ease-in-out duration-300',
      isOpen ? 'grid-rows-[3.75rem,1fr]' : 'grid-rows-[3.75rem,0fr]',
    ]"
  >
    <button
      type="button"
      class="flex justify-center space-x-4 items-center"
      @click="toggle"
    >
      <span
        :class="[
          'underline',
          {
            'bg-skeleton-loader w-20 h-4 rounded block text-transparent':
              isLoading,
          },
        ]"
        >{{ isOpen ? closeLabel : openLabel }}</span
      >

      <IconArrowDown
        :is-loading
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
    props: {
      isLoading: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        required: true,
      },
      open: {
        type: Boolean,
        default: false,
      },
      openLabel: {
        type: String,
        required: true,
      },
      closeLabel: {
        type: String,
        required: true,
      },
    },
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
