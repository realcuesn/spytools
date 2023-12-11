<template>
  <video class="h-screen object-cover w-full fixed top-0 brightness-75 grayscale" autoplay muted playsinline loop
    src="/gradient-loop.mp4"></video>
  <div v-if="isLoaded" class="w-full relative">
    <NuxtPage></NuxtPage>
    <SiteFooter></SiteFooter>
  </div>
  <div v-else class="w-full h-screen relative flex items-center justify-center">
    <div class="flex flex-col items-center gap-y-4">
      <img src="@/assets/branding/logo.svg" class="h-12 w-12" alt="">
      <h2 class="text-2xl font-semibold text-white">Loading...</h2>
    </div>
  </div>

  <SiteNav></SiteNav>
  <SiteMenu v-if="menuState"></SiteMenu>
  <SiteCommandSearch v-if="open"></SiteCommandSearch>
</template>

<script setup>
import Lenis from '@studio-freight/lenis'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const menuAnimateState = useState('menu-animate', () => false)
const menuState = useState('menu', () => false)
const open = useState('searchOpen', () => false)
const bookmarks = useState('bookmarks', () => [])
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const isLoaded = ref(false)

onMounted(async () => {
  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})

onMounted(async () => {
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  if (user.value) {
    let { data, error } = await client
      .from('bookmarks')
      .select('*')
      .eq('user_id', user.value.id)
    bookmarks.value = data
    isLoaded.value = true
  } else {
    isLoaded.value = true
  }

})


</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

html,
body {
  width: 100%;
  font-family: "Inter";
}

html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>