<template>
  <div
    class="w-full border border-[rgba(255,255,255,.2)] rounded overflow-scroll"
  >
    <table class="w-full">
      <thead class="border-b border-[rgba(255,255,255,.2)] bg-[rgba(0,0,0,.4)]">
        <tr>
          <th
            v-for="(item, index) in tableHeadItems"
            :key="`thead-${index}`"
            class="text-left p-2 px-4 [&:not(:first-child)]:border-l border-[rgba(255,255,255,.2)]"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, trIndex) in tableBodyRows"
          :key="`trow-${trIndex}`"
          class="[&:not(:first-child)]:border-t border-[rgba(255,255,255,.2)]"
        >
          <td
            v-for="(item, tdIndex) in row"
            :key="`tdata-${tdIndex}`"
            class="text-left p-2 px-4 [&:not(:first-child)]:border-l border-[rgba(255,255,255,.2)]"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: () => [],
        validator(value) {
          return (
            Array.isArray(value) && value.every((row) => Array.isArray(row))
          );
        },
      },
    },
    computed: {
      tableHeadItems() {
        return this.data[0] || [];
      },
      tableBodyRows() {
        return this.data.slice(1) || [];
      },
    },
  };
</script>
