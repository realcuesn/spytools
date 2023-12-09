<template>
 <!--  <video class="h-screen object-cover w-full fixed top-0 brightness-75 saturate-50" autoplay muted playsinline loop
    src="/gradient-loop.mp4"></video>
  <div class="w-full relative">
    <NuxtPage></NuxtPage>
    <SiteFooter></SiteFooter>
  </div>

  <SiteNav></SiteNav>
  <SiteMenu v-if="menuState"></SiteMenu> -->
</template>

<script setup>
import Lenis from '@studio-freight/lenis'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const menuAnimateState = useState('menu-animate', () => false)
const menuState = useState('menu', () => false)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

onMounted(() => {
  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
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