import { useWeather } from "../context/WeatherContext";
import React from "react";
import Citys from "./Citys";
import Days from "./Days";
function Container() {
  const { isDark } = useWeather();
  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <div className="container">
        <Citys />
        <Days />
      </div>
    </div>
  );
}

export default Container;
