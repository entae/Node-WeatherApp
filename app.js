const request = require('postman-request')

const url = 'https://api.weatherstack.com/current?access_key=6fdf9e312c67c6c2aefb815e6466a6fc&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log('It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out')
})
