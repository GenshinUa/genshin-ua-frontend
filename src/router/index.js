import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'
import Article from '/src/components/Article.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: Article,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
