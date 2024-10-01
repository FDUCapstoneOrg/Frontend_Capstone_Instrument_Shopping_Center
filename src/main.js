import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import locale from 'element-ui/lib/locale/lang/en';  // 引入 Element 的英文语言包
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false

Vue.use(VueI18n);
Vue.use(ElementUI, { locale });
Vue.use(ElementUI);

// set base URL
axios.defaults.baseURL = 'http://localhost';

// use this.$axios
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


