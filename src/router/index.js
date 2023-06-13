import { createRouter, createWebHistory } from 'vue-router'
import Login from "../components/Login.vue"
import About from "../views/AboutView.vue"
import Next from "../views/Next.vue"
import SummaryPage from "../views/SummaryPage.vue"



const routes = [
  {
    path: '/',
    name: 'home',
    component: Login

  },

  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/next',
    name: 'next',
    component: Next
  },

  {
    path: '/summary',
    name: 'summaryPage',
    component: SummaryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
