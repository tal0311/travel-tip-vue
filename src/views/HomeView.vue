<template>
  <AppSearch @search="filterLocs" />
  <details ref="mapRef" :title="title" :open="isMapOpen">
    <summary>Map</summary>
    <AppMap @add-location="addPlace" />
  </details>
  <LocList :locs="locs" header="Your locations" @remove-loc="removeLoc" @favorite="toggleFav" @onPenToLoc="penToLoc" />
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useLocsStore } from '@/stores/locsStore'

import AppSearch from '@/components/AppSearch.vue'
import AppMap from '@/components/AppMap.vue'
import LocList from '@/components/LocList.vue'


const locsStore = useLocsStore()
onBeforeMount(() => {
  loadLocs()
})
const locs = computed(() => locsStore.getLocs)
const isMapOpen = ref(false)
async function loadLocs() {
  await locsStore.loadLocs()
}

const title = ref('Tap to open')
const mapRef = ref(null)

function filterLocs(filterBy) {
  locsStore.filterBy = filterBy
  loadLocs()
}

// TODO: add composable for this
onBeforeMount(() => {
  if (window.innerWidth < 600) {
    title.value = 'Tap to open'
  } else {
    title.value = 'Click to open'
  }
})

async function addPlace(locToAdd) {
  await locsStore.addLoc(locToAdd)
}

function removeLoc(LocId) {
  locsStore.removeLoc(LocId)
}

function toggleFav(locId) {
  locsStore.updateLoc({ _id: locId, key: 'isFav', value: null })
}

function penToLoc(loc) {
  scrollTo({ top: 90, behavior: 'smooth' })
  isMapOpen.value = true
  locsStore.setCurrLoc(loc)
}
</script>
<style lang="scss" scoped>
details {
  box-shadow: 0 0 2px 0px #c9c9c9;
  border-radius: 2px;
  padding: 0.5em 0.5em 0;

  summary {
    position: relative;
    font-weight: bold;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
  }

  &[open] {
    padding: 0.5em;
  }

  &[open] summary {
    box-shadow: 0 0 2px 0px #c9c9c9;
    margin-bottom: 0.5em;
  }
}
</style>
