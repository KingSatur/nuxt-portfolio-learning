// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    highlight: {
      theme: {
        default: "min-light",
        dark: "min-dark",
      },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
  colorMode: {
    classSuffix: "",
  },
});
