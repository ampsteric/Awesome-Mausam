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
export default function App(props) {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        // setData(null);
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}3&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            )
            .then((res) => {
                // console.log(res);
                // setData({});
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
    }, [props.lat]);

    return (
        <div>
            <LineChart
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
                    stroke="#F2073A"
                    // activeDot={{ r: 10 }}
                    dot={false}
                />
                <Line
                    type="basisClosed"
                    dataKey="uv"
                    stroke="#007BFF"
                    dot={false}
                />
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
                <Bar dataKey="pv" fill="#3E3A99" />
                <Bar dataKey="uv" fill="#F2073A" />
                <Bar dataKey="amt" fill="#007BFF" />
            </BarChart>
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
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#007BFF"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#007BFF"
                            stopOpacity={0}
                        />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#F2073A"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#F2073A"
                            stopOpacity={0}
                        />
                    </linearGradient>
                    <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#3E3A99"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#3E3A99"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#007BFF"
                    // fill="#8884d8"
                    fill="url(#colorUv)"
                />
                <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#F2073A"
                    // fill="#82ca9d"
                    fill="url(#colorPv)"
                />
                <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    stroke="#3E3A99"
                    // fill="#ffc658"
                    fill="url(#colorAmt)"
                />
            </AreaChart>
        </div>
    );
}
