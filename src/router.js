import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Proyecto from './components/Proyecto.vue'
import ProyectoDetalle from './components/ProyectoDetalle.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/proyectos',
            component: Proyecto
        },
        {
            path: '/proyecto/:slug',
            component: ProyectoDetalle
        }
    ]
})