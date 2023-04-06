// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      "Courier Prime": true,
      "Gloria Hallelujah": true,
    },
  },
});
