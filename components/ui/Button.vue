<template>
  <button :type="type" class="button bg-green-400 w-[300px]" ref="button">
    <slot />
  </button>
</template>

<script>
  export default {
    props: ["type"],
    mounted() {
      let mouseInside;
      let mouseX, mouseY;
      // let buttonTop, buttonLeft, buttonWidth;
      let buttonBounding;

      this.$refs.button.addEventListener("mouseenter", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        buttonBounding = this.$refs.button.getBoundingClientRect();

        mouseInside = true;
      });

      this.$refs.button.addEventListener("mouseleave", () => {
        mouseInside = true;
      });

      this.$refs.button.addEventListener("mousemove", (e) => {
        if (!mouseInside) return;

        mouseX = e.clientX;
        mouseY = e.clientY;
        this.$refs.button.style.background = `radial-gradient(circle at ${mouseX - buttonBounding.left}px ${mouseY - buttonBounding.top}px, red 40px, blue 40px)`;
      });
    },
  };
</script>
