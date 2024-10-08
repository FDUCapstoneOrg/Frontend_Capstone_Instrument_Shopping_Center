import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../views/LoginPage.vue'; 
import ProductList from '../views/ProductList.vue'; 

Vue.use(Router);

// 创建路由实例
const router = new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    }
  ]
});

export default router;
