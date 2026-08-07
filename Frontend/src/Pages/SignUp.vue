<script setup lang="ts">
import { ref } from "vue";
import Feijoada from "../assets/Login/Feijoada.jpg"
import Nav from "../components/Nav.vue";
import Input from "../components/Forms/Input.vue"
import { api } from "../Services/api.ts";
import { useToast } from "vue-toastification";
import { RouterLink } from 'vue-router';
const toast = useToast();
let Email = ref("");
let Password = ref("");
const Name = ref("");
const PasswordConfirm = ref("");
const SingUp = async () => {

    if(!Email.value||!Password.value||!Name.value||!PasswordConfirm.value){
    
        toast.error("Data is missing");
        return
    
    }else if(Password.value!==PasswordConfirm.value){
    
        toast.error("Data is missing");
        return
    
    }else{
    
        try {
    
            toast.info("creating account...")
            
            await api.post("/user", {
            
                Password:Password.value,
                PasswordConfirm:PasswordConfirm.value,
                Name:Name.value,
                Email:Email.value
            
            }).then( (response) => {
            
                toast.success(response.data.message);
            
            }).catch((error) => {
            
                toast.error(error.response.data.message);
            
            })
        
        } catch (error) {

            console.error(error)
            toast.error("internal error");
        
        }
    }
};
</script>

<template>
    <div class="relative flex-1 h-screen w-full overflow-hidden">
        <img 
        :src="Feijoada" 
        alt=""
        class="absolute inset-0 z-0 w-full h-full object-cover"
        >
        <div class="absolute inset-0 z-10 w-full h-full bg-black/70 backdrop-blur-sm"></div>
        <div class="absolute inset-0 z-20 w-full h-full flex flex-col">
            <Nav/>
            
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="bg-black/30 backdrop-blur-2xl md:w-md rounded-lg md:mt-0  xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                            Create an account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="SingUp">
                                <Input
                                    v-model="Name"
                                    labelText="Name"
                                    inputType="text"
                                    inputName="Name"
                                    placeholder="Hermengildo Zoroastra Lopes"
                                />
                                <Input
                                    v-model="Email"
                                    labelText="Your email"
                                    inputType="email"
                                    inputName="email"
                                    placeholder="Hermenegildo@gmail.com"
                                />
                                <Input
                                    v-model="Password"
                                    labelText="Password"
                                    inputType="password"
                                    inputName="password"
                                    placeholder="••••••••"
                                />
                                <Input
                                    v-model="PasswordConfirm"
                                    labelText="Confirm password"
                                    inputType="password"
                                    inputName="confirm-password"
                                    placeholder="••••••••"
                                />
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                                </div>
                                <div class="ml-3 text-sm text-white">
                                    I accept the terms of data sharing
                                </div>
                            </div>
                            <button type="submit" class="cursor-pointer w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#F8A010] backdrop-blur-2xl hover:bg-[#f89f10bd] focus:ring-gray-800">Create an account</button>
                            <p class="text-sm font-light text-gray-400">
                                Already have an account?
                                <RouterLink
                                    to="/Login"
                                    class="font-medium hover:underline text-white"
                                    aria-current="page"
                                >
                                    Login here
                                </RouterLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>