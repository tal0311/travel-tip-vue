import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { locService } from '@/services/loc.service.js'
import { showSuccessMsg } from '@/services/event-bus.service'
// import { updateService } from '@/services/updates.service'
// import { useUpdatedStore } from '@/stores/updateStore'

export const useLocsStore = defineStore('loc', () => {
  // const updateStore = useUpdatedStore()
  const locs = ref(null)
  const currLoc = ref(null)
  // TODO: change to user location
  const defaultCenter = { lat: 40.689247, lng: -74.044502 }
  const filterBy = ref({ txt: '', type: [], isFav: false })

  const getLocs = computed(() => locs.value)
  const getCurrLoc = computed(() => (currLoc.value ? currLoc.value : defaultCenter))

  async function loadLocs() {
    locs.value = await locService.getLocs(filterBy.value)
  }

  function setFilter(filter) {
    filterBy.value = { ...filterBy.value, ...filter }
  }

  async function addLoc(loc) {
    const addedLoc = await locService.save(loc)
    locs.value.push(addedLoc)
    showSuccessMsg('Location Added')
  }

  async function removeLoc(locId) {
    await locService.removeLoc(locId)
    locs.value = locs.value.filter((loc) => loc._id !== locId)
    showSuccessMsg('Location removed')
  }

  async function updateLoc({ _id, key, value }) {

    const idx = locs.value.findIndex((loc) => loc._id === _id)

    let locToUpdate = locs.value[idx]
    if (key === 'weather') {
      // await updateStore.addUpdate(key)

    }
    if (key === 'isFav') {
      locToUpdate[key] = !locToUpdate[key]
      // await updateStore.addUpdate('favorite')
    }

    if (key === 'note') {
      locToUpdate[key] = value
      // await updateStore.addUpdate('note')
    }
    locs.value[idx] = await locService.save(locToUpdate, key)

    showSuccessMsg('Location updated')

    
    return locs.value[idx] 



  }

  async function updateLocLabel({ _id: locId, label }) {
    const locToUpdate = await locService.updateLocLabel(locId, label)
    const idx = locs.value.findIndex((currLoc) => currLoc._id === locToUpdate._id)
    locs.value.splice(idx, 1, locToUpdate)
    showSuccessMsg('Label updated')
    return locToUpdate

  }

  function setCurrLoc(loc) {
    currLoc.value = loc
  }

  return {
    getLocs,
    loadLocs,
    setFilter,
    addLoc,
    removeLoc,
    updateLoc,
    filterBy,
    setCurrLoc,
    getCurrLoc,
    updateLocLabel
  }
})
