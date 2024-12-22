<template>
  <main class="mt-16 mb-16 px-4 lg:px-10">
    <div
      class="grid grid-cols-1 auto-rows-auto lg:grid-cols-[minmax(auto,22.5rem),1fr] gap-8 lg:gap-12 max-w-7xl mx-auto"
    >
      <section class="section lg:col-span-1 lg:col-start-2">
        <slot name="summary" />
      </section>

      <section class="section lg:col-span-1 lg:col-start-2">
        <slot name="content" />
      </section>

      <section
        class="section lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:h-fit sticky top-16"
      >
        <slot name="profile" />
      </section>
    </div>
  </main>

  <!-- Footer could go here .. if the assignment required it -->
</template>
