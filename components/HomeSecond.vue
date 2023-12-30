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
                        Text Apps
                    </h3>
                    <p class="text-[#506C52] font-medium mt-3">
                        Explore powerful AI text tools for enhanced content creation and analysis.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/imagen" class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/image-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-image-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#B6B8D6]">
                        Image Apps
                    </h3>
                    <p class="text-[#7E78D2] font-medium mt-3">
                        Discover cutting-edge AI image processing tools for creative and analytical tasks.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/código" class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/code-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-code-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#FDBCB4]">
                        Code Apps
                    </h3>
                    <p class="text-[#FE6F5E] font-medium mt-3">
                        Access AI-powered coding tools to streamline development and boost productivity.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/audio" class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/audio-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-audio-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#E9D5FF]">
                        Audio Apps
                    </h3>
                    <p class="text-[#7C3AED] font-medium mt-3">
                        Immerse yourself in AI-driven audio tools for a rich and dynamic experience.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/vídeo" class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/video-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-video-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#FECDD3]">
                        Video Apps
                    </h3>
                    <p class="text-[#F43F5E] font-medium mt-3">
                        Elevate your video creation with AI-powered tools designed for efficiency and creativity.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/3d" class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/3d-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-3d-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#BFDBFE]">
                        3D Apps
                    </h3>
                    <p class="text-[#3B82F6] font-medium mt-3">
                        Dive into the world of AI-driven 3D applications for immersive and interactive experiences.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/negocios" class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/business-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-business-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#E5E5E5]">
                        Business Apps
                    </h3>
                    <p class="text-[#3F3F46] font-medium mt-3">
                        Unleash the power of AI in business applications for enhanced efficiency and strategic
                        decision-making.
                    </p>
                </div>
            </NuxtLink>

            <NuxtLink to="/categories/category/other" class="bg-[#090909] bg-opacity-20 backdrop-blur-lg p-5 sm:p-7 rounded-lg">
                <div class="flex items-center justify-between w-full">
                    <img src="@/assets/icons/other-app.svg" class="h-16 sm:h-20" alt="">
                    <img src="@/assets/icons/arrow-up-right-other-apps.svg" class="h-10 sm:h-14" alt="">
                </div>

                <div class="text-white mt-7 sm:mt-12">
                    <h3 class="text-2xl sm:text-4xl font-semibold text-[#D1FAE5]">
                        Other Apps
                    </h3>
                    <p class="text-[#059669] font-medium mt-3">
                        Explore a variety of AI tools that don't fit into specific categories, offering unique
                        functionalities and applications.
                    </p>
                </div>
            </NuxtLink>
        </ul>
    </div>
</template>

<script setup>

</script>
