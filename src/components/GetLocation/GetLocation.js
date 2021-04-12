import React, { useEffect } from "react";

export default function GetLocation() {
    useEffect(() => {
        axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=bhilai,cg,IND&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
    }, [input]);
    return <div></div>;
}
