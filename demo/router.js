import Vue from 'vue';
import XRouter from '@source/router';

const router = new XRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'about',
    component: () => import('@/views/About.vue')
  }, {
    path: '/bezier',
    name: 'about-bezier',
    component: () => import('@/views/AboutBezier.vue')
  }, {
    path: '/canvas',
    name: 'about-canvas',
    component: () => import('@/views/AboutCanvas.vue')
  }]
});

router.addRoutes([{
  path: '/widgets',
  name: 'about-widgets',
  component: () => import('@/views/AboutWidgets.vue')
}]);

Vue.use(XRouter);

export default router;