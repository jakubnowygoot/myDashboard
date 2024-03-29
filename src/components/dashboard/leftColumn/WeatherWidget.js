import { useEffect, useState } from "react";

function WeatherWidgetIcon({ setShowWeather, showWeather, setShowNextDays }) {
  const [toggleWeatherIcon, setToggleWeatherIcon] = useState(
    JSON.parse(localStorage.getItem("weatherIcon")) || false
  );

  useEffect(() => {
    localStorage.setItem("weatherIcon", toggleWeatherIcon.toString());
  }, [toggleWeatherIcon]);
  function ShowWidget() {
    setToggleWeatherIcon(!toggleWeatherIcon);
    setShowWeather(!showWeather);
    setShowNextDays(false);
  }

  return (
    <button
      className={`flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${
        toggleWeatherIcon &&
        "bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600 "
      }`}
      onClick={ShowWidget}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={`w-5 h-5 dark:stroke-white ${
          toggleWeatherIcon ? "stroke-white" : "stroke-black"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    </button>
  );
}

export default WeatherWidgetIcon;
