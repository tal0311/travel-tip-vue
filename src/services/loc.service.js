import { utilService } from "./util.service.js"
import { storageService } from "./async-storage.service.js"

export const locService = {
    getLocs,
    addLoc,
    removeLoc,
    getLocById,
    updateLoc,
    createLoc

}

const LOCS_KEY = 'locationsDB'
createLocations()




async function getLocs() {
    return await storageService.query('location')
}

async function addLoc(loc) {
    return await storageService.post('location', loc)
}

async function removeLoc(locId) {
    return await storageService.remove('location', locId)
}

async function getLocById(locId) {
    return await storageService.get('location', locId)
}

async function updateLoc(loc) {
    return await storageService.put('location', loc)
}

function createLoc(name, lat, lng, weather, createdAt, updatedAt) {
    return {
        name,
        lat,
        lng,
        weather,
        createdAt,
        updatedAt
    }
}




function createLocations() {
    let locations = utilService.loadFromStorage(LOCS_KEY)
    if (!locations || !locations.length) {
        locations = [
            { name: 'Greatplace', lat: 32.047104, lng: 34.832384 },
            { name: 'Neveragain', lat: 32.047201, lng: 34.832581 }
        ]
        utilService.saveToStorage(LOCS_KEY, locations)
    }
    return locations
}



