import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

// Helper functions
import { formatDate } from "../helper-functions";
import useDb from "../hooks/useDb.js";

// Components
import Layout from "../components/Layout";
import StyledButton from "../components/styled/StyledButton";
import StyledInput from "../components/styled/StyledInput";

export default function CreateTrip({ tripsStore }) {
  const { setItem } = useDb(tripsStore);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("stateObject FROM USEEFFECT IN TRIPS", stateObject);
  // }, [stateObject]);

  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState({ start: "", end: "" });
  const [defaultStartDate, setDefaultStartDate] = useState(
    formatDate(new Date())
  );
  const [defaultEndDate, setDefaultEndDate] = useState(formatDate(new Date()));

  return (
    <Fragment>
      <Layout pageTitle="Create Trip" />
      <div className="wrapper wrapper-trips-page">
        <h2>Create a new trip</h2>
        <form
          className="stack-md"
          onSubmit={(event) => {
            event.preventDefault();
            setItem(destination, dates);
            setDestination("");
            navigate("/my-trips");
          }}
        >
          <label htmlFor="destination">Where to?</label>
          <StyledInput
            type="text"
            id="destination"
            onChange={(event) => setDestination(event.target.value)}
            value={destination}
            placeholder="Enter a city name"
            required
          />
          <p>When?</p>
          <label htmlFor="start-date">Start date</label>
          <StyledInput
            type="date"
            id="start-date"
            value={defaultStartDate}
            onChange={(event) => {
              const startDate = event.target.value;
              setDefaultStartDate(startDate);
              setDates((prevDateObj) => {
                return { ...prevDateObj, start: startDate };
              });
            }}
          ></StyledInput>
          <label htmlFor="end-date">End date</label>
          <StyledInput
            type="date"
            id="end-date"
            value={defaultEndDate}
            onChange={(event) => {
              const endDate = event.target.value;
              setDefaultEndDate(endDate);
              setDates((prevDateObj) => {
                return { ...prevDateObj, end: endDate };
              });
            }}
          ></StyledInput>
          <StyledButton>Add to My Trips</StyledButton>
        </form>
      </div>
    </Fragment>
  );
}
