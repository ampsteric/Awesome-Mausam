import React, { useEffect } from "react";

export default function CurrentAirpop() {
    useEffect(() => {
        axios.get(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=21.2121&lon=81.3733&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
    }, [input]);
    return <div></div>;
}
