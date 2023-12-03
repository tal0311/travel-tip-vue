import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useLocsStore } from '@/stores/locsStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'locations',
      component: HomeView
    },
    {
      path: '/loc/:locId',
      name: 'location-details',
      component: () => import('@/views/LocDetails.vue')
    },
    {
      path: '/favorites',
      name: 'favorite-locations',
      component: () => import('@/views/FavoritesView.vue'),
      beforeEnter: async (to, from, next) => {
        const answer = confirm('You are about to enter the Favorite locations area')
        const locsStore = useLocsStore()
        if (answer) {
          await locsStore.setFilter({ isFav: true })
          await locsStore.loadLocs()
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/'
    }
  ]
})

export default router
