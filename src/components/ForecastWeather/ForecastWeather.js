import React, { useEffect, useState } from "react";
import axios from "axios";
import "./forecast.css";
import "../CurrentWeather/currentweather.css";
export default function ForecastWeather(props) {
    const [forecast, setforecast] = useState({});
    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=21.2121&lon=81.3733&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            )
            .then((res) => {
                // console.log(res);
                setforecast(res.data);
            });
        //FOR HINDI
        //    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=21.2121&lon=81.3733&appid=8b591ea1a74b11d0b5dc1ff3cf9b67af&lang=hi")
    }, []);
    // console.log(forecast.daily);
    function icon_decider(s) {
        if (s[0] == "c") return <div>⛅</div>;
        else if (s[0] == "s") return "🌞";
        else if (s[0] == "l") return "🌧️";
        else if (s[0] == "b") return "⛈️";
        else if (s[0] == "f") return "🌤️";
    }

    const arr = ["r", "b", "g", "p", "pn"];
    function random(mn, mx) {
        return Math.random() * (mx - mn) + mn;
    }
    return (
        <div>
            {Object.keys(forecast).length === 0 &&
            forecast.constructor === Object ? (
                <div></div>
            ) : (
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        {forecast.daily.map((daily) => {
                            var unixtime = daily.dt;
                            var s = new Date(
                                unixtime * 1000
                            ).toLocaleDateString("en-US");
                            return (
                                <div
                                    className={`col-md-3 current-card-${
                                        arr[Math.floor(random(1, 5)) - 1]
                                    }`}
                                    style={{ textAlign: "left" }}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 style={{ opacity: "0.5" }}>
                                                {s}
                                            </h1>
                                        </div>
                                        <div className="col-md-6" align="right">
                                            <h2>
                                                {" "}
                                                {icon_decider(
                                                    daily.weather[0].description
                                                )}
                                            </h2>
                                        </div>
                                    </div>

                                    <h5>
                                        <span
                                            style={{
                                                opacity: "0.7",
                                                fontSize: "13px",
                                                marginRight: "10%",
                                            }}
                                        >
                                            {" "}
                                            Humidity
                                        </span>{" "}
                                        <div className="forecast-flexi">
                                            {daily.humidity}
                                        </div>
                                    </h5>
                                    <h5>
                                        <span
                                            style={{
                                                opacity: "0.7",
                                                fontSize: "13px",
                                                marginRight: "10%",
                                            }}
                                        >
                                            Pressure
                                        </span>{" "}
                                        <div className="forecast-flexi">
                                            {daily.pressure}
                                        </div>
                                    </h5>
                                    <h5>
                                        <span
                                            style={{
                                                opacity: "0.7",
                                                fontSize: "13px",
                                                marginRight: "10%",
                                            }}
                                        >
                                            Temperature
                                        </span>
                                        <div className="forecast-flexi">
                                            {" "}
                                            {daily.temp.max}
                                        </div>
                                    </h5>
                                    <h5>
                                        <span
                                            style={{
                                                opacity: "0.7",
                                                fontSize: "13px",
                                                marginRight: "10%",
                                            }}
                                        >
                                            {"Feels  "}
                                        </span>
                                        <div className="forecast-flexi">
                                            {" "}
                                            {daily.weather[0].description}
                                        </div>
                                    </h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
