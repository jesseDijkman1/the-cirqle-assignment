<template>
  <div>
    <UIHeading tag="h2">Post content</UIHeading>
    <div class="flex flex-col space-y-4">
      <div>
        <UIVideo width="720" height="1280" :sources="videoSources" />
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
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    computed: {
      videoSources() {
        return (
          this.data?.imagesMeta?.map(({ url, mimetype }) => ({
            src: url,
            type: mimetype,
          })) || []
        );
      },
    },
  };
</script>
