
<template>
 <div class="loc-details" v-if="loc">
  <h3>{{ loc.name }}</h3>
  <img :src="loc.imgUrl" alt="Location Image" />
  <ul class="label-list">
   <li v-for="label, idx in loc.labels" :key="idx">{{ label }}</li>
  </ul>

  <div>
   <button @click="updateTabs('Notes')">Show Notes</button>
   <button @click="updateTabs('Updates')">Show Updates</button>
   <button @click="updateTabs('Weather')">Show Weather</button>



   <Notes v-if="currentTab === 'Notes'" :info="loc.note" />
   <Updates v-if="currentTab === 'Updates'" :info="loc.updatedAt" />
   <Weather v-if="currentTab === 'Weather'" :info="{ lat: loc.lat, lng: loc.lng }" />



  </div>

 </div>
</template>

<script setup>

//TODO: DYNAMIC CMP
import Updates from '@/components/dynamicCmp/LocUpdates.vue'
import Notes from '@/components/dynamicCmp/LocNotes.vue'
import Weather from '@/components/dynamicCmp/LocWeather.vue'

import { useRoute } from 'vue-router'
import { computed, onBeforeMount, ref, watchEffect } from 'vue'
import { locService } from '@/services/loc.service';


const route = useRoute()
// const tabs = ['Notes', 'Updates', 'Weather',]

onBeforeMount(() => {
 loadLoc()
})

const loc = ref(null)
async function loadLoc() {
 loc.value = await locService.getLocById(route.params.locId)
}

const currentTab = ref('Notes')

// const componentTab = computed(() => currentTab)

watchEffect(() =>
 console.log('currentTab:', currentTab.value)
)

function updateTabs(tab) {
 currentTab.value = tab
}





</script>

<style scoped lang="scss">
.demo {
 font-family: sans-serif;
 border: 1px solid #eee;
 border-radius: 2px;
 padding: 20px 30px;
 margin-top: 1em;
 margin-bottom: 40px;
 user-select: none;
 overflow-x: auto;
}

.tab-button {
 padding: 6px 10px;
 border-top-left-radius: 3px;
 border-top-right-radius: 3px;
 border: 1px solid #ccc;
 cursor: pointer;
 background: #f0f0f0;
 margin-bottom: -1px;
 margin-right: -1px;
}

.tab-button:hover {
 background: #e0e0e0;
}

.tab-button.active {
 background: #e0e0e0;
}

.demo-tab {
 border: 1px solid #ccc;
 padding: 10px;
}
</style>
