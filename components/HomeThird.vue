<template>
    <div ref="container" class="w-full px-5 xl:px-6 h-screen hidden lg:flex flex-col justify-between overflow-x-clip py-10">
        <div class="flex justify-between items-end">
            <div class="xl:space-y-2 2xl:space-y-4">
                <h2 class="text-white lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold">Featured <span
                        class="bg-gradient-to-r from-[#595CFF] to-[#FFC6C6] bg-clip-text text-gradient-animation text-transparent">Tools</span>
                </h2>
                <div class="flex items-center gap-x-10">
                    <p class="text-white text-xl capitalize">Discoverd The Most View Ai tools</p>
                    <div class="w-40 h-1.5 rounded-lg bg-[#CCCCCC]">
                        <div ref="scrollProgress" class="rounded-lg h-full bg-[#F7FFDD] w-[20%]"></div>
                    </div>
                </div>
            </div>
            <div class="text-white font-medium">Scroll to Explore</div>
        </div>

        <ul ref="scrollStuff"
            class="w-full scroll-stuff-route-grab hidden lg:flex scroll-stuff lg:gap-x-10 2xl:gap-x-14 3xl:gap-x-20 mt-10 lg:pl-[8vw] xl:pl-[10vw] 2xl:pl-[15vw]">
            <li
                class="lg:w-[22rem] lg:min-w-[22rem] xl:w-[26rem] xl:min-w-[26rem] 2xl:w-[36rem] relative 2xl:min-w-[36rem] rounded-xl bg-[#141414] flex flex-col overflow-clip grid-rows-3">
                <div class="row-span-2 w-full">
                    <img :src="getImageUrl(
                        productList[0].image
                    )" class=" w-full aspect-video object-cover" alt="Product Image">
                </div>
                <div class="p-5">
                    <div class="flex w-full items-center justify-between">
                        <div class="flex gap-x-2 items-center">
                            <img :src="getAvatarUrl(
                                productList[0].avatar

                            )" class="lg:h-9 lg:w-9 xl:h-11 xl:w-11 2xl:h-14 2xl:w-14" alt="Notion Logo">
                            <div class="flex justify-center flex-col">
                                <h2 class="text-white lg:text-xs xl:text-sm 2xl:text-lg font-medium">{{ productList[0].title
                                    ||
                                    'Loading...' }}</h2>
                                <p
                                    class="bg-[#BDD9BF] text-[#506C52] font-semibold text-xs lg:text-[0.60rem] xl:text-xs lg:py-[1px] lg:px-2 xl:py-0.5 xl:px-2.5 text-center 2xl:py-1 2xl:px-3 rounded-md">
                                    {{ productList[0].pricing_type || 'Loading...' }}
                                </p>
                            </div>
                        </div>
                        <NuxtLink v-if="productList[0].url" :to="productList[0].url"
                            class="flex items-center lg:py-1 xl:py-1 xl:pl-3 xl:pr-4 2xl:py-2 pl-4 pr-5 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]">
                            <img src="@/assets/icons/arrow-up-right.svg" class="lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                                alt="">
                            <span class=" lg:text-sm 2xl:text-base font-semibold">Visit</span>
                        </NuxtLink>
                    </div>
                    <div class=" mt-4 lg:text-xs xl:text-sm 2xl:text-base 2xl:mt-6 text-white">
                        {{ productList[0].intro_description.slice(0, 150) +
                            (productList[0].intro_description.length > 150 ? '...' : '') || 'Loading...' }}
                    </div>
                </div>
            </li>

            <li
                class="lg:w-[22rem] lg:min-w-[22rem] xl:w-[26rem] xl:min-w-[26rem] 2xl:w-[36rem]  2xl:min-w-[36rem] rounded-xl bg-[#141414] flex flex-col overflow-clip grid-rows-3">
                <div class="row-span-2 w-full">
                    <img :src="getImageUrl(productList[1].image)" class=" w-full aspect-video object-cover"
                        alt="Product Image">
                </div>
                <div class="p-5">
                    <div class="flex w-full items-center justify-between">
                        <div class="flex gap-x-2 items-center">
                            <img :src="getAvatarUrl(productList[1].avatar)"
                                class="lg:h-9 lg:w-9 xl:h-11 xl:w-11 2xl:h-14 2xl:w-14" alt="Notion Logo">
                            <div class="flex justify-center flex-col">
                                <h2 class="text-white lg:text-xs xl:text-sm 2xl:text-lg font-medium">{{ productList[1].title
                                    ||
                                    'Loading...' }}</h2>
                                <p
                                    class="bg-[#BDD9BF] text-[#506C52] font-semibold text-xs lg:text-[0.60rem] xl:text-xs lg:py-[1px] lg:px-2 xl:py-0.5 xl:px-2.5 text-center 2xl:py-1 2xl:px-3 rounded-md">
                                    {{ productList[0].pricing_type || 'Loading...' }}
                                </p>
                            </div>
                        </div>
                        <NuxtLink v-if="productList[1].url" :to="productList[1].url"
                            class="flex items-center lg:py-1 xl:py-1 xl:pl-3 xl:pr-4 2xl:py-2 pl-4 pr-5 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]">
                            <img src="@/assets/icons/arrow-up-right.svg" class="lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                                alt="">
                            <span class=" lg:text-sm 2xl:text-base font-semibold">Visit</span>
                        </NuxtLink>
                    </div>
                    <div class=" mt-4 lg:text-xs xl:text-sm 2xl:text-base 2xl:mt-6 text-white">
                        {{ productList[1].intro_description.slice(0, 150) +
                            (productList[1].intro_description.length > 150 ? '...' : '') || 'Loading...' }}
                    </div>
                </div>
            </li>


            <li
                class="lg:w-[22rem] lg:min-w-[22rem] xl:w-[26rem] xl:min-w-[26rem] 2xl:w-[36rem]  2xl:min-w-[36rem] rounded-xl bg-[#141414] flex flex-col overflow-clip grid-rows-3">
                <div class="row-span-2 w-full">
                    <img :src="getImageUrl(productList[2].image)
                        " class=" w-full aspect-video object-cover" alt="Product Image">
                </div>
                <div class="p-5">
                    <div class="flex w-full items-center justify-between">
                        <div class="flex gap-x-2 items-center">
                            <img :src="getAvatarUrl(productList[2].avatar)"
                                class="lg:h-9 lg:w-9 xl:h-11 xl:w-11 2xl:h-14 2xl:w-14" alt="Notion Logo">
                            <div class="flex justify-center flex-col">
                                <h2 class="text-white lg:text-xs xl:text-sm 2xl:text-lg font-medium">{{ productList[2].title
                                    ||
                                    'Loading...' }}</h2>
                                <p
                                    class="bg-[#BDD9BF] text-[#506C52] font-semibold text-xs lg:text-[0.60rem] xl:text-xs lg:py-[1px] lg:px-2 xl:py-0.5 xl:px-2.5 text-center 2xl:py-1 2xl:px-3 rounded-md">
                                    {{ productList[2].pricing_type || 'Loading...' }}
                                </p>
                            </div>
                        </div>
                        <NuxtLink v-if="productList[2].url" :to="productList[2].url"
                            class="flex items-center lg:py-1 xl:py-1 xl:pl-3 xl:pr-4 2xl:py-2 pl-4 pr-5 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]">
                            <img src="@/assets/icons/arrow-up-right.svg" class="lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                                alt="">
                            <span class=" lg:text-sm 2xl:text-base font-semibold">Visit</span>
                        </NuxtLink>
                    </div>
                    <div class=" mt-4 lg:text-xs xl:text-sm 2xl:text-base 2xl:mt-6 text-white">
                        {{ productList[2].intro_description.slice(0, 150) +
                            (productList[2].intro_description.length > 150 ? '...' : '') || 'Loading...' }}
                    </div>
                </div>
            </li>

            <li
                class="lg:w-[22rem] lg:min-w-[22rem] xl:w-[26rem] xl:min-w-[26rem] 2xl:w-[36rem]  2xl:min-w-[36rem] rounded-xl bg-[#141414] flex flex-col overflow-clip grid-rows-3">
                <div class="row-span-2 w-full">
                    <img :src="getImageUrl(productList[3].image)
                        " class=" w-full aspect-video object-cover" alt="Product Image">
                </div>
                <div class="p-5">
                    <div class="flex w-full items-center justify-between">
                        <div class="flex gap-x-2 items-center">
                            <img :src="getAvatarUrl(productList[3].avatar)"
                                class="lg:h-9 lg:w-9 xl:h-11 xl:w-11 2xl:h-14 2xl:w-14" alt="Notion Logo">
                            <div class="flex justify-center flex-col">
                                <h2 class="text-white lg:text-xs xl:text-sm 2xl:text-lg font-medium">{{ productList[3].title
                                    ||
                                    'Loading...' }}</h2>
                                <p
                                    class="bg-[#BDD9BF] text-[#506C52] font-semibold text-xs lg:text-[0.60rem] xl:text-xs lg:py-[1px] lg:px-2 xl:py-0.5 xl:px-2.5 text-center 2xl:py-1 2xl:px-3 rounded-md">
                                    {{ productList[3].pricing_type || 'Loading...' }}
                                </p>
                            </div>
                        </div>
                        <NuxtLink v-if="productList[3].url" :to="productList[3].url"
                            class="flex items-center lg:py-1 xl:py-1 xl:pl-3 xl:pr-4 2xl:py-2 pl-4 pr-5 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]">
                            <img src="@/assets/icons/arrow-up-right.svg" class="lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                                alt="">
                            <span class=" lg:text-sm 2xl:text-base font-semibold">Visit</span>
                        </NuxtLink>
                    </div>
                    <div class=" mt-4 lg:text-xs xl:text-sm 2xl:text-base 2xl:mt-6 text-white">
                        {{ productList[3].intro_description.slice(0, 150) +
                            (productList[3].intro_description.length > 150 ? '...' : '') || 'Loading...' }}
                    </div>
                </div>
            </li>




            <li class="min-w-[10vw]"></li>
        </ul>

        <div class="text-center flex items-center gap-x-2 justify-center w-full">
            <h2 class="text-[#CCCCCC] text-xl">Choose from <span class="text-[#F7FFDD]">hundreds</span> of ai tools</h2>
            <img src="@/assets/icons/chevron-right.svg" class="h-5" alt="">
            <button
                class="flex items-center py-2 px-4 pl-6 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]">
                <NuxtLink to="/categories" class="font-semibold">Explore</NuxtLink>
                <img src="@/assets/icons/arrow-right-black.svg" class="h-4 w-4" alt="">
            </button>
        </div>
    </div>

    <div class="w-full pt-2 lg:pt-40 lg:hidden">
        <div class="">
            <div class="flex items-start justify-between px-8 ">
                <div class="xl:space-y-2 2xl:space-y-4 ">
                    <h2 class="text-white text-3xl">Featured <span
                            class="bg-gradient-to-r from-[#595CFF] to-[#FFC6C6] bg-clip-text text-gradient-animation text-transparent">Tools</span>
                    </h2>
                    <div class="flex items-center gap-x-10">
                        <p class="text-white text-base capitalize">Discoverd The Most View Ai tools</p>
                    </div>
                </div>
                <h2 class="font-medium mt-1 text-white text-sm">Swipe</h2>
            </div>


            <ul class="w-full overflow-auto pl-8 pt-8 grid grid-flow-col gap-x-6 items-center">
                <li v-for="product in productList" v-if="productList.length > 0"
                    class="w-[94vw] min-w-[94vw] rounded-xl bg-[#141414] flex h-full flex-col overflow-clip grid-rows-3">
                    <div class="row-span-2 w-full">
                        <img :src="getImageUrl(product.image)" class=" w-full aspect-video object-cover"
                            alt="Product Image">
                    </div>
                    <div class="p-5">
                        <div class="flex w-full items-center justify-between">
                            <div class="flex gap-x-2 items-center">
                                <img :src="getAvatarUrl(product.avatar)" class="h-9 w-9" alt="Notion Logo">
                                <div class="flex justify-center flex-col">
                                    <h2 class="text-white text-sm">{{
                                        product.title
                                        ||
                                        'Loading...' }}</h2>
                                    <p
                                        class="bg-[#BDD9BF] text-[#506C52] font-semibold text-xs lg:text-[0.60rem] xl:text-xs lg:py-[1px] lg:px-2 xl:py-0.5 xl:px-2.5 text-center 2xl:py-1 2xl:px-3 rounded-md">
                                        {{ product.pricing_type }}
                                    </p>
                                </div>
                            </div>
                            <NuxtLink v-if="product.url" :to="product.url"
                                class="flex items-center py-2 pl-4 pr-5 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]">
                                <img src="@/assets/icons/arrow-up-right.svg" class="h-6 w-6" alt="">
                                <span class="font-semibold">Visit</span>
                            </NuxtLink>
                        </div>
                        <div class=" mt-4 lg:text-xs xl:text-sm 2xl:text-base 2xl:mt-6 text-white">
                            {{ product.intro_description.slice(0, 150) +
                                (product.intro_description.length > 150 ? '...' : '') || 'Loading...' }}
                        </div>
                    </div>
                </li>
            </ul>

            <div class="text-center  flex flex-col gap-y-3 sm:flex-row items-center gap-x-2 mt-20 justify-center w-full">
                <h2 class="text-[#CCCCCC] text-sm lg:text-xl">Choose from <span class="text-[#F7FFDD]">hundreds</span> of ai
                    tools</h2>
                <img src="@/assets/icons/chevron-right.svg" class="h-5 hidden sm:block" alt="">
                <button
                    class="flex items-center py-2 px-4 pl-6 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]">
                    <NuxtLink to="/categories" class="font-semibold">Explore</NuxtLink>
                    <img src="@/assets/icons/arrow-right-black.svg" class="h-4 w-4" alt="">
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
import gsap from 'gsap'
const container = ref(null)
const scrollStuff = ref(null)
const scrollProgress = ref(null);
const imageEndUrlEndPoint = 'https://zzjfupocbypxhqvlygyf.supabase.co/storage/v1/object/public/'
const getAvatarUrl = (avatar) => {
    //ii avatar has placehold.co in it, return it as it is
    if (avatar.includes('placehold.co')) {
        return avatar
    } else {
        console.log(avatar)
        return `${imageEndUrlEndPoint}${avatar}`
    }

}


const getImageUrl = (image) => {
    //ii avatar has placehold.co in it, return it as it is
    if (image.includes('placehold.co')) {
        return image
    } else {
        console.log(image)
        return `${imageEndUrlEndPoint}${image}`
    }

}

const productList = ref([
    {
        title: 'Loading...',
        pricing_type: 'Loading...',
        url: 'https://example.com',
        intro_description: 'Loading...',
        image: 'https://placehold.co/600x400/EEE/31343C',
        avatar: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        title: 'Loading...',
        pricing_type: 'Loading...',
        url: 'https://example.com',
        intro_description: 'Loading...',
        image: 'https://placehold.co/600x400/EEE/31343C',
        avatar: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        title: 'Loading...',
        pricing_type: 'Loading...',
        url: 'https://example.com',
        intro_description: 'Loading...',
        image: 'https://placehold.co/600x400/EEE/31343C',
        avatar: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        title: 'Loading...',
        pricing_type: 'Loading...',
        url: 'https://example.com',
        intro_description: 'Loading...',
        image: 'https://placehold.co/600x400/EEE/31343C',
        avatar: 'https://placehold.co/600x400/EEE/31343C',

    }
]);


onMounted(async () => {
    const client = useSupabaseClient()
    const res = await client.from('tools').select('*').limit(4)
    const data = ref(res.data);

    const error = ref(res.error);
    if (error.value) {
        console.log(error)
    } else {
        productList.value = data.value.map((item) => {
            return {
                title: item.title,
                pricing_type: item.pricing_type,
                url: item.url,
                intro_description: item.intro_description,
                image: item.image,
                avatar: item.avatar
            }
        })
        /*     productList.value.splice(0, productList.value.length, ...data.value);
            console.log(productList.value) */
    }


    function handleScrollUpdate(scrollTrigger) {
        const scrollPosition = scrollTrigger.progress * 100;

        try {
            if (scrollProgress.value && scrollStuff.value) {
                gsap.to(scrollProgress.value, {
                    width: `${scrollPosition}%`,
                    ease: 'linear',
                    duration: 0.1,
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    gsap.to(scrollStuff.value, {
        x: -(scrollStuff.value.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: container.value,
            pin: true,
            scrub: true,
            end: () => "+=" + (scrollStuff.value ? scrollStuff.value.offsetWidth : 0),
            onUpdate: handleScrollUpdate,
        }
    });

})
</script>


<style scoped>
ul::-webkit-scrollbar {
    display: none;
}

.text-gradient-animation {
    animation: gradient 5s ease infinite;
    background-size: 400% 400%;
}

.button-gradient-animation {
    animation: gradient 5s ease infinite;
    background-size: 150% 150%;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>