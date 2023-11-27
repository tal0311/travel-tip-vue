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
      // component:locDetails
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
