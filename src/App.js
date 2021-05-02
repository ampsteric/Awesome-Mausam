import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Air from "./components/ForecastAirpopulation/ForecastAirpop";
import GetLocation from "./components/GetLocation/GetLocation";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
    const [City, Setcity] = useState("Delhi");
    const [lat, setlat] = useState();
    const [long, setlong] = useState();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                // console.log(position.coords.latitude);
                setlat(position.coords.latitude);
                setlong(position.coords.longitude);
            },
            function (error) {
                console.error(
                    "Error Code = " + error.code + " - " + error.message
                );
            }
        );
    }, []);
    return (
        <div className="App">
            <Router>
                <Route path="/" exact={true}>
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
                </Route>
                <Route path="/get_location" exact>
                    <GetLocation lat={lat} long={long} />
                </Route>
                <Route path="/airpollution" exact={true}>
                    <Air />
                </Route>
            </Router>
        </div>
    );
}

export default App;
