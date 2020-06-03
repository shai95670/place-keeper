function getRandomForcast() {
  var forcasts = [
    'Today is going to be a good day',
    'Today will be a moody day',
    'today is going to be a sunny dat',
  ]
  return forcasts[Math.floor(Math.random() * forcasts.length)]
}

function getRandomId(){
  return Math.floor(Math.random() * 100)
}


