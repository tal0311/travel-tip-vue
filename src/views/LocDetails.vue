
<template>
 <div class="loc-details" v-if="loc">
  <h1>loc details works</h1>
  <pre>{{ loc }}</pre>
 </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { locService } from '../services/loc.service';

const route = useRoute()

onBeforeMount(() => {
 loadLoc()
})

const loc = ref(null)
async function loadLoc() {
 console.log(route.params.locId)
 loc.value = await locService.getLocById(route.params.locId)

}
</script>

<style scoped>
.loc-details {
 /* Your component styles here */
}
</style>
