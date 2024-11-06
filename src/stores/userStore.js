
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

 async function updateUser(key, value){
    loggedIdUser.value[key] = value
    console.log(loggedIdUser.value);
    
  loggedIdUser.value=  await userService.update(loggedIdUser.value)
  console.log(loggedIdUser.value);
  
 }

 
 return { loadUser, getLoggedIdUser,updateUser }

});
