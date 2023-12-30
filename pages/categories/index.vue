<template>
    <div v-if="isLoaded" class="mt-10 w-full text-white px-5 xl:px-6">
        <div class="w-full text-white text-center mt-32 mb-20">
            <h1 class="text-4xl font-bold">Spytools Categories</h1>
            <p class="mt-4 text-lg">
                Streamline your search and find the best AI solutions to enhance your
                operations, improve customer experiences, and drive growth.
            </p>
        </div>
        <section v-for="category in categoriesList" :key="category.id" class="w-full mt-16">
            <h2 class="text-3xl text-center font-semibold">{{ category.name }}</h2>
            <CategorySubCategories :category_id="category.category_id"></CategorySubCategories>
        </section>
    </div>

    <div v-else class="w-full min-h-screen grid place-content-center">
        <div class="flex flex-col items-center gap-y-4">
            <img src="@/assets/branding/logo.svg" class="h-12 w-12" alt="" />
            <h2 class="text-2xl font-semibold text-white">Loading...</h2>
        </div>
    </div>
</template>

<script setup>
const client = useSupabaseClient();
const isLoaded = ref(false);

const categoriesList = ref([]);
onMounted(async () => {
    const { data, error } = await client.from("categories").select();
    console.log(data);
    if (error) console.log(error);
    else categoriesList.value = data;
    isLoaded.value = true;
});
</script>
