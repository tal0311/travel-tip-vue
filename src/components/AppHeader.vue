<template>
 <header class="app-header grid">
  <UserPreview :user="user" />
  <div class="nav-container">
   <button class="icon" @click="isOpen = !isOpen" v-html="$getSvg('menu')" data-title="Open menu"></button>
   <nav class="app-nav" v-if="isOpen">
    <ul class="clean-list">
     <li>home</li>
     <li>about</li>
     <li>favorites</li>
     <li>contact</li>
    </ul>
   </nav>
  </div>
 </header>
</template>

<script setup >
import UserPreview from './UserPreview.vue';
import { ref } from 'vue'
const user = ref({ username: 'Tal Amit', email: 'tal.Amit0311@gmail.com', color: 'steelblue' })

const isOpen = ref(false)

</script>

<style lang="scss" scoped>
.app-header {
 grid-auto-flow: column;
 justify-content: space-between;
 margin-bottom: 2rem;
 align-items: center;
}

.app-nav {
 position: absolute;
 transform: translate(-3.5rem, -0.5rem);
 background: #fff;
 box-shadow: 0 0 2px 0px #c9c9c9;
 padding: 0.5rem;


}
</style>