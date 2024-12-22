<template>
  <svg
    ref="svg"
    xmlns="http://www.w3.org/2000/svg"
    class="w-full h-full"
    :height="svgHeight"
    :width="svgWidth"
    :viewBox="svgViewBox"
  >
    <path :stroke="strokeColor" stroke-width="1" :d="pathData" />
  </svg>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        required: true,
      },
      valueKey: {
        type: String,
        required: true,
      },
      strokeColor: {
        type: String,
        default: "currentColor",
      },
    },
    data() {
      return {
        resizeObserver: null,
        svgHeight: 0,
        svgWidth: 0,
        svgViewBox: "0 0 0 0",
      };
    },
    computed: {
      normalizedData() {
        if (!this.data || this.data.length === 0) return [];

        let maxValue = 0;
        for (let obj of this.data) {
          if (obj[this.valueKey] > maxValue) maxValue = obj[this.valueKey];
        }

        return this.data.map((obj, index) => ({
          y: (obj[this.valueKey] ?? 0) / maxValue,
          x: index / (this.data.length - 1),
        }));
      },
      pathData() {
        if (!this.normalizedData || this.normalizedData.length === 0) return "";

        return this.normalizedData
          .map((obj, index) => {
            const x = obj.x * this.svgWidth;
            const y = this.svgHeight - 1 - obj.y * (this.svgHeight - 2); // Minus 1 & 2 make sure that the line is fully visible and not cut off
            return index === 0 ? `M${x} ${y}` : `L${x} ${y}`;
          })
          .join(" ");
      },
    },
    mounted() {
      this.updateSVGDimensions();
      this.resizeObserver = new ResizeObserver(this.updateSVGDimensions);
      this.resizeObserver.observe(this.$refs.svg);
    },
    methods: {
      updateSVGDimensions() {
        const { width, height } = this.$refs.svg.getBoundingClientRect();

        this.svgHeight = height;
        this.svgWidth = width;
        this.svgViewBox = `0 0 ${width} ${height}`;
      },
    },
  };
</script>
