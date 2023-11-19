
<template>
 <div class="loc-details" v-if="loc">
  <h3>{{ loc.name }}</h3>
  <img :src="loc.imgUrl" alt="Location Image" />
  <ul class="label-list">
   <li v-for="label, idx in loc.labels" :key="idx">{{ label }}</li>
  </ul>
  <!-- <p>{{ loc.note }}</p> -->

  <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
   @click="updateTabs(tab)">
   {{ tab }}
  </button>

  <component :is="currentTab" class="tab" :info="info"></component>
  <!-- <pre>{{ loc }}</pre> -->
 </div>
</template>

<script setup>
import Updates from '@/components/dynamicCmp/LocUpdates.vue'
import Notes from '@/components/dynamicCmp/LocNotes.vue'
import Weather from '@/components/dynamicCmp/LocWeather.vue'

import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { locService } from '@/services/loc.service';
import LocWeatherVue from '@/components/dynamicCmp/LocWeather.vue'

const route = useRoute()
const tabs = ['Notes', 'Updates', 'Weather',]

onBeforeMount(() => {
 loadLoc()
})

const loc = ref(null)
async function loadLoc() {
 loc.value = await locService.getLocById(route.params.locId)
}

const currentTab = ref('Notes')
const info = ref(null)
const currentTabComponent = ref('Notes')
function updateTabs(tab) {

 currentTab.value = tab
 currentTabComponent.value = tab
 if (tab === 'Notes') info.value = loc.value.note
 if (tab === 'Updates') info.value = loc.value.updatedAt
 if (tab === 'Weather') getLocationWeather()
 console.log('info.value:', info.value)
}

function getLocationWeather() {
 console.log('getLocationWeather');

}

</script>

<style scoped lang="scss">
.loc-details {
 /* Your component styles here */
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
</style>
