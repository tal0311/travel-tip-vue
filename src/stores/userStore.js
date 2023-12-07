
import { defineStore} from 'pinia';
import { ref, computed } from 'vue';
import { userService } from '@/services/user.service.js';

export const useUserStore = defineStore('user', () =>{
 const loggedIdUser = ref(null)
 const userLocation = ref(null)
 
 const getLoggedIdUser = computed(() => loggedIdUser.value)

 async function loadUser() {
  loggedIdUser.value = await userService.getLoggedInUser()
  console.debug('♠️ ~ file: userStore.js:14 ~ loadUser ~ value:',loggedIdUser.value)
  
 } 

 
 return { loadUser, getLoggedIdUser }

});
