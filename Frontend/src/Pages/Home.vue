<script setup lang="ts">
import Nav from '../components/Nav.vue'
import BgImage from '../assets/LadingPage/Aimpim.jpg'
import AcarajeImage from '../assets/LadingPage/Acaraje.png'
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cove bg-center bg-cover"
      id="bg-image"
      :style="{ backgroundImage: `url(${BgImage})` }"
    ></div>

    <!-- Overlay escuro -->
    <div class="absolute inset-0 bg-black/80"></div>

    <!-- Conteúdo -->
    <div class="flex flex-col relative z-10 h-screen">
      <Nav />
      <div class="flex flex-1 flex-row justify-between items-center px-30 py-28">
        <div class="flex flex-col gap-20 flex-1 items-center">
          <p class=" text-white text-5xl text-center">
            Enjoy this delicous restaurant
          </p>
          <p class="text-white text-2xl mx-15">
            We made a delicious dish, where we use the brazilian seasoning. We have dishes from the brazilian culture, where the slaves and Indigenous people make your culture in the country of diversity.
          </p>
          <button class="bg-[#F8A010] p-3 w-60 m-auto cursor-pointer text-3xl w-50">
            <font-awesome-icon icon="fa-solid fa-circle-user" />
            Login
          </button>
        </div>
        <img :src="AcarajeImage" class="hidden lg:block md:w-xl h-xl" />
      </div>
    </div>
  </div>
</template>
<style>
#bg-image {
  filter: blur(5px);
}
</style>