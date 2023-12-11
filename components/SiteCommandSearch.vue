<script setup>
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from 'lucide-vue-next'

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '@/components/ui/command'
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

const handleSearch = async (value) => {
    if (value.length > 0 && value !== textValue.value && value != null) {
        if (value.length > 0) {
            const { data, error } = await client
                .from('tools')
                .select('*').
                ilike('description', `%${value}%`)
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
            <h2>{{ textValue }}</h2>

            <XCircleIcon class="h-8 w-8 absolute top-4 right-4  cursor-pointer
            hover:opacity-80 transition duration-300 ease-in-out" @click="open = false" />


            <Command @update:search-term="handleSearch" v-bind:search-term="textValue"
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
            </Command>
        </div>

    </div>
</template>