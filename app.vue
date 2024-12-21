<template>
  <NuxtLayout name="main-layout">
    <template v-slot:top>
      <PostSummary />
    </template>

    <template v-slot:center>
      <PostContent />
    </template>

    <template v-slot:bottom>
      <PostProfile />
    </template>
  </NuxtLayout>
</template>

<style>
  body {
    background-color: #080808;
    background: linear-gradient(34deg, #0c0c0c 42%, #1c004d);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;
  }
</style>
