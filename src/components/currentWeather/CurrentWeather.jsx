import "./CurrentWeather.css"
import icon from "../../assets/icons/01d.png"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Tenali</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img src={icon} alt="weather-icon" />
            </div>
            <div className="bottom">
                <p className="temperature">35°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">40°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">4 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">20%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">25 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather
