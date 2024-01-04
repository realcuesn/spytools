<template>
  <div class="w-full bg-black text-white min-h-fit absolute pt-20 top-0">
    <div class="w-full px-8 pb-10 max-w-4xl mx-auto">
      <h2 class="mt-10 text-4xl font-semibold">Subir herramienta</h2>
      <div class="w-full lg:grid grid-cols-2">
        <form class="flex flex-col gap-y-2" @submit.prevent="handleSubmit">
          <div class="mt-10 w-full space-y-2">
            <label class="block text-base dark:text-neutral-100" for="title"
              >Título</label
            >
            <input
              v-model="title"
              class="bg-transparent px-2 w-full py-2 border rounded-md"
              id="title"
              name="title"
              type="text"
              placeholder=""
            />
          </div>
          <div class="mt-10 w-full space-y-2">
            <label
              class="block text-base dark:text-neutral-100"
              for="pricing_type"
              >Tipo de precio</label
            >
            <input
              v-model="pricingType"
              class="bg-transparent px-2 w-full py-2 border rounded-md"
              id="pricing_type"
              name="pricing_type"
              type="text"
              placeholder=""
            />
          </div>
          <div class="mt-10 w-full space-y-2">
            <label class="block text-base dark:text-neutral-100" for="url"
              >URL</label
            >
            <input
              v-model="url"
              class="bg-transparent px-2 w-full py-2 border rounded-md"
              id="url"
              name="url"
              type="text"
              placeholder=""
            />
          </div>
          <div class="mt-10 w-full space-y-2">
            <label
              class="block text-base dark:text-neutral-100"
              for="intro_description"
              >Descripción corta</label
            >
            <textarea
              v-model="introDescription"
              cols="30"
              rows="5"
              id="intro_description"
              class="bg-transparent px-2 w-full py-2 border rounded-md"
              name="intro_description"
              placeholder=""
            ></textarea>
          </div>
          <div class="mt-10 w-full space-y-2">
            <label
              class="block text-base dark:text-neutral-100"
              for="description"
              >Descripción</label
            >
            <textarea
              v-model="description"
              cols="30"
              rows="10"
              id="description"
              class="bg-transparent px-2 w-full py-2 border rounded-md"
              name="description"
              placeholder=""
            ></textarea>
          </div>
          <div class="mt-10 w-full space-y-2">
            <label class="block text-base dark:text-neutral-100" for="cons"
              >Contras</label
            >
            <input
              v-model="newCon"
              class="bg-transparent px-2 w-full py-2 border rounded-md"
              id="cons"
              name="cons"
              type="text"
              placeholder=""
            />
            <button
              @click="addCon"
              type="button"
              class="bg-gray-500 text-white px-2 py-1 rounded-md mt-2"
            >
              Añadir Contras
            </button>
            <div v-for="(con, index) in consArray" :key="index">
              {{ con }}
              <button
                @click="removeCon(index)"
                type="button"
                class="text-red-500 ml-2"
              >
                Eliminar
              </button>
            </div>
          </div>
          <div class="mt-10 w-full space-y-2">
            <label class="block text-base dark:text-neutral-100" for="tags"
              >Etiquetas</label
            >
            <input
              v-model="newTag"
              class="bg-transparent px-2 w-full py-2 border rounded-md"
              id="tags"
              name="tags"
              type="text"
              placeholder=""
            />
            <button
              @click="addTag"
              type="button"
              class="bg-gray-500 text-white px-2 py-1 rounded-md mt-2"
            >
              Añadir etiqueta
            </button>
            <div v-for="(tag, index) in tagsArray" :key="index">
              {{ tag }}
              <button
                @click="removeTag(index)"
                type="button"
                class="text-red-500 ml-2"
              >
                Eliminar
              </button>
            </div>
          </div>
          <div class="mt-10 w-full space-y-2">
            <label class="block text-base dark:text-neutral-100" for="pros"
              >Pros</label
            >
            <input
              v-model="newPro"
              class="bg-transparent px-2 w-full py-2 border rounded-md"
              id="pros"
              name="pros"
              type="text"
              placeholder=""
            />
            <button
              @click="addPro"
              type="button"
              class="bg-gray-500 text-white px-2 py-1 rounded-md mt-2"
            >
              Añadir Pros
            </button>
            <div v-for="(pro, index) in prosArray" :key="index">
              {{ pro }}
              <button
                @click="removePro(index)"
                type="button"
                class="text-red-500 ml-2"
              >
                Eliminar
              </button>
            </div>
          </div>
          <div class="mt-10 w-full space-y-2">
            <label class="block text-base dark:text-neutral-100" for="category"
              >Categoría</label
            >
            <input
              v-model="category"
              class="bg-transparent px-2 w-full py-2 border rounded-md"
              id="category"
              name="category"
              type="text"
              placeholder=""
            />
          </div>
          <div class="mt-10 w-full space-y-2">
            <label class="block text-base dark:text-neutral-100" for="avatar"
              >Subir Avatar</label
            >
            <input
              @change="handleAvatarUpload"
              type="file"
              class="bg-transparent text-transparent w-full py-10 pl-32 border rounded-md"
              id="avatar"
              name="avatar"
              accept="image/*"
            />
          </div>
          <div class="mt-10 w-full space-y-2">
            <label class="block text-base dark:text-neutral-100" for="image"
              >Subir Imagen</label
            >
            <input
              @change="handleImageUpload"
              type="file"
              class="bg-transparent text-transparent w-full py-10 pl-32 border rounded-md"
              id="image"
              name="image"
              accept="image/*"
            />
          </div>
          <button
            class="px-7 rounded-md py-2.5 bg-white text-black hover:brightness-75 active:brightness-125 transition-all duration-700 hover:text-[#1ad6ff] dark:text-black mt-10 w-fit"
          >
            Enviar mensaje
          </button>
        </form>
        <div class="w-full">
          <h1 class="text-lg font-medium lg:pl-20 mt-20">
            Porfavor, ve a supabase para un mayor control
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const title = ref("");
const pricingType = ref("");
const url = ref("");
const introDescription = ref("");
const description = ref("");
const consArray = ref([]);
const tagsArray = ref([]);
const prosArray = ref([]);
const newCon = ref("");
const newTag = ref("");
const newPro = ref("");
const avatar = ref(null);
const image = ref(null);

const handleAvatarUpload = (event) => {
  avatar.value = event.target.files[0];
};

const handleImageUpload = (event) => {
  image.value = event.target.files[0];
};

const addCon = () => {
  if (newCon.value.trim() !== "") {
    consArray.value.push(newCon.value.trim());
    newCon.value = "";
  }
};

const removeCon = (index) => {
  consArray.value.splice(index, 1);
};

const addTag = () => {
  if (newTag.value.trim() !== "") {
    tagsArray.value.push(newTag.value.trim());
    newTag.value = "";
  }
};

const removeTag = (index) => {
  tagsArray.value.splice(index, 1);
};

const addPro = () => {
  if (newPro.value.trim() !== "") {
    prosArray.value.push(newPro.value.trim());
    newPro.value = "";
  }
};

const removePro = (index) => {
  prosArray.value.splice(index, 1);
};

const handleSubmit = async () => {
  const formData = {
    title: title.value,
    pricing_type: pricingType.value,
    url: url.value,
    intro_description: introDescription.value,
    description: description.value,
    cons: consArray.value,
    tags: tagsArray.value,
    pros: prosArray.value,
    category: category.value,
  };

  // Upload images to Supabase storage
  const avatarUploadResponse = await supabase.storage
    .from("avatars")
    .upload(`${avatar.value.name}`, avatar.value);
  const imageUploadResponse = await supabase.storage
    .from("images")
    .upload(`${image.value.name}`, image.value);

  console.log("avatarUploadResponse", avatarUploadResponse);
  console.log("imageUploadResponse", imageUploadResponse);
  // Check for errors in image uploads
  if (avatarUploadResponse.error) {
    console.error(
      "Error uploading avatar:",
      avatarUploadResponse.error.message
    );
    return;
  }

  if (imageUploadResponse.error) {
    console.error("Error uploading image:", imageUploadResponse.error.message);
    return;
  }

  // Attach image URLs to formData
  formData.avatar = avatarUploadResponse.data.path;
  formData.image = imageUploadResponse.data.path;

  // Upload data to Supabase
  const { data, error } = await supabase.from("tools").insert([formData]);

  if (error) {
    console.error("Error uploading to Supabase:", error.message);
  } else {
    console.log("Data uploaded to Supabase:", data);
  }
};

onMounted(async () => {
  // Fetch data from Supabase if needed
  // const { data, error } = await supabase.from('tools').select().eq('category', route.params.name);
  // productList.value = data;
});
</script>
