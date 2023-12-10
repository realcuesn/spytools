<script setup lang="ts">
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
const open = useState('searchOpen')

const results = ref([])
const query = ref('')

const client = useSupabaseClient()

watch(query, async (value) => {
    console.log(value);
    if (value.length > 0) {
        const { data, error } = await client
            .from('tools')
            .select('*, categories(name)')
            .ilike('name', `%${value}%`)
            .limit(5);
        if (data) results.value = data;
        console.log(data);
    } else {
        results.value = [];
    }
});

</script>

<template>
    <div class="w-full h-screen fixed top-0 px-2 z-50 bg-black bg-opacity-80 backdrop-blur-lg">
        <div class="w-full relative flex items-center justify-center h-full ">
            <h2>{{ query }}</h2>

            <XCircleIcon class="h-8 w-8 absolute top-4 right-4  cursor-pointer
            hover:opacity-80 transition duration-300 ease-in-out" @click="open = false" />


            <Command v-model="query" class="rounded-lg border shadow-md w-full h-fit max-w-[450px]">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem value="Calendar">
                            <Calendar class="mr-2 h-4 w-4" />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem value="Search Emoji">
                            <Smile class="mr-2 h-4 w-4" />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem value="Calculator">
                            <Calculator class="mr-2 h-4 w-4" />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem value="Profile">
                            <User class="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem value="Billing">
                            <CreditCard class="mr-2 h-4 w-4" />
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem value="Settings">
                            <Settings class="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>

    </div>
</template>