<template>
 <section class="loc-updates">
  <h2>updates</h2>
  <div v-for="update, idx in props.info.history" :key="idx">

   <p>{{ getUpdateDesc(update.type) }}</p>
   <p>{{ getFormattedTime(update.updatedAt) }}</p>
  </div>
 </section>
</template>

<script setup>
import { computed, onBeforeMount, } from 'vue'
import { updatedService } from '@/services/updates.service';

const props = defineProps({
 info: {
  type: Array
 }
})

function getUpdateDesc(type) {
 return updatedService.getUpdateByType(type)
}

function getFormattedTime(ts) {
 return ts
}


onBeforeMount(() => {
 console.log('props.info:', props.info)

})

</script>

<style></style>