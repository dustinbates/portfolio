import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {scrollAnimate} from './utils/ScrollAnimate'

const root = createApp(App)
root.directive('scrollAnimate', scrollAnimate) 
root
.mount('#app')
