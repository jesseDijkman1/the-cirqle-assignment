<template>
  <div class="w-full h-auto bg-black flex justify-center rounded-xl">
    <video
      :width="width"
      :height="height"
      controls
      class="max-h-[460px] w-auto"
    >
      <source v-for="source in sources" :src="source.src" :type="source.type" />
    </video>
  </div>
</template>

<script>
  export default {
    props: ["width", "height", "sources", "heightClass"],
  };
</script>
