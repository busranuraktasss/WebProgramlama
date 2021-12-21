import {createRouter, createWebHistory} from 'vue-router'

function loadRoute(component) {
    return import('../views/' + component + '.vue')
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: loadRoute('Index')
    },
    {
        path: '/Products',
        name: 'Products',
        component: loadRoute('Products')
    },
    {
        path: '/Register',
        name: 'Register',
        component: loadRoute('Register')
    },
    {
        path: '/login',
        name: 'Login',
        component: loadRoute('Login')
    },
    {
        path: '/Sepet',
        name: 'Sepet',
        component: loadRoute('Sepet')
    },
    {
        path: '/product/:id',
        name: 'product',
        component: loadRoute('Product')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
