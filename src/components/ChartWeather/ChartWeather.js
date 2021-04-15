// import "./styles.css";
import React, { useState, useEffect } from "react";
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

import axios from "axios";
export default function App() {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=21.2121&lon=81.373&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            )
            .then((res) => {
                console.log(res);
                res.data.daily.map((day) => {
                    var unixtime = day.dt;
                    var s = new Date(unixtime * 1000).toLocaleDateString(
                        "en-US"
                    );
                    setData((prevstate) => {
                        return [
                            ...prevstate,
                            {
                                name: s,
                                pv: day.temp.morn,
                                uv: day.temp.eve,
                                amt: day.temp.night,
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
            {/* <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
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
                    stroke="#8884d8"
                    activeDot={{ r: 10 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>

            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                <Bar dataKey="amt" fill="#22cf9d" />
            </BarChart> */}
            <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 50,
                    right: 0,
                    left: 10,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                />
                <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                />
                <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                />
            </AreaChart>
        </div>
    );
}
