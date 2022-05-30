import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/partners',
        name: 'Partners',
        component: () =>
            import ('@/views/Partners')
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: () =>
            import ('@/views/Catalog')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () =>
            import ('@/views/Blog')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () =>
            import ('@/views/Contacts')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('@/views/About')
    },
    {
        path: '/about/team',
        name: 'Team',
        component: () =>
            import ('@/views/About/sections/Team.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router