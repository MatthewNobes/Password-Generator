import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
