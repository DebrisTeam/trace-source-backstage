import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login';
import SelectVillage from '@/pages/selectVillage';
//import store from '@/store';

// 村庄管理
import Village from '@/pages/village';
import VillageHome from '@/pages/village/village-home';
import VillageAdd from '@/pages/village/village-add';
import VillageEdit from '@/pages/village/village-edit';
import VillageDetail from '@/pages/village/village-detail';

// 村民管理
import Farmer from '@/pages/farmer';
import FarmerHome from '@/pages/farmer/farmer-home';
import FarmerAdd from '@/pages/farmer/farmer-add';
import FarmerEdit from '@/pages/farmer/farmer-edit';
import FarmerDetail from '@/pages/farmer/farmer-detail';

// 收购管理
import Buy from '@/pages/buy';
import BuyHome from '@/pages/buy/buy-home';
import BuyAdd from '@/pages/buy/add';
import SelectFarmer from '@/pages/buy/add/select-farmer';
import SelectProduct from '@/pages/buy/add/select-product';
import AddSuccess from '@/pages/buy/add/add-success';

// 二维码
import Qrcode from '@/pages/qrcode';
import QrcodeHome from '@/pages/qrcode/qr-home';
import QrcodePriview from '@/pages/qrcode/preview';



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
    path: '/select-village',
    name: 'select-village',
    component: SelectVillage,
  },
  {
    path: '/village',
    component: Village,
    children: [
        { path: '', component: VillageHome },
        { path: 'add', component:  VillageAdd },
        { path: 'edit', name: '/village/edit', component:  VillageEdit },
        { path: 'detail', component:  VillageDetail }
    ]
  },
  {
    path: '/farmer',
    // 当组件有默认自路由的时候用:to="{name: 'farmer'}"这样的命名路由是无法渲染默认子路由的
    // 所以不用设置name，然后改用path的形式才行
    // name: 'farmer',
    component: Farmer,
    children: [
        { path: '', component: FarmerHome },
        { path: 'add', component:  FarmerAdd },
        { path: 'edit', component:  FarmerEdit },
        { path: 'detail', component:  FarmerDetail }
    ]
  },
  {
    path: '/buy',
    component: Buy,
    children: [
        { path: '', component: BuyHome },
        {
            path: 'add',
            component: BuyAdd,
            children: [
                { path: '', component: SelectFarmer },
                { path: 'select-product', component: SelectProduct },
                { path: 'add-success', component: AddSuccess }
            ]
        },
    ]
  },
  {
    path: '/qrcode',
    component: Qrcode,
    children: [
        { path: '', component: QrcodeHome },
        { path: 'preview', component: QrcodePriview },
    ]
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
//	scrollBehavior (to, from, savedPosition) {
//  if (savedPosition) {
//    return savedPosition
//  } else {
//    return {x: 0, y: 0}
//  }
//}
});

export default router;