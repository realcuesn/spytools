<template>
    <div class="pt-20 px-5 xl:px-6 min-h-screen">
        <h2
            class=" my-10  text-4xl px-2 capitalize xl:my-20 font-semibold bg-gradient-to-r from-[#595CFF] to-[#FFC6C6] bg-clip-text text-gradient-animation text-transparent">
            {{ name }}</h2>
        <ul class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-4 gap-x-9 gap-y-4 pt-10 categories-list">
            <NuxtLink v-for="subCategory in subCategoriesList" :key="subCategory.id"
                :to="`/categories/sub-category/${subCategory.category}`" class="mt-3">
                <div class="p-0.5 bg-[#13161B] h-full px-12 py-8 text-center rounded-xl">
                    <div>
                        <h3 class="text-xl">
                            {{ subCategory.category }}
                        </h3>
                        <p class="pt-2 text-[#919191]">
                            {{ subCategory.description }}
                        </p>
                    </div>
                </div>
            </NuxtLink>
        </ul>
    </div>
</template>

<script setup>
const client = useSupabaseClient()
const route = useRoute()
let name = route.params.name
//turn tge furst letter of the name to uppercase

name = name.charAt(0).toUpperCase() + name.slice(1)

const props = defineProps({
    category_id: {
        type: String
    }
})
const subCategoriesList = ref([])

onMounted(async () => {
    //if parent_category == props.category_id
    const { data, error } = await client.from('sub_categories').select().eq('parent_category_name', name)
    console.log(data)
    if (error) console.log(error)
    else subCategoriesList.value = data
})

</script>


<style scoped>
a {
    position: relative;
}

a::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    height: 0%;
    width: 100%;
    top: -5px;
    bottom: -5px;
    left: 0px;
    right: 0px;
    border-left: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    z-index: 0;
    transition: height 0.3s linear;
    transform-origin: center;
}

a:hover::before {
    height: calc(100% + 10px);
}

a::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    height: 100% calc(100%);
    width: 0%;
    top: 0px;
    bottom: 0px;
    left: -5px;
    right: -5px;
    border-top: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    z-index: 0;
    transition: width 0.3s linear;
    margin-left: auto;
    margin-right: auto;
}

a:hover::after {
    width: calc(100% + 10px);
}
</style>