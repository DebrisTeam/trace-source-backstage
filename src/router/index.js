import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login';
import store from '@/store';
import Farmer from '@/pages/farmer';
import Product from '@/pages/product';


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
    },
  },
  {
    path: '/login',
    name: 'login',
    components: {
      fullView: Login,
    },
  },
  {
    path: '/farmer',
    name: 'farmer',
    component: Farmer,
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
  },
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '*',
    name: 'notPage',
    components: {
      fullView: require('@/pages/error/404')
    }
  },
]

const router = new Router({
	routes,
	mode: 'hash',
	scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
});

export default router;