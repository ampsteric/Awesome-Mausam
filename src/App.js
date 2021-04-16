import React, { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Air from "./components/ForecastAirpopulation/ForecastAirpop";
function App() {
    const [City, Setcity] = useState("Delhi");
    return (
        <div className="App">
            <div class="input-group m-5">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                        🔎
                    </span>
                </div>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Enter the name of Place.."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onBlur={(e) => {
                        Setcity(e.target.value);
                    }}
                />
                <button type="button" class="btn-submit">
                    Search
                </button>
            </div>

            <CurrentWeather city={City} />
            <Air />
        </div>
    );
}

export default App;
