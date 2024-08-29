const request = require('postman-request')
require('dotenv').config()

const weatherKey = process.env.weatherStackAPI
const mapboxKey = process.env.mapboxAPI

// Geocoding
// takes an address and gives back the Lat/Long

const geomapUrl = 'https://api.mapbox.com/search/geocode/v6/forward?q=Toronto&access_token=' + mapboxKey + '&limit=1'

request({url: geomapUrl, json: true}, (error, response) => {
    console.log('Location: ' + response.body.features[0].properties.full_address + '.\n' + 
    'Latitude: ' + response.body.features[0].properties.coordinates.latitude + '.\n' +
    'Longitude: ' + response.body.features[0].properties.coordinates.longitude + '.\n')
})

const url = 'https://api.weatherstack.com/current?access_key=' + weatherKey + '&query=Toronto&units=m'

// units
// m = metric system
// f = Fahrenheit system
// s = scientific system (Kelvin)

request({ url: url, json: true }, (error, response) => {
    console.log('Weather condition: ' + response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees Celsius out. It feels like ' + response.body.current.feelslike + ' degrees Celsius out.')
})

// Geocoding
// Address -> api = lat/long -> into weatherstack
