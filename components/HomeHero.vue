<template>
  <div class="w-full relative">
    <section
      class="w-full flex flex-col gap-y-14 items-center justify-between pt-28"
    >
      <div class="flex sm:hidden mx-auto items-center">
        <NuxtLink
          to="/categories"
          class="text-[#F7FFDD] font-medium bg-[#272727] px-6 rounded-md py-2 mb-[-10rem] mt-[-5rem]"
          >Categorías</NuxtLink
        >
      </div>
      <div class="hidden sm:flex mx-auto items-center gap-x-8">
        <NuxtLink to="/categories" class="text-base text-[#CCCCCC] font-medium"
          >Explorar</NuxtLink
        >
        <NuxtLink
          to="/categories"
          class="text-[#F7FFDD] font-medium bg-[#272727] px-6 rounded-md py-2"
          >Categorías
        </NuxtLink>
        <div class="w-full flex gap-x-2 items-center border-b-2 border-b-white">
          <NuxtLink to="/categories" class="text-white font-medium"
            >Ver todo</NuxtLink
          >
          <img
            src="@/assets/icons/arrow-right.svg"
            class="h-3.5"
            alt="Arrow right"
          />
        </div>
      </div>

      <div
        class="flex mt-14 lg:mt-0 items-center justify-center gap-y-10 sm:gap-y-20 flex-col"
      >
        <div
          class="text-[#f7ffdd] text-5xl sm:text-8xl text-center font-semibold"
        >
          <span
            class="bg-gradient-to-r from-[#595CFF] to-[#FFC6C6] bg-clip-text text-gradient-animation text-transparent"
          >
            Descubre
          </span>
          +500 IAs <br class="hidden lg:block" />para <br class="lg:hidden" />
          <span
            class="bg-gradient-to-r from-[#595CFF] text-gradient-animation to-[#FFC6C6] bg-clip-text text-transparent"
          >
            <VueWriter
              :eraseSpeed="60"
              :typeSpeed="100"
              :caret="'_'"
              class="bg-gradient-to-r from-[#595CFF] text-gradient-animation to-[#FFC6C6] bg-clip-text text-transparent"
              :array="[
                'Tu Trabajo.',
                'Estudiantes.',
                'Tu Negocio.',
                'Uso Personal.',
                'Edición de vídeo.',
              ]"
            />
          </span>
        </div>

        <div
          class="text-sm sm:text-lg text-center w-full text-white font-medium tracking-wide"
        >
          ¿Necesitas ayuda de algo/alguien? <br />
          ¡Encuentra la solución entre +500 herramientas!
        </div>

        <button
          @click="router.push('/search')"
          class="flex w-full justify-center items-center lg:-mt-10"
        >
          <p
            class="text-[#f7ffdd] bg-[#272727] outline-none py-3 pl-5 rounded-l-md lg:w-[26rem] capitalize text-sm w-full sm:text-lg placeholder:text-[#A3A3A3]"
          >
            Escribe en una palabra qué necesitas
          </p>
          <div
            type="submit"
            class="h-11 w-12 sm:h-[52px] sm:w-[60px] rounded-r-md flex items-center justify-center bg-[#f7ffdd]"
          >
            <img
              src="@/assets/icons/search-black.svg"
              class="h-5 w-5 sm:h-7 sm:w-7"
              alt=""
            />
          </div>
        </button>

        <div>
          <img src="@/assets/branding/logo.svg" alt="" />
        </div>
      </div>
    </section>

    <img
      src="@/assets/icons/floating-one.svg"
      class="h-15 w-15 absolute animate-bounce ease-linear anim-duration hidden lg:block left-[14vw] top-[15vh]"
      alt=""
    />

    <img
      src="@/assets/icons/floating-two.svg"
      class="h-15 w-15 absolute animate-bounce ease-linear anim-duration-2 hidden lg:block left-[10vw] top-[50vh]"
      alt=""
    />

    <img
      src="@/assets/icons/floating-three.svg"
      class="h-15 w-15 absolute animate-bounce ease-linear anim-duration-3 hidden lg:block left-[15vw] bottom-[5vh]"
      alt=""
    />

    <img
      src="@/assets/icons/floating-six.svg"
      class="h-15 w-15 absolute animate-bounce ease-linear anim-duration-4 hidden lg:block right-[14vw] top-[15vh]"
      alt=""
    />

    <img
      src="@/assets/icons/floating-five.svg"
      class="h-15 w-15 absolute animate-bounce ease-linear anim-duration-5 hidden lg:block right-[10vw] top-[50vh]"
      alt=""
    />

    <img
      src="@/assets/icons/floating-four.svg"
      class="h-15 w-15 absolute animate-bounce ease-linear anim-duration-6 hidden lg:block right-[15vw] bottom-[5vh]"
      alt=""
    />
  </div>
</template>

<script setup>
const router = useRouter();
</script>

<style scoped>
.text-gradient-animation {
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: gradient 5s ease infinite;
}

.anim-duration {
  animation-duration: 3s !important;
}

.anim-duration-2 {
  animation-duration: 4s !important;
}

.anim-duration-3 {
  animation-duration: 3.5s !important;
}

.anim-duration-4 {
  animation-duration: 3s !important;
}

.anim-duration-5 {
  animation-duration: 4s !important;
}

.anim-duration-6 {
  animation-duration: 5s !important;
}
</style>
