'use strict'

var gMap
var gPlaces = []

function initMap() {
  // The location of eilat
  var eilat = _createPlace(29.6236414, 34.9286667, 'eilat')

  var options = { zoom: 10, center: eilat }

  // The map, centered at Eilat
  gMap = new google.maps.Map(document.querySelector('.map'), options)
  // The marker, positioned at Eilat
  new google.maps.Marker({ position: eilat, map: gMap })

  gMap.addListener('click', (mapsMouseEvent) => {
    var userName = prompt('>Please enter your name:')
    if(!userName) return
    var lat = mapsMouseEvent.latLng.lat().toString()
    var lng = mapsMouseEvent.latLng.lng().toString()
    var clickedPlace = _createPlace(+lat, +lng, userName)
    gPlaces.push(clickedPlace)
    saveToStorage('places', gPlaces)
    renderPlaces()
  })
  renderPlaces()
}

function addPlace(place) {
  gPlaces.push(place)
}

function _createPlace(lat, lng, name) {
  var place = null
  place = { id: getRandomId(), lat, lng, name }
  return place
}

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setMapCenter)
  } else {
    console.log('Geolocation is not supported by this browser.')
  }
}

function setMapCenter(position) {
  var place = _createPlace(
    position.coords.latitude,
    position.coords.longitude,
    'home',
  )
  var latLngCoords = new google.maps.LatLng(place.lat, place.lng)
  gMap.setZoom(15)
  gMap.setCenter(latLngCoords)
}

function deletePlace(id) {
  var placeIdx = gPlaces.findIndex((place) => place.id === id)
  gPlaces.splice(placeIdx, 1)
  saveToStorage('places', gPlaces)
  renderPlaces()
}
