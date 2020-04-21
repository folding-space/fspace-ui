import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home.vue';
import input from '../views/input.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/input',
    name: 'input',
    component: input
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
