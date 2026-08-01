<script setup lang="ts">
import Feijoada from "../assets/Login/Feijoada.jpg"
import Nav from "../components/Nav.vue";
import Login from "../components/Forms/Input.vue"
</script>

<template>
    <div class="relative flex-1 bg-amber-950 h-screen w-full overflow-hidden">
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
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <Login
                                    labelText="Name"
                                    inputType="text"
                                    inputName="Name"
                                    placeholder="Hermengildo Zoroastra Lopes"
                                />
                            </div>
                            <div>
                                <Login
                                labelText="Your email"
                                inputType="email"
                                inputName="email"
                                placeholder="Hermenegildo@gmail.com"
                            />
                            </div>
                            <div>
                                <Login
                                    labelText="Password"
                                    inputType="password"
                                    inputName="password"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div>
                                <Login
                                    labelText="Confirm password"
                                    inputType="password"
                                    inputName="confirm-password"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                                </div>
                                <div class="ml-3 text-sm">
                                </div>
                            </div>
                            <button type="submit" class="cursor-pointer w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-white/20 backdrop-blur-2xl hover:bg-white/30 focus:ring-gray-800">Create an account</button>
                            <p class="text-sm font-light text-gray-400">
                                Already have an account? <a href="#" class="font-medium hover:underline text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>