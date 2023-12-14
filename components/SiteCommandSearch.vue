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
        return `${imageEndUrlEndPoint}${avatar}`
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
        if (textValue.value.length > 0) {
            const { data, error } = await client
                .from('tools')
                .select('*')
                .or([
                    { 'description:ilike': `%${textValue.value}%` },
                    { 'title:ilike': `%${textValue.value}%` },
                    { 'tags: @>': [`%${textValue.value}%`] },
                    // Add more conditions as needed
                ])
                .limit(5);
            if (data) results.value = data;
            console.log(data);
        } else {
            results.value = [];
        }
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
                <div class="w-full flex items-center">
                    <input
                        class="text-[#f7ffdd] bg-[#272727] outline-none py-3 pl-3 text-left rounded-l-md capitalize text-sm w-full sm:text-xl placeholder:text-[#A3A3A3]"
                        type="text" placeholder="Type to Search for over 1500+ tools" v-model="textValue">
                    <button @click="handleSearch()"
                        class="h-11 w-12 sm:h-[52px] sm:w-[60px] rounded-r-md flex items-center justify-center bg-[#f7ffdd]">
                        <img src="@/assets/icons/search-black.svg" class="h-5 w-5 sm:h-7 sm:w-7" alt="" />
                    </button>

                </div>

                <div class="bg-[#272727] py-20 mt-4 rounded-md">
                    <div @click="handleRedirect(result.tool_id)" v-for="result in results" class="">
                        <img :src="getAvatarUrl(result.avatar)" class="h-8 w-8 mr-2" />
                        <span>{{ result.title }}</span>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>