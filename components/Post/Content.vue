<template>
  <div v-if="data">
    <UIHeading tag="h2">Post content</UIHeading>
    <div class="flex flex-col space-y-4">
      <div>
        <UIVideo width="720" height="1280" :sources="videoSources" />
      </div>

      <UIHeading tag="h3">
        {{ summaryData.taskTitle }}
      </UIHeading>

      <p>{{ summaryData.content }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    computed: {
      summaryData() {
        if (!this.data || !this.data.summary) return null;
        return this.data.summary;
      },
      videoSources() {
        return (
          this.summaryData?.imagesMeta?.map(({ url, mimetype }) => ({
            src: url,
            type: mimetype,
          })) || []
        );
      },
    },
  };
</script>
