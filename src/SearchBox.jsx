import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react";
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    let fetchData = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonData = await response.json();

            if (!response.ok) {
                setError(true);
                return null;
            }

            return {
                city: jsonData.name,
                feelsLike: jsonData.main.feels_like,
                temp: jsonData.main.temp,
                minTemp: jsonData.main.temp_min,
                maxTemp: jsonData.main.temp_max,
                humidity: jsonData.main.humidity,
                weather: jsonData.weather[0].description,
            };
        } catch (err) {
            setError(true);
            return null;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
        setError(false);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        if (city.trim() === "") {
            setError(true);
            return;
        }
        let info = await fetchData();
        if (info) {
            updateInfo(info);
            setCity("");
        }
    };

    return (
        <div className="search-box">
            <h2>Search for Weather</h2>
            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    error={error}
                    helperText={error ? "Enter a valid city name" : ""}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}