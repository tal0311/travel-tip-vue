import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { updateService } from "@/services/updates.service";
import { showSuccessMsg } from '@/services/event-bus.service'

export const useUpdatedStore = defineStore('update', () => {
  const updatesByLoc = ref(null)
  

  const getUpdates = computed(() => updatesByLoc.value?.history)

  async function loadUpdates(locId) {
    updatesByLoc.value = await updateService.getUpdatesByLocationId(locId)
     }

  async function addUpdate(type) {
    const updated = await updateService.addUpdate(type, updatesByLoc.value._id)
    console.debug('♠️ ~ file: updateStore.js:23 ~ addUpdate ~ updated:', updated)
    updatesByLoc.value.history.push(updated)
  }




  return { addUpdate, loadUpdates, getUpdates }
})
