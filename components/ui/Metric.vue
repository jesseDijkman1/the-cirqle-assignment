<template>
  <div
    class="w-full aspect-square relative text-white bg-[rgba(0,0,0,.4)] flex flex-col justify-center items-center rounded-lg"
  >
    <p class="absolute top-1 left-2 text-green-400">{{ label }}</p>

    <button class="absolute top-0 right-0 p-2 w-auto text-light-grey">
      <IconStar />
    </button>

    <strong class="text-4xl">
      {{ totalFixed }}
    </strong>

    <div
      class="px-2 pb-4 absolute left-0 bottom-0 w-full flex flex-col items-center"
    >
      <p class="text-light-grey flex space-x-2 items-center">
        <IconOrganic />
        <span>{{ organicFixed }}</span>
      </p>

      <p class="text-light-grey flex space-x-2 items-center">
        <IconPaid />
        <span>{{ paidFixed }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  // Maybe add some props that define a threshold so the metric can quickly indicate whether it's positive or not
  export default {
    props: ["label", "organic", "paid", "total"],
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
    },
  };
</script>
