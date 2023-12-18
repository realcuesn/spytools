<script setup>
import { XCircleIcon } from 'lucide-vue-next';
const router = useRouter()
const open = useState('searchOpen')
const imageEndUrlEndPoint = 'https://zzjfupocbypxhqvlygyf.supabase.co/storage/v1/object/public/'
const getAvatarUrl = (avatar) => {
    //ii avatar has placehold.co in it, return it as it is
    if (avatar.includes('placehold.co')) {
        return avatar
    } else {
        console.log(avatar)
        return avatar
    }

}
const results = ref([])
const textValue = ref('')

const client = useSupabaseClient()

watch(textValue, async (value) => {
    console.log(value);

});
const handleRedirect = (value) => {
    router.push(`/tools/${value}`)
    open.value = false
}

const handleSearch = async () => {
    console.log('hello');
    if (textValue.value.length > 0) {
        const descriptionQuery = client
            .from('tools')
            .select('*')
            .ilike('description', `%${textValue.value}%`)
            .limit(5);

        const anotherColumnQuery = client
            .from('tools')
            .select('*')
            .ilike('title', `%${textValue.value}%`)
            .limit(5);

        const tagsQuery = client
            .from('tools')
            .select('*')
            .ilike('tags::text', `%${textValue.value}%`);

        const [descriptionResult, anotherColumnResult, tagsResult] = await Promise.all([
            descriptionQuery,
            anotherColumnQuery,
            tagsQuery,
        ]);

        const combinedResults = [
            ...(descriptionResult.data || []),
            ...(anotherColumnResult.data || []),
            ...(tagsResult.data || []),
        ];

        results.value = combinedResults;
        console.log(combinedResults);
    } else {
        results.value = [];
    }
};

</script>

<template>
    <div class="w-full h-screen fixed top-0 px-2 z-50 bg-black bg-opacity-80 backdrop-blur-lg">
        <div class="w-full relative flex items-center justify-center h-full ">

            <XCircleIcon class="h-8 w-8 absolute top-4 right-4  cursor-pointer
            hover:opacity-80 transition duration-300 ease-in-out" @click="open = false" />


            <!--   <Command @update:search-term="handleSearch" submit v-bind:search-term="textValue"
                class="rounded-lg border shadow-md w-full h-fit max-w-[450px]">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem @click="handleRedirect(result.tool_id)" v-for="result in results"
                            :value="result.tool_id">
                            <img :src="getAvatarUrl(result.avatar)" class="h-8 w-8 mr-2" />
                            <span>{{ result.title }}</span>
                        </CommandItem>

                    </CommandGroup>
                    <CommandSeparator />
                </CommandList>
            </Command> -->

            <div class="w-full max-w-3xl px-3  mx-auto ">
                <form @submit.prevent="handleSearch()" class="w-full flex items-center">
                    <input
                        class="text-[#f7ffdd] bg-[#272727] outline-none py-3 pl-3 text-left rounded-l-md capitalize text-sm w-full sm:text-xl placeholder:text-[#A3A3A3]"
                        type="text" placeholder="Type to Search for over 1500+ tools" v-model="textValue">
                    <button type="submit"
                        class="h-11 w-12 sm:h-[52px] sm:w-[60px] rounded-r-md flex items-center justify-center bg-[#f7ffdd]">
                        <img src="@/assets/icons/search-black.svg" class="h-5 w-5 sm:h-7 sm:w-7" alt="" />
                    </button>
                </form>

                <div v-if="results.length > 0" class="bg-[#272727] py-2 mt-4 px-2 flex flex-col w-full gap-y-3 rounded-md">
                    <div v-for="result in results" @click="handleRedirect(result.tool_id)"
                        class="flex items-center bg-neutral-700 rounded-md gap-x-1 p-2">
                        <img :src="getAvatarUrl(result.avatar)" class="h-8 w-8 mr-2" />
                        <span>{{ result.title }}</span>
                    </div>
                </div>

                <div v-else class="bg-[#272727] py-2 mt-4 px-2 rounded-md text-center">
                    <span class="text-[#A3A3A3]">No results found.</span>
                </div>
            </div>
        </div>

    </div>
</template>