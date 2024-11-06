import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useLocsStore } from '@/stores/locsStore'
import userView from '@/views/UserView.vue'
import LocDetails from '@/views/LocDetails.vue'
import FavoritesView from '@/views/FavoritesView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/loc',
      name: 'locations',
      component: HomeView
    },
    {
      path: '/loc/:locId',
      name: 'location-details',
      component: LocDetails
    },
    {
      path: '/favorites',
      name: 'favorite-locations',
      component: FavoritesView,
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
      path: '/user/:userId',
      name: 'user-details',
      component: userView
      // component: () => import('../views/UserView.vue')
    },
   
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/'
    }
  ]
})

export default router
