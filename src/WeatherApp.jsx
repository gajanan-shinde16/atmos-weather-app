import './WeatherApp.css'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp() {
    const [info, setInfo] = useState({
        city: "Pune",
        feelsLike: 27.5,
        temp: 28,
        minTemp: 24,
        maxTemp: 28.4,
        humidity: 40,
        weather: "Clear Sky",
    });

    let updateInfo = (newInfo) => {
        setInfo(newInfo);
    }

    return (
        <div className="weather-container">
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={info} />
        </div>
    )
}