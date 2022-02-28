import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Trip Planner</h1>

      <Link to="/my-documents">DOCUMENTS</Link>

      <br></br>

      <Link to="/my-trips">MY TRIPS</Link>
    </div>
  );
}
