import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './views/LandingPage.vue';
import AboutPage from './views/AboutPage.vue';
import UserPage from './views/UserPage.vue';
import RafRamenMenu from './components/RafRamenMenu.vue';


const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path:'/user/:id',
        name: 'UserDetail',
        component: UserPage
    },
    {
        path: '/menu',
        name: 'Menu',
        component: RafRamenMenu
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;