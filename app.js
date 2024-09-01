const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Access command line arguments starting from index 2
const args = process.argv.slice(2)

if (args.length === 0) {
    console.log("Please provide a location")
} else {
    geocode(args, (error, {latitude, longitude, location} = {} ) => {
        if (error) {
            console.log(error)
        } else {
            forecast(latitude, longitude, (error, weatherData) => {
                if (error) {
                    return console.log(error)
                }
        
                console.log(location)
                console.log(weatherData)
            })
        }
    })
}