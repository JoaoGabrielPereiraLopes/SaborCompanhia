<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import Logo from './Logo.vue'
    import ListItem from './ListItem.vue'
    import { onMounted, ref, type Ref } from 'vue';
    import { api } from '../Services/api.ts';
    const usuario = JSON.parse(localStorage.getItem("usuario")!);
    let validToken=ref(false)
    interface NavPoint {
        url: string,
        text: string
    }
    
    let navPoints:Ref<NavPoint[]> =ref([
        {text:"Home",url:"/"},
        {text:"Company",url:"/Company"},
        {text:"Contact",url:"/Contact"}
    ])
    onMounted(async () => {
    try {
        if(usuario){
            await api.put("/user/auth").then((response)=>{
                validToken.value=true
                console.log(response)
                if(usuario.admin){
                    navPoints.value=[
                        {text:"Dishes",url:"/Dish"},
                        {text:"Employee",url:"/Employee"},
                        {text:"Storage",url:"/Storage"},
                        {text:"Statistics",url:"/Statistics"},
                        {text:"Users",url:"/UsersManage"}
                    ]
                }else{
                    navPoints.value=[{text:"Home",url:"/"},
                        {text:"Company",url:"/Company"},
                        {text:"Market Place",url:"/MarketPlace"},
                        {text:"Contact",url:"/Contact"}
                    ]
                }
            }).catch((error)=>{
                console.error(error)
            });
        }
    } catch (error) {
        console.error(error);
    }
    });
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
                            v-if="!usuario||!validToken"
                        >
                            <button class="bg-[#F8A010] p-3 cursor-pointer text-3xl w-50">
                                <font-awesome-icon icon="fa-solid fa-circle-user" />
                                Sign Up
                            </button>
                        </RouterLink>
                        <RouterLink
                            to="User"
                            aria-current="page"
                            v-else
                        >
                            <button class="flex items-center justify-center gap-2 text-white p-3 cursor-pointer text-3xl">
                                <font-awesome-icon :icon="usuario.admin ? 'fa-solid fa-user-tie' : 'fa-solid fa-user'" class="relative -top-1"/>
                                <span class="relative -top-1">{{ usuario.Name }}</span>
                            </button>
                        </RouterLink>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>