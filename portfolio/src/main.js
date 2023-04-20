import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
import {scrollAnimate} from './utils/ScrollAnimate'
import {router} from './router'

const root = createApp(App)
root.directive('scrollAnimate', scrollAnimate) 

root
.use(router)
.mount('#app')
