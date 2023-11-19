import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { locService } from "@/services/loc.service.js";

export const useLocsStore = defineStore('loc', () => {
  const locs = ref(null)
  const currLoc = ref(null)
  const filterBy = ref({txt:'', label:''})

  const getLocs = computed(() => locs.value)

  async function loadLocs() {
    locs.value = await locService.getLocs()
    
  }

  async function addLoc(loc) {
    const addedLoc = await locService.addLoc(loc)
    locs.value.push(addedLoc)
  }

  async function removeLoc(locId) {
    await locService.deleteLoc(locId)
    locs.value = locs.value.filter(loc => loc._id !== locId)
  }

  async function updateLoc(loc) {
    const updatedLoc = await locService.updateLoc(loc)
    const idx = locs.value.findIndex(currLoc => currLoc._id === updatedLoc._id)
    locs.value.splice(idx, 1, updatedLoc)
  }

  return { getLocs, loadLocs }
})
