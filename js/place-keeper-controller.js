function onLoadMap() {
  initMap()
}

function renderPlaces() {
  if (!localStorage.getItem('places')) return
  var places = loadFromStorage('places')
  var placesHtml = places.map(
    (place) => `
    <li>Name: ${place.name}, Coords:(${place.lat}, ${place.lng}) <button onclick='onDeletePlace(${place.id})'>X</button></li>`,
  )
  var placesListEl = document.querySelector('.places-list')
  placesListEl.innerHTML = placesHtml.join('')
}

function onGetUserLocation() {
  getUserLocation()
}

function onDeletePlace(id) {
  deletePlace(id)
}

