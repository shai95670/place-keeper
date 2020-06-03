'use strict'

function changeHomePageStyle() {
  // load the user data from local styorage
  var userData = loadFromStorage('userData')

  // change the page style if user pref savedf in local storage
  if (userData) {
    var bodyEl = document.querySelector('body')
    var headerEl = document.querySelector('.header h1')
    var links = document.querySelectorAll('a')

    bodyEl.style.backgroundColor = userData.bgColor
    headerEl.style.color = userData.txtColor
    changeButtonTextColor(links, userData)
    if (userData.birthDate) renderRandomForcast()
  }
}

function renderRandomForcast() {
  var forcast = getRandomForcast()
  var forcastEl = document.querySelector('.forcast h2')
  forcastEl.innerText = `"${forcast}"`
}

function changeButtonTextColor(links, userData) {
  for (let i = 0; i < links.length; i++) {
    links[i].style.color = userData.txtColor
  }
}
