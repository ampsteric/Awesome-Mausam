import React, { useEffect } from "react";

export default function CurrentWeather() {
    useEffect(() => {
        axios.get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
    }, []);
    return <div></div>;
}
