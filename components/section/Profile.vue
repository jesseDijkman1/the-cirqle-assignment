<template>
  <div>
    <GlobalImage :src="data?.data?.creator?.profilePictureUrl" />
    <GlobalHeading level="3" :loading="data === null">{{
      fullName
    }}</GlobalHeading>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: null,
      };
    },
    computed: {
      fullName() {
        return this.data
          ? `${this.data.data.creator.firstName} ${this.data.data.creator.lastName}`
          : null;
      },
    },
    mounted() {
      this.fetchProile();
    },
    methods: {
      async fetchProile() {
        try {
          const response = await fetch("/creator.json");
          this.data = await response.json();
        } catch (err) {
          console.error(err);
          this.data = {};
        }
      },
    },
  };
</script>
