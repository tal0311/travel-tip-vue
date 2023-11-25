<template>
 <section class="loc-updates">
  <h2>Updates</h2>
  <div v-for="update, idx in props.info" :key="idx">

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

</script>

<style></style>