import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Contato from '@/views/contato.vue';
import Duvidas from '@/views/duvidas.vue';
import Quemsomos from '@/views/quemsomos.vue';
import Parceiros from '@/views/parceiros.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {  }
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contato,
        meta: {  }
    },
    {
        path: '/duvidas',
        name: 'Duvidas',
        component: Duvidas,
        meta: {  }
    },
    {
        path: '/quemsomos',
        name: 'Quemsomos',
        component: Quemsomos,
        meta: {  }
    },
    {
        path: '/parceiros',
        name: 'Parceiros',
        component: Parceiros,
        meta: {  }
    }
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;
