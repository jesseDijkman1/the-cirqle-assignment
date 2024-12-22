<template>
  <svg ref="svg" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
    <path ref="path" stroke="currentColor" stroke-width="1" />
  </svg>
</template>

<script>
  export default {
    props: ["data", "valueKey"],
    data() {
      return {
        normalizedData: null,
      };
    },
    mounted(p) {
      this.prepareData();

      const { svg, path } = this.$refs;

      const { width, height } = svg.getBoundingClientRect();

      svg.setAttribute("width", width);
      svg.setAttribute("height", height);
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

      if (!this.normalizedData) return;

      const pathData = this.normalizedData
        .map((obj) => {
          return obj.x === 0
            ? `M0 ${height - 1 - obj.y * (height - 2)}`
            : `L${obj.x * width} ${height - 1 - obj.y * (height - 2)}`;
        })
        .join(" ");
      path.setAttribute("d", pathData);
    },

    methods: {
      prepareData() {
        const { data, valueKey } = this.$props;

        if (!data) return;

        let maxValue = 0;
        const rawObjects = [];
        for (let obj of data) {
          if (obj[valueKey] > maxValue) maxValue = obj[valueKey];
        }

        this.normalizedData = data.map((obj, index) => {
          return {
            y: (obj[valueKey] ?? 0) / maxValue,
            x: index / (data.length - 1),
          };
        });
      },
    },
  };
</script>
