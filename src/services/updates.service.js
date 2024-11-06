// import { storageService } from '@/services/async-storage.service'
// import { utilService } from '@/services/util.service'

export const updateService = {
  // getUpdatesByLocationId,
  getUpdateByType,
  createUpdate
}


function createUpdate(type) {
  return {
    type,
    updatedAt: Date.now()
  }
}

function getUpdateByType(type) {
  const opts = {
    weather: 'You have checked the weather for this location at ',
    note: 'You have updated your notes for this location at ',
    favorite: 'you have added this location to your favorites at '
  }
  return opts[type] || ''
}

