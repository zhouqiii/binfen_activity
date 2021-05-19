import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Activity',
    name: 'Activity',
    component: () => import(/* webpackChunkName: "activity" */ '../views/Activity.vue'),
  }, {
    path: '/ActivityConfig',
    name: 'ActivityConfig',
    component: () => import(/* webpackChunkName: "activityconfiguration" */ '../views/ActivityConfig.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
