<template>
 <LocList :locs="locs" header="Favorite locations" />
</template>

<script setup>
import LocList from '../components/LocList.vue';
import { computed, onBeforeMount } from 'vue'
import { useLocsStore } from '@/stores/LocsStore'

const locsStore = useLocsStore();
onBeforeMount(() => {
 loadLocs()
})
const locs = computed(() => locsStore.getLocs)
async function loadLocs() {
 await locsStore.loadLocs();
}


</script>

<style scoped lang="scss"></style>