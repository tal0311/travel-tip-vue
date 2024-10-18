<template>
  <div class="app-container main-layout">
    <AppHeader :loggedUser="loggedInUser" />
    <section class="router-view">
      <RouterView />
    </section>
    <UserMsg />

    <AppModal />
  </div>
</template>

<script setup>
import UserMsg from '@/components/UserMsg.vue'
import AppHeader from './components/AppHeader.vue'
import AppModal from './components/modal/AppModal.vue'

import { onBeforeMount, watchEffect, computed } from 'vue'

import { useUserStore } from '@/stores/userStore';
// import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore()

onBeforeMount(() => {
  loadUser()
})

async function loadUser() {
  await userStore.loadUser()
}

const loggedInUser = computed(() => userStore.getLoggedIdUser)

watchEffect(() => {
  console.log('loggedInUser:', loggedInUser?.value)
})

</script>

<style>
@import '@/assets/styles/setup/_variables.scss';



.app-container {
  margin-top: 1rem;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

/* nav.home-nav a.router-link-exact-active {
  color: var(--color-text);
} */

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}


.router-view {
 margin-bottom: 5rem;
}
</style>
