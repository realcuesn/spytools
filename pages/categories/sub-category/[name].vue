<template>
    <div class="pt-20 px-5 xl:px-6">
        <h2
            class=" my-10  text-4xl px-2 xl:my-20 font-semibold bg-gradient-to-r from-[#595CFF] to-[#FFC6C6] bg-clip-text text-gradient-animation text-transparent">
            {{ name }}</h2>
        <div class="flex items-center justify-center">
            <ul
                class="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-8 sm:gap-y-10 gap-x-10 pt-14">
                <li v-for="product in productList" :key="product.id"
                    class=" w-full rounded-lg sm:rounded-xl bg-[#141414] flex flex-col overflow-clip">
                    <div class="row-span-2 aspect-video w-full relative">
                        <NuxtLink :to="`/tools/${product.tool_id}`" class="h-full w-full">
                            <img :src="getImageUrl(product.image)" class="h-full w-full aspect-video object-cover" alt="">
                        </NuxtLink>
                        <div class="absolute top-5 right-5">
                            <img v-if="product.isBookmarked" @click="toggleBookmark(product.tool_id)"
                                src="@/assets/icons/bookmark-active.svg" class="h-6 w-6 cursor-pointer sm:h-10 sm:w-10"
                                alt="">
                            <img v-else @click="toggleBookmark(product.tool_id)" src="@/assets/icons/bookmark-inactive.svg"
                                class="h-6 w-6 cursor-pointer sm:h-10 sm:w-10 " alt="">
                        </div>
                    </div>
                    <div class=" p-2 pt-4 sm:p-6 lg:p-5">
                        <div class="flex w-full items-center justify-between">
                            <NuxtLink :to="`/tools/${product.tool_id}`" class="flex gap-x-2 items-center">
                                <img :src="getAvatarUrl(product.avatar)" class="h-12 w-12 sm:h-14 sm:w-14" alt="">
                                <div class="flex justify-center flex-col">
                                    <h2 class="text-white text-base sm:text-lg font-medium">{{ product.title }}</h2>
                                    <p v-if="product.pricing_type == 'Free'"
                                        class="bg-[#BDD9BF] text-[#506C52] font-semibold text-xs py-1 px-2 text-center sm:px-3 rounded-md">
                                        {{ product.pricing_type }}
                                    </p>
                                    <p v-else-if="product.pricing_type == 'Freemium'"
                                        class="bg-amber-100 text-amber-500 font-semibold text-xs py-1 px-2 text-center sm:px-3 rounded-md">
                                        {{ product.pricing_type }}
                                    </p>
                                    <p v-else
                                        class="bg-[#FFD6D6] text-[#C65D5D] font-semibold text-xs py-1 px-2 text-center sm:px-3 rounded-md">
                                        {{ product.pricing_type }}
                                    </p>
                                </div>
                            </NuxtLink>


                            <NuxtLink :to="product.url"
                                class="flex items-center py-2 pl-4 pr-5 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]">
                                <img src="@/assets/icons/arrow-up-right.svg" class="h-6 w-6" alt="">
                                <span class="font-semibold">Visit</span>
                            </NuxtLink>
                        </div>
                        <div class="mt-6 text-sm sm:text-lg lg:text-base text-white h-fit">{{
                            product.intro_description.slice(0, 150) +
                            (product.intro_description.length > 150 ? '...' : '') }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const client = useSupabaseClient()
const route = useRoute()
const name = ref('')
const productList = ref([])
const user = useSupabaseUser()
const bookmarks = useState('bookmarks')
const imageEndUrlEndPoint = 'https://zzjfupocbypxhqvlygyf.supabase.co/storage/v1/object/public/'
const getImageUrl = (image) => {
    //ii avatar has placehold.co in it, return it as it is
    if (image.includes('placehold.co')) {
        return image
    } else {
        console.log(image)
        return image
    }

}

const getAvatarUrl = (avatar) => {
    //ii avatar has placehold.co in it, return it as it is
    if (avatar.includes('placehold.co')) {
        return avatar
    } else {
        console.log(avatar)
        return avatar
    }

}

const toggleBookmark = async (tool_id) => {
    //now add the bookmark to the bookmarks array if it doesn't exist and also delete and remove it if it does exist and update the UI and also don't forget to update the supabase database also remember we use user_id propery which is the same as the user id in the supabase database.
    if (bookmarks.value.includes(tool_id)) {
        console.log('already bookmarked')
        //remove the bookmark
        bookmarks.value = bookmarks.value.filter((item) => item !== tool_id)
        //now update the UI
        productList.value = productList.value.map((item) => {
            if (item.tool_id === tool_id) {
                return {
                    ...item,
                    isBookmarked: false
                }
            } else {
                return item
            }
        })


        //now update the supabase database
        const { data, error } = await client.from('bookmarks').delete().eq('tool_id', tool_id).eq('user_id', user.value.id)

        if (error) {
            console.log(error)
        } else {
            console.log(data)
        }
    } else {
        console.log('not bookmarked')
        //add the bookmark
        bookmarks.value = [...bookmarks.value, tool_id]
        //now update the UI
        productList.value = productList.value.map((item) => {
            if (item.tool_id === tool_id) {
                return {
                    ...item,
                    isBookmarked: true
                }
            } else {
                return item
            }
        })
        //now update the supabase database
        const { data, error } = await client.from('bookmarks').insert({
            tool_id,
            user_id: user.value.id
        })
        if (error) {
            console.log(error)
        } else {
            console.log(data)
        }
    }
}


onMounted(async () => {
    name.value = route.params.name
    const res = await client.from('tools').select().eq('category', route.params.name)
    const data = ref(res.data);

    //this is a funtion which takes in the tool_id from the bookmark and returns true or false
    const checkBookmarked = (tool_id) => {
        //useFind to check if the tool_id is in the bookmarks array
        const isBookmarked = bookmarks.value.find((item) => {
            if (item.tool_id == tool_id) {
                return true
            } else {
                return false
            }

        })

        if (isBookmarked) {
            return true
        } else {
            return false
        }
    }

    const error = ref(res.error);
    if (error.value) {
        console.log(error)
    } else {
        if (data.value.length >= 4) {
            productList.value = data.value.map((item) => {
                const isBookmarked = checkBookmarked(item.tool_id);
                console.log(isBookmarked);
                return {
                    title: item.title,
                    isBookmarked: isBookmarked,
                    pricing_type: item.pricing_type,
                    tool_id: item.tool_id,
                    url: item.url,
                    intro_description: item.intro_description,
                    image: item.image,
                    avatar: item.avatar
                }
            })
        }
    }


})

</script>
