<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    :class="[
      {
        'bg-skeleton-loader rounded-full text-transparent': isLoading,
      },
    ]"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M18 9s-4.419 6-6 6s-6-6-6-6"
      color="currentColor"
    ></path>
  </svg>
</template>

<script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
