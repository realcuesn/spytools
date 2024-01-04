<template>
  <div class="w-full my-10 px-5 xl:px-6 flex justify-center items-center">
    <div
      class="w-full lg:w-3/5 bg-[#090909] bg-opacity-50 backdrop-blur-lg rounded-lg text-white flex flex-col justify-center items-center text-center py-6 lg:py-20 px-2 gap-y-10"
    >
      <h3 v-if="!user" class="text-2xl lg:text-5xl font-semibold">
        Únete a más de 6,000 usuarios descubriendo
        <br class="hidden lg:block" /><span
          class="bg-gradient-to-r from-[#595CFF] text-gradient-animation to-[#FFC6C6] mt-4 lg:mt-0 bg-clip-text text-transparent"
          >Herramientas de IA</span
        >
      </h3>

      <h3 v-else class="text-2xl lg:text-5xl font-semibold">
        Encuentra tus marcadores guardados <br class="hidden lg:block" /><span
          class="bg-gradient-to-r from-[#595CFF] text-gradient-animation to-[#FFC6C6] mt-4 lg:mt-0 bg-clip-text text-transparent"
          >Herramientas de IA</span
        >
      </h3>
      <p v-if="!user" class="text-sm lg:text-xl">Subimos recursos semanales</p>
      <NuxtLink
        to="/register"
        v-if="!user"
        class="flex items-center py-4 px-24 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]"
      >
        <span class="text-black font-bold text-base lg:text-xl"
          >¡Únete ahora!</span
        >
      </NuxtLink>

      <NuxtLink
        to="/bookmarks"
        v-else
        class="flex items-center py-4 px-24 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]"
      >
        <span class="text-black font-bold text-base lg:text-xl"
          >Marcadores</span
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
//TODO: Add a form to this component
const user = useSupabaseUser();
</script>
