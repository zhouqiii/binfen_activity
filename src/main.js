import Vue from 'vue';
import ElementUI from 'element-ui';
import { request } from '@/utils/request';
import 'element-ui/lib/theme-chalk/index.css';
import NavBarBase from '@/components/NavBar.vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/index.less';
// 引入自动化引入icons/svg文件夹下所有svg的js文件
import '@/assets/icons';

Vue.prototype.request = request;
// 引入element
Vue.use(ElementUI);
// 组件自己封装的公用组件
Vue.component('nav-bar-base', NavBarBase);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
