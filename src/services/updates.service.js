import {storageService }from '@/services/async-storage.service'
import {utilService} from '@/services/util.service'

export const updatedService={
 getUpdatesByLocationId,
 getUpdateByType
}

const DB_KEY= 'updatesDB'
createUpdates()

async function getUpdatesByLocationId() {
 return await storageService.get(DB_KEY)
 } 

async function addUpdate(updateType) {
  return await storageService.post(DB_KEY, createUpdate(updateType))
}


function createUpdate(type){
 return{
  type,
  updatedAt: Date.now(),
 }
}

function getUpdateByType(type){
    const opts={
        'weather':'You have checked the weather for this location at ',
        'note':'You have updated your notes for this location at ',
        'favorite':'you have added this location to your favorites at '
    }
  return opts[type] || ''
}

function createUpdates() {
    let updates = utilService.loadFromStorage(DB_KEY)
    if (!updates || !updates.length) {
        updates = [
            { locId:'HiXADs', history:[createUpdate('weather'),createUpdate('note') ] },
            { locId:'8lbM7u', history:[createUpdate('note'),createUpdate('note') ] }
        ]
        utilService.saveToStorage(DB_KEY, updates)
    }
    return updates
}