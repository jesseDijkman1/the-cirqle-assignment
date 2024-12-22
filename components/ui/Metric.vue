<template>
  <div
    :class="[
      'w-full aspect-square relative text-white bg-[rgba(0,0,0,.4)] flex flex-col justify-center items-center rounded-lg z-0 pb-4',
      { '!bg-skeleton-loader [&>*]:opacity-0': isLoading },
    ]"
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
      organic: {
        type: Number,
        default: 0,
      },
      paid: {
        type: Number,
        default: 0,
      },
      total: {
        type: Number,
        default: null,
      },
      thresholds: {
        type: Array,
      },
      graphData: {
        type: Array,
        default: [],
      },
      graphValueKey: {
        type: String,
        required: true,
      },
    },
    computed: {
      organicFixed() {
        return this.formatFixed(this.organic);
      },
      paidFixed() {
        return this.formatFixed(this.paid);
      },
      totalFixed() {
        return this.formatFixed(this.total ?? this.organic + this.paid);
      },
      color() {
        const total = parseFloat(this.totalFixed);

        if (this.isLoading || !this.thresholds || this.thresholds.length < 2) {
          return "currentColor";
        }

        const colorRange = new ColorRange(
          ["#ff0000", "#ffffff", "#0BDC42"],
          this.thresholds
        );
        return colorRange.getColorFromRangeValue(total);
      },
    },
    methods: {
      formatFixed(value) {
        return typeof value === "number" ? value.toFixed(2) : "0.00";
      },
    },
  };
</script>
