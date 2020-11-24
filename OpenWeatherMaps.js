const fetch = require('node-fetch')

const APPID = ''
const URL_BASE = 'http://api.openweather.org/data/2.5/'

async function currentWeather (location) {
    const response = await fetch(`${URL_BASE}wheater?q=
    ${location}&apppid=${APPID}`)
    const data = await response.json()
    return data
}

async function weatherForecast (location){
    const response= await fetch(`${URL_BASE}forecast?q=
    ${location}&appid=${APPID}`)
    const data = await response.json()
    return data
}
async function oneCallApi (latitude,longitude){
    const response = await fetch(`${URL_BASE}onecall?lat=
    ${latitude}&lon=${longitude}&appid=${APPID}`)
    const data = await response.json()
    return data
}

currentWeather('Izmir')
    .then(data => console.log(data))

weatherForecast('Izmir')
    .then(data=>console.log(data))
