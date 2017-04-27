import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import '@/assets/font/iconfont.css';
import '@/assets/css/base.css';

import store from './store/index';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
	el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

//console.log(store.state)
//if (store.state.userLogin === true) {
//router.push('/');
//} else {
//router.push('/login');
//}
