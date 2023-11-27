import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { locService } from "@/services/loc.service.js";
import { showSuccessMsg } from '@/services/event-bus.service'
import {updateService} from '@/services/updates.service'
import {useUpdatedStore} from '@/stores/updateStore'


export const useLocsStore = defineStore('loc', () => {
  const updateStore= useUpdatedStore()
  const locs = ref(null)
  const currLoc = ref(null)
  // TODO: change to user location
  const defaultCenter = { lat: 40.689247, lng: -74.044502 }
  const filterBy = ref({ txt: '', type: [], isFav: false })

  const getLocs = computed(() => locs.value)
  const getCurrLoc = computed(() =>
    currLoc.value ? currLoc.value : defaultCenter)

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
    locs.value = locs.value.filter(loc => loc._id !== locId)
    showSuccessMsg('Location removed')
  }

  async function updateLoc({ _id, key, value }) {

    const locToUpdate = await locService.getLocById(_id)

    if(key==='weather'){
      await updateStore.addUpdate(key)
      return
      
    }
    if ( key === 'isFav') {
      locToUpdate[key] = !locToUpdate[key]
      await updateStore.addUpdate('favorite')
    }
    
    if(key==='note') {
      locToUpdate[key] = value
     await updateStore.addUpdate('note')
    }
    const updatedLoc = await locService.save(locToUpdate)
    const idx = locs.value.findIndex(currLoc => currLoc._id === updatedLoc._id)
    locs.value.splice(idx, 1, updatedLoc)

    const updateType= key==='isFav'?'favorite':'note'
     
    showSuccessMsg('Location updated')
    return updatedLoc
  }

  function setCurrLoc(loc) {
    currLoc.value = loc
  }


  return { getLocs, loadLocs, setFilter, addLoc, removeLoc, updateLoc, filterBy, setCurrLoc, getCurrLoc }
})
