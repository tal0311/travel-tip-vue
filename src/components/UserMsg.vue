


<template>
 <div class="user-msg" :class="msg.type" v-if="msg">
  <span>
   {{ msg.txt }}
  </span>
  <i @click="msg = null" class="btn material-symbols-outlined">
   close
  </i>
 </div>
</template>

<script setup>
import { eventBus } from '@/services/event-bus.service.js'
import { computed, onUnmounted, ref, onBeforeMount } from 'vue'

const msg = ref(null)
const unsubscribe = ref(null)
onBeforeMount(() => {
 unsubscribe.value = eventBus.on('show-msg', handleMsg)
})


function handleMsg(userMsg) {
 console.log('msg:', userMsg)
 msg.value = userMsg

 setTimeout(() => {
  msg.value = null
 }, 5000)

}



onUnmounted(() => {
 unsubscribe.value()
})

</script>

<style></style>