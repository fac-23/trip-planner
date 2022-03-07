import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";

// components
import Layout from "../components/Layout";

function SingleTrip({ tripsStore }) {
  const [singleEntry, setSingleEntry] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weatherDesc, setWeatherDesc] = useState(null);

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
            // console.log(data.main.temp.padEnd());
            setWeatherDesc(data.weather[0].description);
            setWeatherIcon(data.weather[0].icon);
          });

        fetch(
          `https://api.worldweatheronline.com/premium/v1/tz.ashx?key=c07ccab182f94af5af7165917220703&q=${entry.name}&format=json`
        )
          .then((res) => res.json())
          .then((data) => console.log(entry.name, data));
      })
      .catch((error) => console.log(error));
  }, [tripsStore, key]);

  return (
    <Fragment>
      <Layout pageTitle="Single Trip" />

      <div className="wrapper wrapper-singledoc-page center">
        <h1>{singleEntry && singleEntry.name}</h1>

        <div className="meteo">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            className="weather-icon"
          ></img>
          <p>{weatherDesc}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default SingleTrip;
