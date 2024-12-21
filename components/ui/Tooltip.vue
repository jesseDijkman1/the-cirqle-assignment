<!-- Todo: Use semantic HTML -->

<template>
  <span
    class="absolute -translate-x-1/2 opacity-0 transition-opacity ease-in-out duration-300 bg-black text-white py-2 px-3 rounded [&.show]:opacity-100 pointer-events-none"
    ref="tooltip"
  >
    <slot />
  </span>
</template>

<script>
  export default {
    props: ["target"],
    mounted() {
      const container = this.$refs.tooltip;
      const target = container.parentElement;

      if (!target) return;

      this.handleMouseEnter = () => {
        const bounding = target.getBoundingClientRect();

        container.style.top = `${bounding.height + 8}px`;
        container.style.left = `${bounding.width / 2}px`;
        container.classList.add("show");
      };

      this.handleMouseLeave = () => {
        container.classList.remove("show");
      };

      target.addEventListener("mouseenter", this.handleMouseEnter);
      target.addEventListener("mouseleave", this.handleMouseLeave);
    },
    unmounted() {
      const container = this.$refs.tooltip;
      const target = container.parentElement;

      if (!target) return;

      target.removeEventListener("mouseenter", this.handleMouseEnter);
      target.removeEventListener("mouseleave", this.handleMouseLeave);
    },
  };
</script>
