import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
// import App from "./App";
import Home from "./routes/Home";
import PageNotFound from "./routes/PageNotFound"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
        <Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);