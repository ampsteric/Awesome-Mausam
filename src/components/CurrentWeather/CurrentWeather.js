import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import Forecast from "../../components/ForecastWeather/ForecastWeather";
import "./currentweather.css";
export default function CurrentWeather(props) {
    const [Weather, setweather] = useState({});
    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            )
            .then((res) => {
                setweather(res.data);
            });
    }, [props.city]);
    // console.log(Weather);

    var unixtime = Weather.dt;
    var s = new Date(unixtime * 1000).toLocaleDateString("en-US");

    return (
        <div>
            {Object.keys(Weather).length === 0 &&
            Weather.constructor === Object ? (
                <div></div>
            ) : (
                <div className="container-fluid current">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                <span class="city-badge">{Weather.name}</span>
                            </p>
                            <br />

                            <span class="badge badge-dark country-badge">
                                {Weather.sys.country}
                            </span>
                            <br />
                            <h1
                                style={{
                                    fontSize: "7em",
                                    opacity: "0.09",
                                    // fontWeight: "700",
                                    marginTop: "5%",
                                }}
                            >
                                {s}
                            </h1>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="current-card-pn col-md-3">
                                    <h6>Latitude 🌐</h6>
                                    <h6> {Weather.coord.lat}</h6>
                                </div>
                                <div className="current-card-b col-md-3">
                                    <h6>Longitude 🌐</h6>
                                    <h6> {Weather.coord.lon}</h6>
                                </div>
                                <div className="current-card-g col-md-3">
                                    <h6>Weather ⛅</h6>
                                    <h6> {Weather.weather[0].main}</h6>
                                </div>
                                <div className="current-card-p col-md-3">
                                    <h6>Temperature 🌡️</h6>
                                    <h6> {Weather.main.temp}</h6>
                                </div>

                                <div className="current-card-pn col-md-3">
                                    <h6>pressure 🧯</h6>
                                    <h6> {Weather.main.pressure}</h6>
                                </div>
                                <div className="current-card-g col-md-3">
                                    <h6>Humidity 💦</h6>
                                    <h6> {Weather.main.humidity}</h6>
                                </div>
                                <div className="current-card-p col-md-3">
                                    <h6>visibility 👀</h6>
                                    <h6> {Weather.visibility}</h6>
                                </div>
                                <div className="current-card-r col-md-3">
                                    <h6>Wind 🌫️</h6>
                                    <h6> {Weather.wind.speed}</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Forecast
                                lat={Weather.coord.lat}
                                lon={Weather.coord.lon}
                            />
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
