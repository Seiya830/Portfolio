import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import ContactView from '../views/ContactView.vue'
import ContactConfirm from '../components/ContactConfirm.vue'
import ContactComplete from '../components/ContactComplete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/components/ContactConfirm.vue',
      name: 'contact-form-confirm',
      component: ContactConfirm,
      props: true,
    },
    {
      path: '/components/ContactComplete.vue',
      name: 'contact-form-complete',
      component: ContactComplete,
    },
  ]
})

export default router
