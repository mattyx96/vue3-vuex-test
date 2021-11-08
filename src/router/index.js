import {createRouter, createWebHistory} from 'vue-router';
// import {useStore} from "vuex";
// const store = useStore();

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('../pages/Welcome')
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/Login')
    },
    {
        path: '/customer',
        name: 'Customer',
        component: () => import('../pages/customer/index'),
        redirect: { name: 'Dashboard' },
        children: [
            // UserHome will be rendered inside User's <router-view>
            // when /user/:id is matched
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('../pages/customer/Dashboard')
            },
            {
                path: 'settings',
                name: 'Settings',
                component: () => import('../pages/customer/Settings')
            },
        ]
    },
    { path: "/:pathMatch(.*)*", component: () => import('../pages/404') }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

//Guard
/*router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && store.state.isAuthenticated) next({ name: 'Login' })
    else next()
})*/

export default router
