import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
import {scrollAnimate} from './utils/ScrollAnimate'
import {router} from './router'
import { Carousel, initTE } from "tw-elements"
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

initTE({Carousel});

const root = createApp(App)
root.directive('scrollAnimate', scrollAnimate) 

root
.use(router)
.use(VueSweetalert2)
.mount('#app')
