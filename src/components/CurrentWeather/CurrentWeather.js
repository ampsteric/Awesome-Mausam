import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import Forecast from "../../components/ForecastWeather/ForecastWeather";
import ChartWeather from "../ChartWeather/ChartWeather";
import "./currentweather.css";
import { Link } from "react-router-dom";
export default function CurrentWeather(props) {
    const [Weather, setweather] = useState({});
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
                        pv: res.data.list[0].components.co,
                        rv: res.data.list[0].components.no2,
                        sv: res.data.list[0].components.o3,
                        amt: res.data.list[0].components.so2,
                        uv: res.data.list[0].components.pm2_5,
                    },
                ]);
            });
        //FOR HINDI
        //    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=21.2121&lon=81.3733&appid=8b591ea1a74b11d0b5dc1ff3cf9b67af&lang=hi")
    }, []);
    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            )
            .then((res) => {
                setweather(res.data);
            });
    }, [props]);

    // console.log(Weather);
    // console.log(data[0].tv);
    var unixtime = Weather.dt;
    var s = new Date(unixtime * 1000).toLocaleDateString("en-US");

    return (
        <div>
            {Object.keys(Weather).length === 0 &&
            Weather.constructor === Object ? (
                <div></div>
            ) : (
                <div className="container-fluid current">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <p>
                                                <span class="city-badge">
                                                    {Weather.name}
                                                </span>
                                            </p>
                                            <br />
                                            <span class="badge badge-dark country-badge">
                                                {Weather.sys.country}
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/airpollution">
                                                <button
                                                    type="button"
                                                    class="btn btn-danger"
                                                >
                                                    Get Air population
                                                    statistics
                                                </button>
                                            </Link>
                                            <br />
                                            <button
                                                type="button"
                                                class="btn btn-danger"
                                            >
                                                ⚠️The statistics shown <br />
                                                are fetched from openweathermap
                                                API.We dont confirm them.
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div
                                            className="current-card-grey col-md-2 extra-long"
                                            style={{ color: "#FB5581" }}
                                        >
                                            <h6>O₃</h6>
                                            <h6> {data[0].sv}</h6>
                                        </div>
                                        <div
                                            className="current-card-grey col-md-2 extra-long"
                                            style={{ color: "#27A140" }}
                                        >
                                            <h6>NO₂ </h6>
                                            <h6> {data[0].rv}</h6>
                                        </div>
                                        <div
                                            className="current-card-grey col-md-2 extra-long"
                                            style={{ color: "#775899" }}
                                        >
                                            <h6>CO</h6>
                                            <h6> {data[0].pv}</h6>
                                        </div>
                                        <div
                                            className="current-card-grey col-md-2 extra-long"
                                            style={{ color: "#007BFF" }}
                                        >
                                            <h6>PM 2.5</h6>
                                            <h6> {data[0].uv}</h6>
                                        </div>
                                        <div
                                            className="current-card-grey col-md-2 extra-long"
                                            style={{ color: "#DE073A" }}
                                        >
                                            <h6>SO₂</h6>
                                            <h6> {data[0].amt}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <br /> */}
                            {/* <h1
                                style={{
                                    fontSize: "7em",
                                    opacity: "0.09",
                                    // fontWeight: "700",
                                    marginTop: "5%",
                                }}
                            >
                                {s}
                            </h1> */}
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="current-card-pn col-md-3">
                                    <h6>Latitude 🌐</h6>
                                    <h6> {Weather.coord.lat}</h6>
                                </div>
                                <div className="current-card-b col-md-3">
                                    <h6>Longitude 🌐</h6>
                                    <h6> {Weather.coord.lon}</h6>
                                </div>
                                <div className="current-card-g col-md-3">
                                    <h6>Weather ⛅</h6>
                                    <h6> {Weather.weather[0].main}</h6>
                                </div>
                                <div className="current-card-p col-md-3">
                                    <h6>Temperature 🌡️</h6>
                                    <h6> {Weather.main.temp}</h6>
                                </div>

                                <div className="current-card-pn col-md-3">
                                    <h6>pressure 🧯</h6>
                                    <h6> {Weather.main.pressure}</h6>
                                </div>
                                <div className="current-card-g col-md-3">
                                    <h6>Humidity 💦</h6>
                                    <h6> {Weather.main.humidity}</h6>
                                </div>
                                <div className="current-card-p col-md-3">
                                    <h6>visibility 👀</h6>
                                    <h6> {Weather.visibility}</h6>
                                </div>
                                <div className="current-card-r col-md-3">
                                    <h6>Wind 🌫️</h6>
                                    <h6> {Weather.wind.speed}</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Forecast
                                lat={Weather.coord.lat}
                                lon={Weather.coord.lon}
                            />
                        </div>
                        <div className="col-md-6">
                            <ChartWeather
                                lat={Weather.coord.lat}
                                lon={Weather.coord.lon}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
