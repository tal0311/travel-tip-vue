
<template>
 <div class="loc-details" v-if="loc">
  <h3 contenteditable="true" @blur="updateInfo">{{ loc.name }}</h3>
  <img :src="loc.imgUrl" height="400" alt="Location Image" />

  <LabelList :labels="loc.labels" />
  <div>
   <div class="tab-list">

    <button v-for="tab, idx in tabs" :key="idx" :class="['tab-button', { active: currentTab === tab }]"
     @click="updateTabs(tab)">Show {{ tab }}</button>
   </div>


   <div class="dynamic-container">
    <Notes v-if="currentTab === 'Notes'" @update-info="updateLoc" :info="loc.note" />
    <Updates v-if="currentTab === 'Updates'" :info="LocUpdates" @update-info="updateLoc" />
    <Weather v-if="currentTab === 'Weather'" :info="{ lat: loc.lat, lng: loc.lng }" />
   </div>


  </div>

 </div>
</template>

<script setup>

//TODO: DYNAMIC CMP
import Updates from '@/components/dynamicCmp/LocUpdates.vue'
import Notes from '@/components/dynamicCmp/LocNotes.vue'
import Weather from '@/components/dynamicCmp/LocWeather.vue'
import LabelList from '@/components/LabelList.vue'

import { useRoute } from 'vue-router'
import { computed, onBeforeMount, ref, watchEffect } from 'vue'
import { useLocsStore } from '@/stores/locsStore'
import { useUpdatedStore } from '@/stores/UpdateStore'
import { locService } from '@/services/loc.service';

const locsStore = useLocsStore()
const updatedStore = useUpdatedStore()

const route = useRoute()
const tabs = ['Notes', 'Updates', 'Weather',]

onBeforeMount(() => {
 loadLoc()
 loadUpdates()
})

const loc = ref(null)
async function loadLoc() {
 loc.value = await locService.getLocById(route.params.locId)
}


const LocUpdates = computed(() => updatedStore.getUpdates?.history)
async function loadUpdates() {
 updateLoc.value = await updatedStore.loadUpdates(route.params.locId)
}

const currentTab = ref('Notes')

// const componentTab = computed(() => currentTab)

watchEffect(() =>
 console.log('currentTab:', currentTab.value),
 console.log('updates:', LocUpdates.value)
)

function updateTabs(tab) {
 currentTab.value = tab
}

async function updateLoc({ key, value }) {
 const locToUpdate = {
  _id: loc.value._id,
  key,
  value,
 }

 loc.value = await locsStore.updateLoc(locToUpdate)
}

function updateInfo(ev) {
 ev.target.innerText
 console.log('text:', ev.target.innerText)
 // emit('update-Info', { key: 'name', value: ev.target.innerText })

 updateLoc({ key: 'name', value: ev.target.innerText })
}




</script>

<style scoped lang="scss">
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

.dynamic-container {
 border: 1px solid lightgray;
 padding: 0.5rem;
}
</style>
