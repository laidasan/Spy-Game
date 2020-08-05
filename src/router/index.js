import Vue from 'vue'
import VueRouter from 'vue-router'
import SpyGame from '../views/SpyGame.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/' , component: SpyGame }
]

const router = new VueRouter({
    routes
})

export default router