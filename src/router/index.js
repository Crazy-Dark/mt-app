import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/layout/default.vue'
import Index from '@/page/index.vue'
import changeCity from '@/page/changeCity.vue'
import goodList from '@/page/goodList.vue'
import login from '@/page/login.vue'
import register from '@/page/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: Index,
    }, {
      path: '/city',
      name: 'changeCity',
      component: changeCity,
    },{
      path: 's/:name',
      name: 'goods',
      component: goodList,
    }]
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: () => import('@/layout/blank.vue'),
    children: [{
      path: 'login',
      name: 'login',
      component: login
    }, {
      path: 'register',
      name: 'register',
      component: register
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
