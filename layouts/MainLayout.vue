<template>
  <!-- Header could go here .. if the assignment required it -->
  <header class="sticky top-0 w-full h-[60px] bg-white"></header>
  <main class="mt-16 mb-16 px-4 lg:px-10">
    <div
      class="grid grid-cols-1 auto-rows-auto lg:grid-cols-[minmax(auto,300px),1fr] gap-8 lg:gap-12 max-w-7xl mx-auto"
    >
      <section class="section lg:col-span-1 lg:col-start-2">
        <slot name="top"></slot>
      </section>

      <section class="section lg:col-span-1 lg:col-start-2">
        <slot name="center"></slot>
      </section>

      <section
        class="section lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:h-fit sticky top-16"
      >
        <slot name="bottom"></slot>
      </section>
    </div>
  </main>

  <!-- Footer could go here .. if the assignment required it -->
</template>
