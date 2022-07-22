import "./App.css"
import Search from "./components/search/Search"
import CurrentWeather from "./components/currentWeather/CurrentWeather"
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api"
import { useState } from "react"

const App = () => {
    const [currentWeather, setCurrentWeather] = useState(null)
    const [forecast, setForecast] = useState(null)

    const handleOnSearchChange = (searchData) => {
        //splits the input into latitude and longitude
        const [lat, lon] = searchData.value.split(" ")

        //Fetches current weather using lat and lon attributes
        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        )

        //Fetches forecast
        const forecastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        )

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json()
                const foreacastResponse = await response[1].json()
                setCurrentWeather({
                    city: searchData.label,
                    ...weatherResponse,
                })
                setForecast({ city: searchData.label, ...foreacastResponse })
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather data={currentWeather} />}
        </div>
    )
}

export default App
