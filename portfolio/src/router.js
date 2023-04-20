import { createRouter, createWebHashHistory } from 'vue-router'


function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'App',
    component: loadPage('App')
  },
  {
    path: '/About',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: loadPage('ProjectsPage')
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: loadPage('ResumePage')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: loadPage('ContactPage')
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
