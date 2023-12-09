// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', '@nuxtjs/supabase'],
  css: ['~/assets/css/tailwind.css', '~/assets/fonts/fonts.css'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  ssr: true,
  app: {
    pageTransition: false
  },
  supabase: {
    redirect: false,
    url: 'https://zzjfupocbypxhqvlygyf.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6amZ1cG9jYnlweGhxdmx5Z3lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3NTA3MDgsImV4cCI6MjAxNjMyNjcwOH0.JL5IIDVLVp8aWWaVqZCBY1ycOztMEh2guLk2aCDPzbc',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
