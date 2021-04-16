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
// http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=8b591ea1a74b11d0b5dc1ff3cf9b67af
// http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=50&lon=50&appid=8b591ea1a74b11d0b5dc1ff3cf9b67af
export default function CurrentAirpop() {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        // setData(0);
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/air_pollution?lat=21.2121&lon=81.3733&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            )
            .then((res) => {
                var unixtime = res.data.list[0].dt;
                var s = new Date(unixtime * 1000).toLocaleDateString("en-US");
                setData([
                    {
                        name: s,
                        tv: res.data.list[0].main.aqi,
                        pv: res.data.list[0].components.co,
                        qv: res.data.list[0].components.no,
                        rv: res.data.list[0].components.no2,
                        sv: res.data.list[0].components.o3,
                        amt: res.data.list[0].components.so2,
                        uv: res.data.list[0].components.pm2_5,
                    },
                ]);
                // setData((prevstate) => {
                //     return [
                //         ...prevstate,
                //         {
                //             name: s,
                //             tv: res.data.list[0].main.aqi,
                //             pv: res.data.list[0].components.co,
                //             qv: res.data.list[0].components.no,
                //             rv: res.data.list[0].components.no2,
                //             sv: res.data.list[0].components.o3,
                //             amt: res.data.list[0].components.so2,
                //             uv: res.data.list[0].components.pm2_5,
                //         },
                //     ];
                // });
            });
        //FOR HINDI
        //    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=21.2121&lon=81.3733&appid=8b591ea1a74b11d0b5dc1ff3cf9b67af&lang=hi")
    }, []);
    return (
        <div>
            <div>
                {/* {console.log(data)} */}
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
                        activeDot={{ r: 10 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#007BFF" />
                    <Line type="monotone" dataKey="qv" stroke="#007BFF" />
                    <Line type="monotone" dataKey="rv" stroke="#007BFF" />
                    <Line type="monotone" dataKey="sv" stroke="#007BFF" />
                    <Line type="monotone" dataKey="tv" stroke="#007BFF" />
                    <Line type="monotone" dataKey="amt" stroke="#007BFF" />
                </LineChart>
            </div>
        </div>
    );
}
