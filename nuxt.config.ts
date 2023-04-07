// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/content"],
  css: ["~/assets/css/global.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  googleFonts: {
    families: {
      Merriweather: true,
      "Gloria Hallelujah": true,
    },
  },
});
