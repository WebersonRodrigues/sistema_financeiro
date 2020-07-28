// Importar as paginas das rotas.
import Login from '@/views/Login';
import Dashboard from '@/views/Dashboard';
import Titulos from '@/views/Titulos';
import NaturezasLancamento from '@/views/NaturezasLancamento';

const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      title: 'Login',
      meta: {}
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        title: 'Dashboard',
        meta: {
            requeredAuth: true
        }
    },
    {
        path: '/titulos',
        name: 'Titulos',
        component: Titulos,
        title: 'Titulos',
        meta: {
            requeredAuth: true
        }
    },
    {
        path: '/naturezas-lancamento',
        name: 'NaturezaLancamento',
        component: NaturezasLancamento,
        title: 'Natureza de Lançamento',
        meta: {
            requeredAuth: true
        }
    },

  ]

export default routes;