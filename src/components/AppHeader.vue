<template>
  <header class="app-header grid" v-if="props.loggedUser">
    <UserPreview :user="props.loggedUser" />
    <div class="nav-container">
      <button class="icon right" @click="isOpen = !isOpen" v-html="$getSvg('menu')" data-title="Open menu"></button>
      <nav class="app-nav" v-if="isOpen">
        <ul class="clean-list">
          <li v-for="(route, idx) in routes" :key="idx">
            <RouterLink :to="route.path" @click="isOpen = false">
              {{ route.path === '/' ? 'Home' : getRouteName(route.path.slice(1)) }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import UserPreview from './UserPreview.vue'
import { ref, watchEffect } from 'vue'
const user = ref({ username: 'Tal Amit', email: 'tal.Amit0311@gmail.com', color: 'steelblue' })

const isOpen = ref(false)
const routes = [{ path: '/' }, { path: '/about' }, { path: '/favorites' }, { path: '/contact' }]

const props = defineProps({
  loggedUser: {
    type: Object
  }
})

watchEffect(() => {
  console.log('app header:', props.loggedUser)
})

function getRouteName(path) {
  return path
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}
</script>

<style lang="scss" scoped>
.app-header {
  grid-auto-flow: column;
  justify-content: space-between;
  
  align-items: center;
}

.app-nav {
  position: absolute;
  transform: translate(-5.5rem, -0.5rem);
  background: #fff;
  box-shadow: 0 0 2px 0px #c9c9c9;
  padding: 0.5rem;
  z-index: 10;
}
</style>
