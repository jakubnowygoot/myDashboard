import { useState } from "react";

import axios from "axios";
import LoadingSpinner from "../../../ui/LoadingSpinner";

function Weather({
  Icons,
  setShowNextDays,
  weatherNextDays,
  location,
  setLocation,
  showNextDays,
}) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [newError, setNewError] = useState(false);
  const [toggleInputLocation, setToggleInputLocation] = useState(true);
  const [gap, setGap] = useState(4);

  const date = new Date().toDateString();

  const key = "62bf8f2f137d858cde8784170789de51";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      setIsLoading(true);
      try {
        const resp = await axios.get(url);
        weatherNextDays();
        setLocation("");
        setData(resp.data);
        setGap(0);
        setToggleInputLocation(!toggleInputLocation);
        setIsLoading(false);
        setNewError(false);
      } catch (error) {
        setNewError(true);
        setIsLoading(false);
        setLocation("");
        setToggleInputLocation(true);
      }
    }
  };

  function InputHandler() {
    setToggleInputLocation(!toggleInputLocation);
  }

  function RenderNextDaysWeather() {
    if (data.name === undefined) {
      setShowNextDays(false);
      setNewError(true);
    } else {
      setShowNextDays(!showNextDays);
    }
  }

  return (
    <div className=" rounded border-white bg-white dark:border-gray-700 border-2 h-96 dark:bg-gray-800">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div
          className={`flex flex-col bg-white rounded p-4 h-full w-full dark:bg-gray-800 gap-${gap}`}
        >
          {toggleInputLocation ? (
            <div>
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                type="text"
                onKeyDown={searchLocation}
                className="bg-gray-50 border border-gray-300 text-gray-900 outline-primary-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none"
                placeholder={
                  newError ? "Invalid location try again " : "Enter location"
                }
              />
            </div>
          ) : (
            <div
              className="font-bold text-xl xs:text-3xl cursor-pointer dark:text-gray-300"
              onDoubleClick={InputHandler}
            >
              {data.name}
            </div>
          )}
          <div className="text-base text-gray-500 dark:text-gray-300 flex justify-between">
            {date}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-6 h-6 cursor-pointer stroke-gray-400 dark:stroke-white"
              onClick={RenderNextDaysWeather}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  showNextDays
                    ? "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    : "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }
              />
            </svg>
          </div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              className="qi-101 fill-primary-600"
              viewBox="0 0 16 16"
            >
              <path
                d={`${
                  Icons[`${data.weather ? `${data.weather[0].main}` : null}`]
                }`}
              />
            </svg>
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            {data.main ? (
              <div className="font-medium text-6xl dark:text-gray-300">
                {data.main.temp.toFixed()}°C
              </div>
            ) : null}
            <div className="flex flex-col items-center ml-6 dark:text-gray-300">
              {data.weather ? <div>{data.weather[0].main}</div> : null}
              <div className="mt-1">
                <span className="text-sm" />
                {data.main ? (
                  <span className="text-sm font-light text-gray-500 dark:text-gray-300">
                    {data.main.temp_max.toFixed()}°C
                  </span>
                ) : null}
              </div>
              <div>
                {data.main ? (
                  <span className="text-sm font-light text-gray-500 dark:text-gray-300">
                    {data.main.temp_min.toFixed()}°C
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-base xs:text-lg dark:text-white">
                Wind
              </div>
              {data.wind ? (
                <div className="text-sm text-gray-500 dark:text-gray-300">
                  {data.wind.speed.toFixed()}km/h
                </div>
              ) : null}
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-base xs:text-lg dark:text-white">
                Humidity
              </div>
              {data.main ? (
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {data.main.humidity}%
                </span>
              ) : null}
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-base xs:text-lg dark:text-white">
                Visibility
              </div>
              {data.visibility ? (
                <div className="text-sm text-gray-500 dark:text-gray-300">
                  {String(data.visibility).substring(0, 2)}km
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
