<template>
  <div
    class="w-full aspect-square relative text-white bg-[rgba(0,0,0,.4)] flex flex-col justify-center items-center rounded-lg z-0 pb-4"
  >
    <p class="absolute top-1 left-2 text-green-400">{{ label }}</p>

    <div class="relative w-full flex justify-center">
      <strong :style="`color: ${color}`" class="text-4xl">
        {{ totalFixed }}
      </strong>

      <div
        class="pt-1 absolute left-0 top-full w-full flex justify-center space-x-4 text-xs"
      >
        <p class="text-light-grey flex space-x-1 items-center">
          <IconOrganic />
          <span>{{ organicFixed }}</span>
        </p>

        <p class="text-light-grey flex space-x-1 items-center">
          <IconPaid />
          <span>{{ paidFixed }}</span>
        </p>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-1/3 z-[-1] p-4 opacity-50">
      <UILineGraph
        v-if="graphData"
        :data="graphData"
        :valueKey="graphValueKey"
      />
    </div>
  </div>
</template>

<script>
  import ColorRange from "../../lib/ColorRange";

  // Maybe add some props that define a threshold so the metric can quickly indicate whether it's positive or not
  export default {
    props: [
      "label",
      "organic",
      "paid",
      "total",
      "thresholds",
      "graphData",
      "graphValueKey",
    ],
    computed: {
      organicFixed() {
        return (typeof this.organic === "number" ? this.organic : 0).toFixed(2);
      },
      paidFixed() {
        return (typeof this.paid === "number" ? this.paid : 0).toFixed(2);
      },
      totalFixed() {
        return (
          typeof this.total === "number"
            ? this.total
            : (this.organic ?? 0) + (this.paid ?? 0)
        ).toFixed(2);
      },
      color() {
        if (!this.thresholds) return "currentColor";

        const colorRange = new ColorRange(
          ["#ff0000", "#ffffff", "#0BDC42"],
          this.thresholds
        );
        const total = Number(this.totalFixed);
        return colorRange.getColorFromRangeValue(total);
      },
    },
  };
</script>
