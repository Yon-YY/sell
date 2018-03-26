import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';
import seller from '../components/seller/seller';

import '../common/stylus/index.styl';

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  routes: [
    {path: '/', redirect: '/goods'},
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ],
  // 修改vue自带的当前样式名
  linkActiveClass: 'tab-active'
});
