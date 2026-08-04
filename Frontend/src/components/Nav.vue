<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import Logo from './Logo.vue'
    import ListItem from './ListItem.vue'
    
    interface NavPoint {
        url: string,
        text: string
    }
    
    const navPoints:NavPoint[] =[
        {text:"Home",url:"/"},
        {text:"Company",url:"/Company"},
        {text:"Market Place",url:"/MarketPlace"},
        {text:"Contact",url:"/Contact"}
    ]

</script>

<template>
    <nav class="border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto">
            <Logo/>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="hidden lg:flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <ListItem
                        v-for="point in navPoints"
                        :key="point.url"
                        :text="point.text"
                        :page="point.url"
                    />
                    <li class="items-center flex">
                        <RouterLink
                            to="SignUp"
                            aria-current="page"
                        >
                            <button class="bg-[#F8A010] p-3 cursor-pointer text-3xl w-50">
                                <font-awesome-icon icon="fa-solid fa-circle-user" />
                                Sign Up
                            </button>
                        </RouterLink>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>