<script setup lang="ts">
import { ref } from "vue";
import Nav from "../components/Nav.vue";
import Bobo from "../assets/Login/Bobo.png"
import Input from "../components/Forms/Input.vue"
import { api } from "../Services/api.ts";
import { useToast } from "vue-toastification";
import { RouterLink } from 'vue-router';
const toast = useToast();
let Email=ref("")
let Password=ref("")
const Login = async () => {
    if(!Email.value||!Password.value){
        
        toast.error("Data is missing")
        return 

    }else{
        try {

            toast.info("loggining...")

            await api.put("/user/login", {
            
                Password:Password.value,
                Email:Email.value
            
            }).then(async (response)=>{

                localStorage.setItem(
                    "usuario",
                    JSON.stringify(response.data.data)
                );
                toast.success(response.data.message);

            }).catch((error)=>{
                
                toast.error(error.response.data.message);

            })

        }catch(e){

            console.error(e)
            toast.error("internal error");

        }
    }
}
</script>

<template>
    <div class="relative flex-1 bg-amber-950 h-screen w-full overflow-hidden">
        <img :src="Bobo" class="absolute inset-0 z-0 w-full h-full object-cover">
        <div class="absolute inset-0 z-10 w-full h-full bg-black/70 backdrop-blur-sm"></div>
        <div class="absolute inset-0 z-20 w-full h-full flex flex-col">
            <Nav/>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="bg-black/30 backdrop-blur-2xl md:w-md rounded-lg md:mt-0  xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Login
                        </h1>
                            <form class="mt-5 flex flex-col gap-5" action="#" @submit.prevent="Login">
                                <div>
                                    <Input
                                        v-model="Email"
                                        labelText="Email"
                                        inputType="email"
                                        inputName="email"
                                        placeholder="Hermenegildo@gmail.com"
                                    />
                                </div>
                                <div>
                                    <Input
                                        v-model="Password"
                                        labelText="Password"
                                        inputType="password"
                                        inputName="Password"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <button type="submit" class="mt-5 cursor-pointer w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#F8A010] backdrop-blur-2xl hover:bg-[#f89f10bd] focus:ring-gray-800">Create an account</button>
                                <p class="text-sm font-light text-gray-400">
                                    Don't have an account?
                                        <RouterLink
                                            to="/Login"
                                            class="font-medium hover:underline text-white ps-2"
                                            aria-current="page"
                                        >
                                            Sing Up
                                        </RouterLink>
                                </p>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>