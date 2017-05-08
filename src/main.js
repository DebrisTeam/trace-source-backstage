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
  render: h => h(App)
//template: '<App/>',
//components: { App }
})
