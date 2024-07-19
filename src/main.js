import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './views/HomePage.vue';
import ProductList from './views/ProductList.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductList }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
