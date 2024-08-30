const request = require('postman-request')
require('dotenv').config()

const weatherKey = process.env.weatherStackAPI
const mapboxKey = process.env.mapboxAPI

// Geocoding
// takes an address and gives back the Lat/Long

const geocodeUrl = 'https://api.mapbox.com/search/geocode/v6/forward?q=Toronto&access_token=' + mapboxKey + '&limit=1'

request({url: geocodeUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services')
    } else if (!response.body.features[0]) {
        console.log('Unable to find location. Try another search')
    } else {
        const location = response.body.features[0].properties.full_address
        const latitude = response.body.features[0].properties.coordinates.latitude
        const longitude = response.body.features[0].properties.coordinates.longitude
    
        console.log('Location: ' + location + '.\n' + 
        'Latitude: ' + latitude + '.\n' +
        'Longitude: ' + longitude + '.\n')
    }
})

const weatherUrl = 'https://api.weatherstack.com/current?access_key=' + weatherKey + '&query=Toronto&units=m'

// units
// m = metric system
// f = Fahrenheit system
// s = scientific system (Kelvin)

request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log('Weather condition: ' + response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees Celsius out. It feels like ' + response.body.current.feelslike + ' degrees Celsius out.')
    }
})

// Geocoding
// Address -> api = lat/long -> into weatherstack
