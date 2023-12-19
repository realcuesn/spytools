<template>
    <div class="pt-20 px-5 xl:px-6">
        <h2
            class="my-10 text-4xl px-2 xl:my-20 font-semibold bg-gradient-to-r from-[#595CFF] to-[#FFC6C6] bg-clip-text text-gradient-animation text-transparent">
            Bookmarks
        </h2>
        <div class="flex items-center justify-center">
            <h2 class="text-2xl">{{ name }}</h2>
            <ul
                class="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-8 sm:gap-y-10 gap-x-10 pt-14">
                <li v-for="product in bookmarksList" :key="product.tool_id"
                    class="w-full rounded-lg sm:rounded-xl bg-[#141414] flex flex-col overflow-clip">
                    <div class="row-span-2 aspect-video w-full relative">
                        <NuxtLink :to="`/tools/${product.tool_id}`" class="h-full w-full">
                            <img :src="getImageUrl(product.image)" class="h-full w-full aspect-video object-cover" alt="" />
                        </NuxtLink>

                        <div class="absolute top-5 right-5">
                            <img @click="toggleBookmark(product.tool_id)" src="@/assets/icons/bookmark-active.svg"
                                class="h-6 w-6 sm:h-10 sm:w-10" alt="" />
                        </div>
                    </div>
                    <div class="p-2 pt-4 sm:p-6 lg:p-5">
                        <div class="flex w-full items-center justify-between">
                            <NuxtLink :to="`/tools/${product.tool_id}`" class="flex gap-x-2 items-center">
                                <img :src="getAvatarUrl(product.avatar)" class="h-12 w-12 sm:h-14 sm:w-14" alt="" />
                                <div class="flex justify-center flex-col">
                                    <h2 class="text-white text-base sm:text-lg font-medium">{{ product.title || 'Untitled'
                                    }}</h2>
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
                                <img src="@/assets/icons/arrow-up-right.svg" class="h-6 w-6" alt="" />
                                <span class="font-semibold">Visit</span>
                            </NuxtLink>
                        </div>
                        <div class="mt-6 text-sm sm:text-lg lg:text-base text-white h-fit">
                            {{
                                truncateDescription(product.intro_description || 'No description available')
                            }}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  

<script setup>
const client = useSupabaseClient();
const name = ref("");
const bookmarksList = ref([]);
const user = useSupabaseUser();
const getAvatarUrl = (avatar) => {
    // Check if avatar is defined and not null
    if (avatar && avatar.includes) {
        // Check if avatar includes "placehold.co"
        if (avatar.includes("placehold.co")) {
            return avatar;
        } else {
            return avatar;
        }
    }

    // Default return if avatar is undefined or doesn't include "placehold.co"
    return "https://placehold.co/600x400/EEE/31343C";
};

const bookmarks = useState("bookmarks");
const getImageUrl = (image) => {
    // Check if image is defined and not null
    if (image && image.includes) {
        // Check if image includes "placehold.co"
        if (image.includes("placehold.co")) {
            return image;
        } else {
            return image;
        }
    }
    return "https://placehold.co/600x400/EEE/31343C";
};


function truncateDescription(description, maxLength = 150) {
    try {
        if (!description || description.length === 0) {
            throw new Error("Description is empty or undefined.");
        }

        return (
            description.slice(0, maxLength) +
            (description.length > maxLength ? "..." : "")
        );
    } catch (error) {
        console.log("Error truncating description:", error.message);
        return ""; // or any default value you prefer
    }
}

const toggleBookmark = async (tool_id) => {
    if (user.value) {
        //now just delete the bookmark from the bookmarks table.
        const { data, error } = await client
            .from("bookmarks")
            .delete()
            .eq("tool_id", tool_id)
            .eq("user_id", user.value.id);
        if (error) {
            console.log(error);
        } else {
            console.log(data);
            bookmarks.value = bookmarks.value.filter(
                (item) => item.tool_id !== tool_id
            );
            bookmarksList.value = bookmarksList.value.filter(
                (item) => item.tool_id !== tool_id
            );
        }
    }
};

onMounted(async () => {
    console.log("mounted", bookmarks.value);
    if (!user.value) {
        router.push("/login");
    }
    const promises = bookmarks.value.map(async (item) => {
        // Fetch the tool from the Supabase tools table using the client
        const { data, error } = await client
            .from("tools")
            .select("*")
            .eq("tool_id", item.tool_id)
            .single();
        console.log(data);
        if (error) {
            console.log(error);
        } else {
            return {
                ...data,
            };
        }
    });

    // Wait for all promises to resolve using Promise.all
    const data = (await Promise.all(promises))
        .map((item) => {
            return {
                ...item
            };
        })
        .filter(item => Object.keys(item).length > 0);

    const sortedData = data.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

    bookmarksList.value = sortedData;
    console.log("After:", bookmarksList.value);
});
</script>

<style scoped>
.text-gradient-animation {
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradient 5s ease infinite;
}
</style>
