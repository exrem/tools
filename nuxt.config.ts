// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    clientNodeCompat: true
  },
  modules: ["@nuxt/image"],
})