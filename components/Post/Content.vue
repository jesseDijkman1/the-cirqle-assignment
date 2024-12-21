<template>
  <div>
    <UIHeading tag="h2">Post content</UIHeading>
    <div v-if="data" class="flex flex-col space-y-4">
      <div>
        <UIVideo
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

      <UIHeading tag="h3">
        {{ data.taskTitle }}
      </UIHeading>

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
