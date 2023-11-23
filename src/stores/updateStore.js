import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { updatedService } from "@/services/updates.service";
import {eventBus,showSuccessMsg} from '@/services/event-bus.service'

export const useUpdatedStore = defineStore('update', () => {
  const updatesByLoc= ref(null)
 
 

  const getUpdates = computed(() => updatesByLoc.value)

  async function loadUpdates(locId) {
        updatesByLoc.value = await updatedService.getUpdatesByLocationId(locId)
  }

    async function addUpdate(loc) {
    const addedLoc = await updatedService.addUpdate(loc)
    updatesByLoc.value.push(addedLoc)
    showSuccessMsg('Location removed')
  }

 
  return {addUpdate, loadUpdates, getUpdates}
})
