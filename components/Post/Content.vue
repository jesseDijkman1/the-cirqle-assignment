<template>
  <div>
    <UIHeading :is-loading tag="h2">Post content</UIHeading>
    <div class="flex flex-col space-y-4">
      <div>
        <UIVideo
          :is-loading
          width="720"
          height="1280"
          :sources="videoSources"
        />
      </div>

      <UIHeading :is-loading tag="h3">
        {{ summaryData?.taskTitle }}
      </UIHeading>

      <UIParagraph :is-loading :loader-lines="3">{{
        summaryData?.content
      }}</UIParagraph>
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
