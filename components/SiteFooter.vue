<template>
  <div
    class="text-white flex flex-col gap-y-10 lg:flex-row justify-around px-5 xl:px-6 py-14"
  >
    <div class="w-full lg:w-1/3">
      <div class="flex items-center -ml-3 lg:-ml-0 -mt-2">
        <img src="@/assets/branding/logo.svg" class="h-12 w-12" alt="" />
        <h2
          class="text-2xl uppercase font-bold logo-gradient-animation bg-gradient-to-l from-[#595CFF] to-[#FFC6C6] bg-clip-text text-transparent"
        >
          Spytools
        </h2>
      </div>
      <p class="text-[#F7FFDD] lg:w-[55%] mt-4">
        El mejor lugar del mundo para descubrir y encontrar las herramientas de
        productividad perfectas. Desde el trabajo hasta la vida, nuestras
        herramientas de productividad potencian nuestro pensamiento, ideas y
        progreso.
      </p>
    </div>
    <div class="w-full lg:w-1/3">
      <h3 class="text-white font-semibold text-xl">Enlaces útiles</h3>
      <div class="flex gap-x-10 mt-4">
        <ul class="flex flex-col gap-y-3">
          <NuxtLink to="/">Inicio</NuxtLink>
          <NuxtLink to="/categories/">Categorías</NuxtLink>
          <NuxtLink to="/bookmarks">Marcadores</NuxtLink>
        </ul>
        <ul class="flex flex-col gap-y-3">
          <a href="/sitemap.xml">Sitemap</a>
          <NuxtLink to="/terms">Términos y condiciones</NuxtLink>
        </ul>
      </div>
    </div>
    <div class="w-full lg:w-1/3">
      <h3 class="text-white font-semibold text-xl">Buscar</h3>
      <p class="text-[#F7FFDD] lg:w-[85%] mt-4">
        Explora y descubre fácilmente una lista completa de herramientas de IA
        con nuestra función de búsqueda. Simplemente ingresa tu consulta a
        continuación y deja que la caja de búsqueda te guíe a través de la
        amplia variedad de herramientas de IA disponibles en toda la aplicación.
      </p>
    </div>
  </div>
</template>

<script setup></script>
