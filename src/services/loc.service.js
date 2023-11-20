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




async function getLocs(filterBy) {
    console.log('filter', filterBy);
    let locs = await storageService.query(LOCS_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        locs = locs.filter(loc => regex.test(loc.name))
    }
    if (filterBy.type && filterBy.type.length) {
        locs = locs.filter(loc => loc.labels.some(label => filterBy.type.includes(label)))
    }
    return locs
}

async function addLoc(loc) {
    if (loc._id) return await storageService.put(LOCS_KEY, loc)
    else return await storageService.post(LOCS_KEY, loc)
}

async function removeLoc(locId) {
    return await storageService.remove(LOCS_KEY, locId)
}

async function getLocById(locId) {
    return await storageService.get(LOCS_KEY, locId)
}

async function updateLoc(loc) {
    return await storageService.put(LOCS_KEY, loc)
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
            {
                _id: utilService.makeId(),
                name: 'Greatplace',
                lat: 32.047104,
                lng: 34.832384,
                photo: null,
                note: 'demo data for note',
                createdAt: Date.now(),
                updatedAt: null,
                imgUrl: 'https://source.unsplash.com/random/400x400?river',
                labels: ['forest', 'hiking']
            },
            {
                _id: utilService.makeId(),
                name: 'Neveragain',
                lat: 32.047201,
                lng: 34.832581,
                photo: null,
                note: 'demo data for note',
                createdAt: Date.now(),
                updatedAt: null,
                imgUrl: 'https://source.unsplash.com/random/400x400?forest',
                labels: ['beach', 'hiking']
            }
        ]
        utilService.saveToStorage(LOCS_KEY, locations)
    }
    return locations
}



