<script setup lang="ts">
const props = defineProps<{
    for:string,
    labelText: string,
    inputType: string,
    inputName: string,
    placeholder: string
}>()
</script>
<template>
    <label 
    :for="for" 
    class="block mb-2 text-sm font-medium  text-white">{{labelText}}</label>
    <input 
    :type="inputType" 
    :name="inputName" 
    :id="inputName" 
    class="text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
    :placeholder="placeholder">
</template>
