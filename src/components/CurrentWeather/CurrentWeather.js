import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";

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
    // console.log(Weather);

    var unixtime = Weather.dt;
    var s = new Date(unixtime * 1000).toLocaleDateString("en-US");

    return (
        <div>
            {Object.keys(Weather).length === 0 &&
            Weather.constructor === Object ? (
                <div></div>
            ) : (
                <div>
                    <h2>Name : {Weather.name}</h2>
                    <h2>Country : {Weather.sys.country}</h2>
                    <h2>Latitude : {Weather.coord.lat}</h2>
                    <h2>Longitude : {Weather.coord.lon}</h2>
                    <h2>Weather : {Weather.weather[0].main}</h2>
                    <h2>Temp : {Weather.main.temp}</h2>
                    <h2>pressure : {Weather.main.pressure}</h2>
                    <h2>Humidity : {Weather.main.humidity}</h2>
                    <h2>visibility : {Weather.visibility}</h2>
                    <h2>Wind : {Weather.wind.speed}</h2>
                    <h2>Date : {s}</h2>
                </div>
            )}
        </div>
    );
}
