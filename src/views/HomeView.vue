

<template>
  <AppSearch @search="filterLocs" />
  <AppMap @add-location="addPlace" />
  <LocList :locs="locs" />
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";
import { computed, onBeforeMount, ref } from 'vue'
import { useLocsStore } from '@/stores/LocsStore'
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

function filterLocs(filterBy) {
  locsStore.filterBy = filterBy
  loadLocs()
}

async function addPlace(locToAdd) {
  console.log('locToAdd:', locsStore)
  await locsStore.addLoc(locToAdd)
}






</script>