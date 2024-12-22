<template>
  <NuxtLayout name="main-layout">
    <template v-slot:summary>
      <PostSummary :data="data" />
    </template>
    <template v-slot:content>
      <PostContent :data="data" />
    </template>
    <template v-slot:profile>
      <PostProfile :data="data" />
    </template>
  </NuxtLayout>
</template>

<script>
  export default {
    data() {
      return {
        data: null,
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async wait(delay) {
        return new Promise((resolve) => setTimeout(resolve, delay));
      },
      async fetchData() {
        try {
          await this.wait(200);
          const response = await fetch("/api/post-data");
          this.data = await response.json();
        } catch (error) {
          console.error(err);
        }
      },
    },
  };
</script>
