import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>Page not found!</h1>
      <Link to={"/"}>Back to home</Link>
    </div>
  );
}
