import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Login.vue')
  },
  // ADMIN
  {
    path: '/admin',
    component: () => import('../layouts/admin.vue'),
    children: [
      {
        path: "",
        component: () => import('../views/Admin/index.vue')
      }
    ]
  },
  // USER
  {
    path: '/user',
    component: () => import('../layouts/user.vue'),
    children: [
      {
        path: "",
        component: () => import('../views/Users/index.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
