<template>
    <div class="w-full px-5 xl:px-6 py-10 sm:py-20 2xl:pt-10">
        <ul
            class="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-10 justify-center gap-y-4 sm:gap-y-10 2xl:gap-y-8 2xl:px-[10%]">
            <NuxtLink to="/categories/category/texto"
                class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/text-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-text-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#BDD9BF]">
                        Texto
                    </h3>
                    <p class="text-[#506C52] font-medium mt-3">
                        Descubre herramientas de texto AI para potenciar la creación y análisis de contenido.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/imagen"
                class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/image-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-image-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#B6B8D6]">
                        Imagen
                    </h3>
                    <p class="text-[#7E78D2] font-medium mt-3">
                        Explora herramientas AI para imágenes creativas y análisis avanzado.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/código"
                class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/code-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-code-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#FDBCB4]">
                        Código
                    </h3>
                    <p class="text-[#FE6F5E] font-medium mt-3">
                        Usa herramientas AI para codificar más rápido y ser más productivo.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/audio"
                class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/audio-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-audio-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#E9D5FF]">
                        Audio Apps
                    </h3>
                    <p class="text-[#7C3AED] font-medium mt-3">
                        Explora herramientas de audio con IA para una experiencia envolvente.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/vídeo"
                class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/video-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-video-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#FECDD3]">
                        Video Apps
                    </h3>
                    <p class="text-[#F43F5E] font-medium mt-3">
                        Potencia tu creación de videos con herramientas impulsadas por IA para eficiencia y creatividad.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/3d"
                class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/3d-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-3d-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#BFDBFE]">
                        3D Apps
                    </h3>
                    <p class="text-[#3B82F6] font-medium mt-3">
                        Explora aplicaciones 3D con IA para experiencias inmersivas e interactivas.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/negocios"
                class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/business-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-business-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#E5E5E5]">
                        Negocios
                    </h3>
                    <p class="text-[#3F3F46] font-medium mt-3">
                        Libera el poder de la IA en aplicaciones empresariales para mayor eficiencia y toma de decisiones
                        estratégicas.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/productividad"
                class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/productivity-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-other-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#ec4899]">
                        Students
                    </h3>
                    <p class="text-[#ec4899] font-medium mt-3">
                        Descubre diversas herramientas de IA fuera de categorías específicas, con funcionalidades y
                        aplicaciones únicas.
                    </p>
                </div>
            </NuxtLink>


            <NuxtLink to="/categories/category/students"
                class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/students-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-other-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#ec4899]">
                        Students
                    </h3>
                    <p class="text-[#ec4899] font-medium mt-3">
                        Descubre diversas herramientas de IA fuera de categorías específicas, con funcionalidades y
                        aplicaciones únicas.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/other"
                class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/other-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-other-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#D1FAE5]">
                        Otras
                    </h3>
                    <p class="text-[#059669] font-medium mt-3">
                        Descubre diversas herramientas de IA fuera de categorías específicas, con funcionalidades y
                        aplicaciones únicas.
                    </p>
                </div>
            </NuxtLink>

        </ul>
    </div>
</template>

<script setup>

</script>
