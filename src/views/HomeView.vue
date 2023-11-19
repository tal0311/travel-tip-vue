

<template>
  <AppSearch />
  <AppMap />
  <LocList :locs="locs" />
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";
import { computed, onBeforeMount } from 'vue'
import { useLocsStore } from '@/stores/LocsStore'
import AppSearch from "@/components/AppSearch.vue";
import AppMap from "@/components/AppMap.vue";
import LocList from "@/components/LocList.vue";

const LocsStore = useLocsStore();
onBeforeMount(() => {
  loadLocs()
})

async function loadLocs() {
  await LocsStore.loadLocs();
}

const locs = computed(() => LocsStore.getLocs)



</script>