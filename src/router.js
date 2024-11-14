import { createRouter, createWebHashHistory } from 'vue-router';
import restaurant from './components/restaurant.vue'; // Composant de la page principale

const routes = [
  { path: '/', component: restaurant },
  { path: '/#home', component: restaurant },
  { path: '/#about', component: restaurant },
  { path: '/#gallery', component: restaurant },
  { path: '/#menu', component: restaurant },
  { path: '/#review', component: restaurant },
  { path: '/#order', component: restaurant },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
  },
});

export default router;
