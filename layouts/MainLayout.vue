<template>
  <!-- Header could go here .. if the assignment required it -->

  <main class="grid">
    <section class="">
      <slot name="top"></slot>
    </section>

    <section>
      <slot name="center"></slot>
    </section>

    <section>
      <slot name="bottom"></slot>
    </section>
  </main>

  <!-- Footer could go here .. if the assignment required it -->
</template>
