import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import "./currentweather.css";
export default function CurrentWeather(props) {
    const [Weather, setweather] = useState({});
    useEffect(() => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            )
            .then((res) => {
                setweather(res.data);
            });
    }, [props.city]);
    console.log(Weather);

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
                            <span class="badge badge-dark city-badge">
                                {Weather.name}
                            </span>
                            <span class="badge badge-dark country-badge">
                                {Weather.sys.country}
                            </span>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="current-card-pn col-md-4">
                                    <h2>Latitude</h2>
                                    <h5> {Weather.coord.lat}</h5>
                                </div>
                                <div className="current-card-b col-md-4">
                                    <h2>Longitude</h2>
                                    <h5> {Weather.coord.lon}</h5>
                                </div>
                                <div className="current-card-g col-md-4">
                                    <h2>Weather</h2>
                                    <h5> {Weather.weather[0].main}</h5>
                                </div>
                                <div className="current-card-p col-md-4">
                                    <h2>Temp</h2>
                                    <h5> {Weather.main.temp}</h5>
                                </div>
                                <div className="current-card-r col-md-4">
                                    <h2>Latitude</h2>
                                    <h5> {Weather.coord.lat}</h5>
                                </div>
                                <div className="current-card-b col-md-4">
                                    <h2>pressure</h2>
                                    <h5> {Weather.main.pressure}</h5>
                                </div>
                                <div className="current-card-g col-md-4">
                                    <h2>Humidity</h2>
                                    <h5> {Weather.main.humidity}</h5>
                                </div>
                                <div className="current-card-p col-md-4">
                                    <h2>visibility</h2>
                                    <h5> {Weather.visibility}</h5>
                                </div>
                                <div className="current-card-r col-md-4">
                                    <h2>Wind</h2>
                                    <h5> {Weather.wind.speed}</h5>
                                </div>
                                <div className="current-card-pn col-md-4">
                                    <h2>Date</h2>
                                    <h5> {s}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
