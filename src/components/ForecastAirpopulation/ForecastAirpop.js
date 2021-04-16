import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart,
    Area,
    BarChart,
    Bar,
    Cell,
} from "recharts";

export default function CurrentAirpop() {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=50&lon=50&appid=8b591ea1a74b11d0b5dc1ff3cf9b67af`
                // `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=21.2121&lon=81.3733&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            )
            .then((res) => {
                console.log(res);
                res.data.list.map((day) => {
                    var unixtime = day.dt;
                    var s = new Date(unixtime * 1000).toLocaleDateString(
                        "en-US"
                    );
                    setData((prevstate) => {
                        return [
                            ...prevstate,
                            {
                                name: s,
                                tv: day.main.aqi,
                                pv: day.components.co,
                                qv: day.components.no,
                                rv: day.components.no2,
                                sv: day.components.o3,
                                amt: day.components.so2,
                                uv: day.components.pm2_5,
                            },
                        ];
                    });
                });
            });

        //FOR HINDI
        //    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=21.2121&lon=81.3733&appid=8b591ea1a74b11d0b5dc1ff3cf9b67af&lang=hi")
    }, []);
    return (
        <div>
            <div>
                {/* {console.log(data)} */}
                <LineChart
                    width={1500}
                    height={1000}
                    data={data}
                    margin={{
                        top: 250,
                        right: 10,
                        left: 300,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="8 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#F2073A"
                        // activeDot={{ r: 10 }}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#28A745"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="qv"
                        stroke="##FB5581"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="rv"
                        stroke="#007BFF"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="sv"
                        stroke="#fdd401"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="tv"
                        stroke="#ab7cec"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="amt"
                        stroke="#fff"
                        dot={false}
                    />
                </LineChart>
            </div>
        </div>
    );
}
