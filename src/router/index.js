import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Comofunciona from '@/views/comofunciona.vue';
import Duvidas from '@/views/duvidas.vue';
import Quemsomos from '@/views/quemsomos.vue';
import Parceiros from '@/views/parceiros.vue';
import Agendamento from '@/views/agendar.vue';
import Cadastro from '@/views/cadastro.vue';
import Perfil from '@/views/perfil.vue';
import Profissionais from '@/views/profissionais.vue';
import Termos from '@/views/termos.vue';
import Pagamento from '@/views/pagamento.vue';
import MeusAgendamentos from '@/views/meusagendamentos.vue';


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
        path: '/agendar',
        name: 'Agendamento',
        component: Agendamento,
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
    },
    {
        path: '/profissionais',
        name: 'Profissionais',
        component: Profissionais,
        meta: {  }
    },
    {
        path: '/termos',
        name: 'Termos',
        component: Termos,
        meta: {  }
    },
    { 
        path: '/pagamento',
        name: 'Pagamento',
        component: Pagamento,
        meta: {  }
    },
    { 
        path: '/meusagendamentos',
        name: 'MeusAgendamentos',
        component: MeusAgendamentos,
        meta: {  }
    }    
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;
