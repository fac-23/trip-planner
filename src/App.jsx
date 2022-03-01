import React from "react";
import Layout from "./components/Layout";
import "./css/App.css";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <Home />
      <Layout />
    </div>
  );
}

export default App;
