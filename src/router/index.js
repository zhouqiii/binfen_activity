import Vue from 'vue';
import VueRouter from 'vue-router';
import Activity from '../views/Activity.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: Activity,
    component: Activity,
  }, {
    path: '/ActivityConfig',
    name: 'ActivityConfig',
    component: () => import(/* webpackChunkName: "activityconfiguration" */ '../views/ActivityConfig.vue'),
  },
  {
    path: '/TinymceText',
    name: 'TinymceText',
    component: () => import(/* webpackChunkName: "activityconfiguration" */ '../views/TinymceText.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
