export default defineNuxtConfig({
  // devtools: { enabled: true }
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  nitro: {
    externals: {
      inline: ['uuid'],
    }
  }
})
