/**
 * user location
 * @returns {Promise} position
 */
function position() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

/**
 * lat lag
 * @returns {Promise<{lat,lng}>} position by lat and lng
 */
async function getPosition() {
  try {
    const pos = await position()
    const { latitude, longitude } = pos.coords
    return {
      lat: latitude,
      lng: longitude
    }
  } catch (error) {
    console.info('[could not get position]:', error)
  }
}
// TODO: add google maps search

function getAddressCoords(address) {
  const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='
  const params = `${address}&language=en&key=${API_KEY}`

  return fetch(baseUrl + params)
    .then((response) => response.json())
    .then((res) => res.results[0])
    .then((data) => {
      return {
        pos: {
          lat: data.geometry.location.lat,
          lng: data.geometry.location.lng
        },
        locName: data['address_components'][0]['long_name']
      }
    })
}

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function searchLocations() {
  const card = document.getElementById('pac-card')
  const input = document.getElementById('pac-input')
  const biasInputElement = document.getElementById('use-location-bias')
  const strictBoundsInputElement = document.getElementById('use-strict-bounds')
  const options = {
    fields: ['formatted_address', 'geometry', 'name'],
    strictBounds: false,
    types: ['establishment']
  }

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card)

  const autocomplete = new google.maps.places.Autocomplete(input, options)
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = lat1 * (Math.PI / 180); // Convert latitude to radians
  const φ2 = lat2 * (Math.PI / 180);
  const Δφ = (lat2 - lat1) * (Math.PI / 180);
  const Δλ = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}

function checkProximityWithWatch(targetLat, targetLon) {
  if ("geolocation" in navigator) {
    // Start watching the user's position
    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const distance = calculateDistance(latitude, longitude, targetLat, targetLon);

        console.log(`Current Distance to Target: ${distance} meters`);

        if (distance <= 5) {
          alert('You are within 5 meters of the target location!');
        } else {
          console.log('You are not within 5 meters of the target.');
        }
      },
      (error) => {
        console.error("Error watching position: ", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

// Example usage: Define the target position (latitude and longitude)
const targetLat = 32.0853; // Example latitude (Target location)
const targetLon = 34.7818; // Example longitude (Target location)

// Call the function to start continuously checking proximity to the target position
checkProximityWithWatch(targetLat, targetLon);


export const locationService = {
  getPosition,
  // getAddressCoords,
  // searchLocations
}
