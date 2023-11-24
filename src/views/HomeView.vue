

<template>
  <AppSearch @search="filterLocs" />
  <details :title="title">
    <summary>Map</summary>
    <AppMap @add-location="addPlace" />
  </details>
  <LocList :locs="locs" header="Your locations" @remove-loc="removeLoc" @favorite="toggleFav" @onPenToLoc="penToLoc" />
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";
import { computed, onBeforeMount, ref } from 'vue'
import { useLocsStore } from '@/stores/locsStore'
import AppSearch from "@/components/AppSearch.vue";
import AppMap from "@/components/AppMap.vue";
import LocList from "@/components/LocList.vue";

const locsStore = useLocsStore();
onBeforeMount(() => {
  loadLocs()
})
const locs = computed(() => locsStore.getLocs)
async function loadLocs() {
  await locsStore.loadLocs();
}

const title = ref('Tap to open')

function filterLocs(filterBy) {
  locsStore.filterBy = filterBy
  loadLocs()
}

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