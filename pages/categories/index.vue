<template>
    <div class="mt-10 w-full text-white px-5 xl:px-6">
        <div class="w-full text-white text-center mt-32 mb-20">
            <h1 class="text-4xl font-bold">Spytools Categories</h1>
            <p class="mt-4 text-lg">Streamline your search and find the best AI solutions to enhance your operations,
                improve customer experiences, and drive growth.</p>
        </div>
        <section v-for="category in categoriesList" :key="category.id" class="w-full mt-16">
            <h2 class="text-3xl text-center font-semibold">{{ category.name }}</h2>
            <CategorySubCategories :category_id="category.category_id"></CategorySubCategories>
        </section>
    </div>
</template>
  
<script setup>
const client = useSupabaseClient()

const categoriesList = ref([])
onMounted(async () => {
    const { data, error } = await client.from('categories').select()
    console.log(data)
    if (error) console.log(error)
    else categoriesList.value = data
})

</script>
  
  