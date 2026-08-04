import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import router from './Router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

library.add(fas)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Toast)

app.use(router)

app.mount('#app')