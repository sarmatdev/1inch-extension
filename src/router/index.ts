import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

function guardMyroute(to, from, next) {
  const isAuth = store.getters['auth/isAuth']
  if (isAuth) {
    next() // allow to enter route
  } else {
    next('/welcome') // go to '/login';
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/swap'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/swap'
  },
  {
    path: '/swap',
    name: 'Swap',
    component: () => import('../views/swap/Swap.vue'),
    beforeEnter: guardMyroute
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/create-wallet',
    name: 'CreateWallet',
    component: () => import('../views/wallet/CreateWallet.vue')
  },
  {
    path: '/import-wallet',
    name: 'ImportWallet',
    component: () => import('../views/wallet/ImportWallet.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   const isAuth = store.getters['auth/isAuth']
//   // @ts-ignore
//   console.log(store.state.auth.isAuth, isAuth)
//   // if (to.matched.some((record) => record.meta.requiresAuth)) {
//   //   if (!isAuth) {
//   //     next('/welcome')
//   //   }
//   // } else {
//   //   next()
//   // }

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isAuth) {
//       next('/welcome')
//     }
//   } else {
//     next()
//   }
// })

export default router
