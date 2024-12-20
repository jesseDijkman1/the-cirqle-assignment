<template>
  <div v-if="data">
    <div>
      <GlobalVideo
        width="720"
        height="1280"
        :sources="
          data.imagesMeta.map(({ url, mimetype }) => ({
            src: url,
            type: mimetype,
          }))
        "
      />
    </div>

    <div>
      <GlobalHeading level="3">
        {{ data.taskTitle }}
      </GlobalHeading>

      <p>{{ data.content }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: null,
      };
    },
    computed() {},
    mounted() {
      this.fetchProfile();
    },
    methods: {
      async fetchProfile() {
        try {
          const response = await fetch("/summary.json");
          this.data = await response.json();
        } catch (err) {
          console.error(err);
          this.data = {};
        }
      },
    },
  };
</script>
