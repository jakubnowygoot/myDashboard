import { useState } from "react";

function LeftColumn() {
  const [toggleWeather, setToggleWeather] = useState(false);
  const [toggleMoon, setToggleMoon] = useState(false);
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [toggleToDo, setToggleToDo] = useState(false);

  function ToggleWeatherIconHandler() {
    setToggleWeather(!toggleWeather);
  }

  function ToggleMoonIconHandler() {
    setToggleMoon(!toggleMoon);
  }

  function ToggleCalendarIconHandler() {
    setToggleCalendar(!toggleCalendar);
  }

  function ToggleToDoIconHandler() {
    setToggleToDo(!toggleToDo);
  }

  return (
    <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-gray-300">
      <a className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-primary-600">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-primary-600"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
      <button
        className={`flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${
          toggleWeather &&
          "bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600 "
        }`}
        onClick={ToggleWeatherIconHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={`w-5 h-5 dark:stroke-white ${
            toggleWeather ? "stroke-white" : "stroke-black"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
          />
        </svg>
      </button>
      <button
        className={`flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${
          toggleMoon &&
          "bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600 "
        }`}
        onClick={ToggleMoonIconHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={`w-5 h-5 dark:stroke-white ${
            toggleMoon ? "stroke-white" : "stroke-black"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
      <button
        className={`flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${
          toggleCalendar &&
          "bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600 "
        }`}
        onClick={ToggleCalendarIconHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={`w-5 h-5 dark:stroke-white ${
            toggleCalendar ? "stroke-white" : "stroke-black"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
      </button>
      <button
        className={`flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${
          toggleToDo &&
          "bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600 "
        }`}
        onClick={ToggleToDoIconHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={`w-5 h-5 dark:stroke-white ${
            toggleToDo ? "stroke-white" : "stroke-black"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
    </div>
  );
}

export default LeftColumn;
