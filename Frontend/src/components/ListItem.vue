<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router'

let route = useRoute()
let path = route.path

let props =defineProps<{
    text: string,
    page: string
}>()
</script>

<template>
  <li class="items-center flex">
    <RouterLink
      :to="page"
      :class="page===path ? 'text-[#F8A810]' : 'text-white'"
      class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
      aria-current="page"
    >
      {{ text }}
    </RouterLink>
  </li>
</template>