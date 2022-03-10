import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";

// components
import Layout from "../components/Layout";
import ToDoList from "../components/ToDoList";

function SingleTrip({ tripsStore }) {
  const [singleEntry, setSingleEntry] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weatherDesc, setWeatherDesc] = useState(null);
  const [localTime, setLocalTime] = useState(null);
  const [weatherTemp, setWeatherTemp] = useState(null);

  let { key } = useParams();

  // console.log("KEY", key);
  useEffect(() => {
    tripsStore
      .getItem(key)
      .then((entry) => {
        // console.log("ENTRY", entry.name);
        setSingleEntry(entry);
        return entry;
      })
      .then((entry) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${entry.name}&units=metric&APPID=81db7405a11ca97dcaeccbecd25e8e3b`
        )
          .then((res) => res.json())
          .then((data) => {
            setWeatherDesc(data.weather[0].description);
            setWeatherIcon(data.weather[0].icon);
            setWeatherTemp(data.main.feels_like);
          });

        fetch(
          `https://api.worldweatheronline.com/premium/v1/tz.ashx?key=c07ccab182f94af5af7165917220703&q=${entry.name}&format=json`
        )
          .then((res) => res.json())
          .then((data) => {
            const dateTimeArr = data.data.time_zone[0].localtime.split(" ");
            setLocalTime(dateTimeArr[1]);
          });
      })
      .catch((error) => console.log(error));
  }, [tripsStore, key]);

  return (
    <Fragment>
      <Layout pageTitle="Single Trip" />

      <div className="wrapper wrapper-singledoc-page center">
        <h2 className="destination">{singleEntry && singleEntry.name}</h2>
        <p>Local time: {localTime}</p>

        <div className="meteo">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            className="weather-icon"
            alt="Weather Icon"
          ></img>
          <div></div>
          <p>{`${weatherDesc}, feels like ${weatherTemp}`} &#xb0;C</p>
        </div>
        <ToDoList />
      </div>
    </Fragment>
  );
}

export default SingleTrip;
