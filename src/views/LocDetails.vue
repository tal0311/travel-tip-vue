<template>
  <section class="loc-details grid" v-if="loc">
    <h3 contenteditable="true" @blur="updateInfo">{{ loc.name }}</h3>
    <div class="img-container">
      <img :src="loc.imgUrl" height="400" alt="Location Image" v-defaultImg />
      <LabelList @update-labels="updateLocLabel" :labels="loc.labels" />
    </div>

    <div>
      <div class="tab-list">
        <button v-for="(tab, idx) in tabs" :key="idx" :class="['tab-button', { active: currentTab === tab }]"
          @click="updateTabs(tab)">
          {{ tab }}
        </button>
      </div>

      <div class="dynamic-container">
        <component :is="currentTab" :info="info" @update-info="updateLoc" />
      </div>
    </div>
    <a :href="`https://waze.com/ul?ll=${loc.lat},${loc.lng}&navigate=yes`" target="_blank">
      <button>Navigate to {{ loc.name }}</button>
    </a>
  </section>

  <AppLoader v-else />
</template>

<script setup>
//TODO: DYNAMIC CMP

import AppLoader from '@/components/AppLoader.vue'
import LocUpdates from '@/components/dynamicCmp/LocUpdates.vue'
import LocNotes from '@/components/dynamicCmp/LocNotes.vue'
import LocWeather from '@/components/dynamicCmp/LocWeather.vue'
import LocVids from '@/components/dynamicCmp/LocVids.vue'
import LabelList from '@/components/LabelList.vue'

import { useRoute } from 'vue-router'
import { computed, onBeforeMount, ref, watchEffect } from 'vue'
import { useLocsStore } from '@/stores/locsStore'
import { useUpdatedStore } from '@/stores/updateStore'
import { locService } from '@/services/loc.service'
// import { updateService } from '../services/updates.service'

const locsStore = useLocsStore()
const updatedStore = useUpdatedStore()

const route = useRoute()
const tabs = ['Notes', 'Updates', 'Weather', 'Videos']
const loc = ref(null)
const updates = computed(() => updatedStore.getUpdates)

onBeforeMount(() => {
  loadLoc()
  loadUpdates()

})

watchEffect(() => {
  if (loc.value && !currentTab.value) updateTabs('Notes')
})



async function loadLoc() {
  loc.value = await locService.getLocById(route.params.locId)
}


async function loadUpdates() {
  updateLoc.value = await updatedStore.loadUpdates(route.params.locId)
}

const currentTab = ref(null)
const info = ref(null)

function updateTabs(tab) {

  switch (tab) {
    case 'Notes':
      currentTab.value = LocNotes
      info.value = loc.value.note
      break
    case 'Updates':
      currentTab.value = LocUpdates
      info.value = updates.value
      break
    case 'Weather':
      currentTab.value = LocWeather
      info.value = { lat: loc.value.lat, lng: loc.value.lng }
      break
    case 'Videos':
      currentTab.value = LocVids
      info.value = loc.value.vids
      break
  }
}

async function updateLoc({ key, value }) {
  const locToUpdate = {
    _id: loc.value._id,
    key,
    value
  }

  if (key === 'weather') {
    await updatedStore.addUpdate(locToUpdate)
    return
  }

  loc.value = await locsStore.updateLoc(locToUpdate)
}

async function updateLocLabel(label) {
  const locToUpdate = {
    _id: loc.value._id,
    label
  }
  loc.value = await locsStore.updateLocLabel(locToUpdate)
}

function updateInfo(ev) {
  ev.target.innerText
  updateLoc({ key: 'name', value: ev.target.innerText })
}





</script>

<style scoped lang="scss">
.loc-details {
  position: relative;
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

.dynamic-container {
  min-height: 150px;
  border: 1px solid lightgray;
  padding: 0.5rem;
}
</style>
