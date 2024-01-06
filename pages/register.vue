<template>
  <div class="w-full lg:min-h-screen pt-44 lg:py-20 flex items-center justify-center px-5 xl:px-6">
    <div class="grid mx-auto items-center lg:grid-cols-2 max-w-7xl w-full">
      <div class="w-full hidden lg:block">
        <img src="@/assets/branding/logo.svg" class="w-[75%]" alt="" />
      </div>
      <div class="w-full text-white">
        <div class="text-left uppercase text-2xl text-[#f7ffdd]">
          Crear una cuenta
        </div>
        <div class="mt-10 w-full space-y-2">
          <label class="block text-base uppercase" for="username">Tu nombre de usuario</label>
          <input v-model="username" type="text"
            class="text-[#f7ffdd] bg-[#272727] outline-none py-3 pl-5 rounded-md w-full lowercase text-xl placeholder:text-[#A3A3A3]"
            placeholder="" />
        </div>
        <div class="mt-10 w-full space-y-2">
          <label class="block text-base uppercase" for="email">Tu correo</label>
          <input v-model="email" type="email"
            class="text-[#f7ffdd] bg-[#272727] outline-none py-3 pl-5 rounded-md w-full lowercase text-xl placeholder:text-[#A3A3A3]"
            placeholder="" />
        </div>
        <div class="mt-5 w-full space-y-2">
          <label class="block text-base uppercase" for="password">Tu contraseña</label>
          <input v-model="password" type="password"
            class="text-[#f7ffdd] bg-[#272727] outline-none py-3 pl-5 rounded-md w-full lowercase text-xl placeholder:text-[#A3A3A3]"
            placeholder="" />
        </div>
        <!--                 already have an account -->
        <div class="mt-4 text-lg mx-auto w-fit">
          ¿Ya tienes una cuenta?
          <NuxtLink to="/login" class="text-[#F7FFDD] font-medium">Inicia sesión</NuxtLink>
        </div>

        <div class="flex flex-col items-center mt-10 w-full gap-y-4">
          <button @click="register"
            class="flex items-center py-2 pl-4 text-black pr-5 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]">
            <span class="font-semibold">Registrarse</span>
          </button>

          <button @click="registerGoogle"
            class="flex items-center w-fit py-2 pl-4 text-black pr-5 bg-gradient-to-r gap-x-1 from-[#595CFF] button-gradient-animation rounded-md to-[#F7FFDD]">
            <span class="font-semibold">Registrarse con</span>
            <img src="@/assets/icons/google-colored.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const email = ref("");
const username = ref("");
const password = ref("");
const client = useSupabaseClient();
const router = useRouter();
const register = async () => {
  let { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        username: username.value
      }
    }
  });

  if (error) {
    console.log(error);
  } else {
    console.log(data);
    router.push("/login");
  }
};
const registerGoogle = async () => {
  let { data, error } = await client.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://www.spytools.ai/",
    },
  });
  console.log(data);
};
</script>
<style scoped>
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
