import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ForecastWeather() {
    const [forecast, setforecast] = useState({});
    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=21.2121&lon=81.3733&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            )
            .then((res) => {
                console.log(res);
                setforecast(res.data);
            });
        //FOR HINDI
        //    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=21.2121&lon=81.3733&appid=8b591ea1a74b11d0b5dc1ff3cf9b67af&lang=hi")
    }, []);

    return (
        <div>
            {Object.keys(forecast).length === 0 &&
            forecast.constructor === Object ? (
                <div></div>
            ) : (
                <div>
                    {forecast.daily.map((daily) => {
                        var unixtime = daily.dt;
                        var s = new Date(unixtime * 1000).toLocaleDateString(
                            "en-US"
                        );
                        return (
                            <div>
                                <h1>{s}</h1>
                                <h1>{daily.humidity}</h1>
                                <h1>{daily.pressure}</h1>
                                <h1>{daily.temp.max}</h1>
                                <h1>{daily.weather[0].description}</h1>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
