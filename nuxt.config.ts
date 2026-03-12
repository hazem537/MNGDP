// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/i18n"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
    {
      path: "~/components/Layout",
      pathPrefix: false,
    },
  ],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        language: "en-US",
        iso: "en-US",
        file: "en.json",
        dir: "ltr",
      },
      {
        code: "ar",
        name: "العربية",
        language: "ar-SA",
        iso: "ar-SA",
        file: "ar.json",
        dir: "rtl",
      },
    ],
    defaultLocale: "ar",
    strategy: "no_prefix",
    detectBrowserLanguage: false,
  },
  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",
  ssr: false,
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
