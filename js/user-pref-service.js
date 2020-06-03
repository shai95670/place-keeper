'use strict'

var gUserData;

function storeUserData(ev){
  ev.preventDefault()
  // get the user data from the inputs
  var txtColorVal = document.querySelector('[name=txt-color]').value
  var bgColorVal = document.querySelector('[name=bg-color]').value
  var birthDateVal = document.querySelector('[name=birth-date]').value
  // create the user data object
  gUserData = _createUserData(txtColorVal, bgColorVal, birthDateVal)
  // save the user data to local storage
  saveToStorage('userData', gUserData)
}

function getUserData() {
  return gUserData  
}

function _createUserData(txtColor, bgColor, birthDate){
  var userData = null
  userData = { txtColor, bgColor, birthDate }
  return userData  
}