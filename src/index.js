import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const savedTheme = localStorage.getItem("theme");
const isDark = savedTheme ? JSON.parse(savedTheme) : false;
document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
if (isDark) {
  document.documentElement.style.backgroundColor = "#2c3e50";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
