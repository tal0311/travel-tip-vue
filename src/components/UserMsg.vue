


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
import { computed, onUnmounted, ref } from 'vue'

const msg = ref('')

const unsubscribe = eventBus.on('show-msg', (msg) => {
 msg.value = msg
 setTimeout(() => {
  state.msg = null
 }, 5000)
})

onUnmounted(() => {
 unsubscribe()
})

</script>

<style></style>