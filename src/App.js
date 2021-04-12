import React, { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
function App() {
    const [City, Setcity] = useState("Delhi");
    return (
        <div className="App">
            <input
                onChange={(e) => {
                    Setcity(e.target.value);
                }}
            />
            <CurrentWeather city={City} />
        </div>
    );
}

export default App;
