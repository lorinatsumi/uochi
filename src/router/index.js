import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Comofunciona from '@/views/comofunciona.vue';
import Duvidas from '@/views/duvidas.vue';
import Quemsomos from '@/views/quemsomos.vue';
import Parceiros from '@/views/parceiros.vue';
import Orcamento from '@/views/orcamento.vue';
import Cadastro from '@/views/cadastro.vue';
import Perfil from '@/views/perfil.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {  }
    },
    {
        path: '/comofunciona',
        name: 'Comofunciona',
        component: Comofunciona,
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
    },
    {
        path: '/orcamento',
        name: 'Orcamento',
        component: Orcamento,
        meta: {  }
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro,
        meta: {  }
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: Perfil,
        meta: {  }
    }
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;
