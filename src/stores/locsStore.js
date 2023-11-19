import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { locService } from "@/services/loc.service.js";

export const useLocsStore = defineStore('loc', () => {
  const locs = ref(null)

  const getLocs = computed(() => locs.value)

  async function loadLocs() {
    locs.value = await locService.getLocs()
    console.log('locs.value:', locs.value)
  }

  return { getLocs, loadLocs }
})
