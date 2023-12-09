<template>
    <div class="px-5 xl:px-6 flex justify-between py-6 items-center absolute z-50 top-0 w-full">
        <NuxtLink to="/" class="flex items-center">
            <img src="@/assets/branding/logo.svg" class="h-12 w-12" alt="">
            <h2
                class="text-xl uppercase font-bold logo-gradient-animation bg-gradient-to-l from-[#595CFF] to-[#FFC6C6] bg-clip-text text-transparent ">
                Spytools</h2>
        </NuxtLink>

        <div class="flex items-center gap-x-4">
            <button v-if="!user"
                class="bg-[#272727] font-medium hidden  lg:flex items-center gap-x-2 text-[#F7FFDD] py-2 pl-5 pr-7 rounded-3xl">
                <img src="@/assets/icons/google-colored.svg" class="h-5 w-5" alt="">
                <NuxtLink to="/login">Login</NuxtLink>
            </button>
            <button v-else
                class="bg-[#272727] font-medium hidden  lg:flex items-center gap-x-2 text-[#F7FFDD] py-2 pl-5 pr-7 rounded-3xl">
                <img src="@/assets/icons/bookmark.svg" class="h-5 w-5" alt="">
                <NuxtLink to="/bookmarks">Bookmarks</NuxtLink>
            </button>
            <button :class="{ '!opacity-0 !hidden': menuState }"
                class="bg-[#272727] font-medium hidden lg:flex transition-all duration-700 opacity-100 items-center gap-x-3 text-[#F7FFDD] py-2 pl-5 pr-12 rounded-3xl">
                <img src="@/assets/icons/search.svg" class="h-5 w-5" alt="">
                <span>Search</span>
            </button>
            <img src="@/assets/icons/plus.svg" :class="{ 'rotate-45': menuState }" @click="handleMenuToggle"
                class=" h-10 w-10 bg-[#272727] rounded-full transition-all duration-1000 p-1 cursor-pointer lg:hover:opacity-70 lg:active:opacity-90"
                alt="">
        </div>
    </div>
</template>

<script setup>
const user = useSupabaseUser()
const menuState = useState('menu')
const menuAnimateState = useState('menu-animate')
const handleMenuToggle = () => {

    if (!menuState.value) {
        menuState.value = true
    } else {
        menuAnimateState.value = true
    }
}
</script>
