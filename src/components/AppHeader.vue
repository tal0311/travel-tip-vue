<template>
 <header>
  <UserPreview :user="user" />
  <div class="nav-container">
   <button>W</button>
   <nav>
    <ul>
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

</script>

<style lang="scss" scoped></style>