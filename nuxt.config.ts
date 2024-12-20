// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
  eslint: {
    checker: true,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
    {
      path: "~/components/ui",
      prefix: "UI",
    },
  ],
});
