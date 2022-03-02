import React from "react";
import Layout from "./components/Layout";
import "./css/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Docs from "./routes/Docs";
import Trips from "./routes/Trips";
import Home from "./routes/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route path="/Docs" component={Docs} />
        <Route path="/Trips" component={Trips} />
      </BrowserRouter>
      <Home />
      <Layout />
    </div>
  );
}

export default App;
