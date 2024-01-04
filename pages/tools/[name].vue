<template>
  <div v-if="isLoaded" class="px-5 xl:px-6 pt-20">
    <div class="w-full grid items-center lg:grid-cols-2 gap-x-8 mt-20">
      <div class="w-full">
        <img
          :src="getImageUrl(product.image)"
          class="aspect-video lg:aspect-auto max-h-[32rem] h-full w-full rounded-lg object-cover"
          :alt="product.title"
        />
      </div>
      <div class="w-full h-full mt-10 flex flex-col justify-between">
        <div>
          <div class="flex gap-x-2 items-center">
            <img
              :src="getAvatarUrl(product.avatar)"
              class="h-12 w-12 sm:h-14 sm:w-14"
              alt=""
            />
            <div class="flex justify-center flex-col">
              <h2 class="text-white text-base sm:text-lg font-medium">
                {{ product.title }}
              </h2>
              <p
                v-if="
                  product.pricing_type.toLowerCase() == 'Gratis'.toLowerCase()
                "
                class="bg-[#BDD9BF] text-[#506C52] font-semibold text-xs py-1 px-2 text-center sm:px-3 rounded-md"
              >
                {{ product.pricing_type }}
              </p>
              <p
                v-else-if="
                  product.pricing_type.toLowerCase() ==
                  'Prueba Gratis'.toLowerCase()
                "
                class="bg-amber-100 text-amber-500 font-semibold text-xs py-1 px-2 text-center sm:px-3 rounded-md"
              >
                {{ product.pricing_type }}
              </p>
              <p
                v-else
                class="bg-[#FFD6D6] text-[#C65D5D] font-semibold text-xs py-1 px-2 text-center sm:px-3 rounded-md"
              >
                {{ product.pricing_type }}
              </p>
            </div>
          </div>
          <div class="text-[#F7FFDD] mt-6 text-lg">
            {{ product.intro_description }}
          </div>
        </div>

        <div class="space-y-8">
          <ul class="w-full flex flex-wrap gap-3 mt-4">
            <div
              v-for="tag in product.tags"
              class="bg-indigo-200 bg-opacity-60 backdrop-blur-lg p-1 py-1.5 rounded-md px-2 text-center sm:px-3 text-xs text-indigo-600"
            >
              {{ tag }}
            </div>
          </ul>
          <div class="grid grid-cols-2 mb-4 gap-x-4">
            <NuxtLink
              v-if="product.url"
              :to="product.url"
              class="flex items-center justify-center py-2.5 lg:py-1 xl:py-1 xl:pl-3 xl:pr-4 2xl:py-2 pl-4 pr-5 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]"
            >
              <img
                src="@/assets/icons/arrow-up-right.svg"
                class="h-6 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                alt=""
              />
              <span class="text-sm lg:text-sm 2xl:text-base font-semibold"
                >Visitar</span
              >
            </NuxtLink>

            <button
              v-if="product.isBookmarked"
              @click="toggleBookmark(product.tool_id)"
              class="flex items-center justify-center gap-x-2 py-2.5 lg:py-1 xl:py-1 xl:pl-3 xl:pr-4 2xl:py-2 pl-4 pr-5 bg-gradient-to-r from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]"
            >
              <img
                src="@/assets/icons/bookmark.svg"
                class="h-6 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                alt=""
              />
              <span class="text-xs lg:text-sm 2xl:text-base font-semibold"
                >Guardar</span
              >
            </button>

            <button
              v-else
              @click="toggleBookmark(product.tool_id)"
              class="flex items-center justify-center gap-x-2 py-2.5 lg:py-1 xl:py-1 xl:pl-3 xl:pr-4 2xl:py-2 pl-4 pr-5 bg-gradient-to-r from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]"
            >
              <img
                src="@/assets/icons/bookmark-active.svg"
                class="h-6 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                alt=""
              />
              <span class="text-sm lg:text-sm 2xl:text-base font-semibold"
                >Guardado</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-20">
      <h2 class="text-4xl text-[#F7FFDD] uppercase font-semibold">
        Descripción
      </h2>

      <div class="w-full">
        <div class="text-[#F7FFDD] mt-6 text-base">
          {{ product.description }}
        </div>
      </div>
    </div>

    <div class="mt-20">
      <div class="w-full grid grid-cols-2">
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const isLoaded = ref(false);
const product = ref({});
const client = useSupabaseClient();
const route = useRoute();
const bookmarks = useState("bookmarks");
const user = useSupabaseUser();
const router = useRouter();
const getImageUrl = (image) => {
  //ii avatar has placehold.co in it, return it as it is
  if (image.includes("placehold.co")) {
    return image;
  } else {
    console.log(image);
    return image;
  }
};

const getAvatarUrl = (avatar) => {
  //ii avatar has placehold.co in it, return it as it is
  if (avatar.includes("placehold.co")) {
    return avatar;
  } else {
    console.log(avatar);
    return avatar;
  }
};

const toggleBookmark = async (tool_id) => {
  if (user.value) {
    if (product.value.isBookmarked) {
      //remove from bookmarks
      const { data, error } = await client
        .from("bookmarks")
        .delete()
        .eq("tool_id", tool_id)
        .eq("user_id", user.value.id);
      if (error) {
        console.log(error);
      } else {
        product.value.isBookmarked = false;
        bookmarks.value = bookmarks.value.filter(
          (item) => item.tool_id !== tool_id
        );
      }
    } else {
      //add to bookmarks
      const { data, error } = await client
        .from("bookmarks")
        .insert([{ tool_id, user_id: user.value.id }]);
      if (error) {
        console.log(error);
      } else {
        product.value.isBookmarked = true;
        bookmarks.value.push({ tool_id, user_id: user.value.id });
      }
    }
  } else {
    router.push("/login");
  }
};

onMounted(async () => {
  const { data, error } = await client
    .from("tools")
    .select("*")
    .eq("tool_id", route.params.name)
    .single();

  if (error) {
    console.log(error);
  } else {
    //now check the bookmarks array to see if this tool is bookmarked or not
    const isBookmarked = bookmarks.value.find(
      (item) => item.tool_id === data.tool_id
    );
    if (isBookmarked) {
      product.value = { ...data, isBookmarked: true };
    } else {
      product.value = { ...data, isBookmarked: false };
    }

    isLoaded.value = true;
  }
});
</script>

<style scoped>
ul::-webkit-scrollbar {
  display: none;
}

.text-gradient-animation {
  animation: gradient 5s ease infinite;
  background-size: 400% 400%;
}

.button-gradient-animation {
  animation: gradient 5s ease infinite;
  background-size: 150% 150%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
