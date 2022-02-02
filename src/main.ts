
/*
=======================================
Bootstrap of Project
=======================================
*/

import { createApp } from 'vue'
import App from './App.vue'
import VuexStore from './store'
import VueRouter from './router'

const app = createApp(App)
app.use(VuexStore)
app.use(VueRouter)
app.mount('#app')
