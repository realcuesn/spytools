<template>
    <div class="w-full relative">
        <section class="w-full flex flex-col gap-y-14 items-center justify-between pt-28">
            <div class="hidden sm:flex mx-auto items-center gap-x-8">
                <span class="text-base text-[#CCCCCC] font-medium">Explore</span>
                <NuxtLink to="/categories" class="text-[#F7FFDD] font-medium bg-[#272727] px-6 rounded-md py-2">Categories
                </NuxtLink>
                <button class="text-[#F7FFDD] font-medium bg-[#272727] px-6 rounded-md py-2 min-w-fit">
                    Featured Tools
                </button>
                <div class="w-full flex gap-x-2 items-center border-b-2 border-b-white">
                    <NuxtLink to="/categories" class="text-white font-medium">View All</NuxtLink>
                    <img src="@/assets/icons/arrow-right.svg" class="h-3.5" alt="Arrow right" />
                </div>
            </div>

            <div class="flex mt-14 lg:mt-0 items-center justify-center gap-y-10 sm:gap-y-20 flex-col">
                <div class="text-[#f7ffdd] text-5xl sm:text-8xl text-center font-semibold">
                    <span
                        class="bg-gradient-to-r from-[#595CFF] to-[#FFC6C6] bg-clip-text text-gradient-animation text-transparent">
                        Discover
                    </span>
                    <br class="lg:hidden" />
                    AI Tools <br class="hidden lg:block" />for <br class="lg:hidden" />
                    <span
                        class="bg-gradient-to-r from-[#595CFF] text-gradient-animation to-[#FFC6C6] bg-clip-text text-transparent">
                        <vue-writer :eraseSpeed="60" :typeSpeed="100" :caret="underscore"
                            class="bg-gradient-to-r from-[#595CFF] text-gradient-animation to-[#FFC6C6] bg-clip-text text-transparent"
                            :array="['Your Business.', 'Individual']" />
                    </span>
                </div>

                <div class="text-sm sm:text-lg text-center w-full text-white font-medium tracking-wide">
                    Streamline Your Workflow with Our List of AI tools <br />
                    Find Your Perfect Solution!
                </div>

                <button @click="open = true" class="flex w-full justify-center items-center lg:-mt-10">
                    <p
                        class="text-[#f7ffdd] bg-[#272727] outline-none py-3 pl-5 rounded-l-md lg:w-[26rem] capitalize text-sm w-full sm:text-xl placeholder:text-[#A3A3A3]">
                        Type to Search for over 1500+ tools</p>
                    <div type="submit"
                        class="h-11 w-12 sm:h-[52px] sm:w-[60px] rounded-r-md flex items-center justify-center bg-[#f7ffdd]">
                        <img src="@/assets/icons/search-black.svg" class="h-5 w-5 sm:h-7 sm:w-7" alt="" />
                    </div>
                </button>

                <div>
                    <img src="@/assets/branding/logo.svg" alt="" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import VueWriter from "vue-writer";
const underscore = "_";
const open = useState('searchOpen')
</script>

<style scoped>
.text-gradient-animation {
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradient 5s ease infinite;
}
</style>
