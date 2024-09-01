const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(40.712749, -74.005994, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

    // console.log('Weather condition: ' + response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees Celsius out. It feels like ' + response.body.current.feelslike + ' degrees Celsius out.')


// Geocoding
// Address -> api = lat/long -> into weatherstack
