<template>
  <div class="w-full max-w-52 h-auto">
    <video :width="width" :height="height" controls>
      <source v-for="source in sources" :src="source.src" :type="source.type" />
    </video>
  </div>
</template>

<script>
  export default {
    props: ["width", "height", "sources"],
  };
</script>
