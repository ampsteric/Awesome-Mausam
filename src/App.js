import React, { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherForecast from "./components/ForecastWeather/ForecastWeather";
function App() {
    const [City, Setcity] = useState("Delhi");
    return (
        <div className="App">
            <input
                onBlur={(e) => {
                    Setcity(e.target.value);
                }}
            />
            <button>Search</button>
            <CurrentWeather city={City} />
            <WeatherForecast />
        </div>
    );
}

export default App;
