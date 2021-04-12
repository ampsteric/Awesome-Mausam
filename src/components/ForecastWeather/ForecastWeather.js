import React, { useEffect } from "react";

export default function ForecastWeather() {
    useEffect(() => {
        axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=21.2121&lon=81.3733&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        //    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=21.2121&lon=81.3733&appid=8b591ea1a74b11d0b5dc1ff3cf9b67af&lang=hi")
    }, []);
    return <div></div>;
}
