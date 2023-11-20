import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { locService } from "@/services/loc.service.js";

export const useLocsStore = defineStore('loc', () => {
  const locs = ref(null)
  const currLoc = ref(null)
  const filterBy = ref({ txt: '', type: [] })

  const getLocs = computed(() => locs.value)

  async function loadLocs() {
    locs.value = await locService.getLocs(filterBy.value)

  }

  function setFilter(filter) {
    filterBy.value = filter
    loadLocs()
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

  return { getLocs, loadLocs, setFilter, addLoc, removeLoc, updateLoc, filterBy }
})
