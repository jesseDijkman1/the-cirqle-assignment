<template>
  <div>
    <UIHeading :isLoading tag="h2">Post content</UIHeading>
    <div class="flex flex-col space-y-4">
      <div>
        <UIVideo :isLoading width="720" height="1280" :sources="videoSources" />
      </div>

      <UIHeading :isLoading tag="h3">
        {{ summaryData?.taskTitle }}
      </UIHeading>

      <div v-if="isLoading" class="flex flex-col space-y-2">
        <div class="w-full h-4 bg-skeleton-loader rounded"></div>
        <div class="w-2/3 h-4 bg-skeleton-loader rounded"></div>
        <div class="w-1/3 h-4 bg-skeleton-loader rounded"></div>
      </div>

      <p v-else>{{ summaryData?.content }}</p>
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
      isLoading() {
        return this.data === null;
      },
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
