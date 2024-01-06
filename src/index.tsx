import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Temperature } from "./Components/Temperature";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const initialCelsius = 0;
const initialFahrenheit = 0;
root.render(
  <React.StrictMode>
    <Temperature celsius={initialCelsius} fahrenheit={initialFahrenheit} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
