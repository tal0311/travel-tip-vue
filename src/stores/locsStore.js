import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { locService } from "@/services/loc.service.js";
import {eventBus,showSuccessMsg} from '@/services/event-bus.service'

export const useLocsStore = defineStore('loc', () => {
  const locs = ref(null)
  const currLoc = ref(null)
  const filterBy = ref({ txt: '', type: [], isFav:false })

  const getLocs = computed(() => locs.value)

  async function loadLocs() {
    locs.value = await locService.getLocs(filterBy.value)
  }

  function setFilter(filter) {
    filterBy.value = {...filterBy.value,...filter}
    console.debug('♠️ ~ file: locsStore.js:20 ~ setFilter ~ filterBy.value:', filterBy.value)
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

  async function updateLoc({_id, key, value}) {
    const locToUpdate = await locService.getLocById(_id)
    
    if(!value){
      locToUpdate[key] = !locToUpdate[key]
    }else{
      locToUpdate[key] = value
    }
      const updatedLoc = await locService.save(locToUpdate)    
    const idx = locs.value.findIndex(currLoc => currLoc._id === updatedLoc._id)
    locs.value.splice(idx, 1, updatedLoc)
    showSuccessMsg('Location updated')
    return updatedLoc
  }

 
  return { getLocs, loadLocs, setFilter, addLoc, removeLoc, updateLoc, filterBy }
})
