import { useEffect, useState } from "react";

function CalendarWidget({ showCalendar, setShowCalendar }) {
  const [toggleCalenderIcon, setToggleCalendarIcon] = useState(
    JSON.parse(localStorage.getItem("calendarIcon")) || false
  );

  useEffect(() => {
    localStorage.setItem("calendarIcon", toggleCalenderIcon.toString());
  }, [toggleCalenderIcon]);

  function ShowWidget() {
    setToggleCalendarIcon(!toggleCalenderIcon);
    setShowCalendar(!showCalendar);
  }

  return (
    <button
      className={`flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${
        toggleCalenderIcon &&
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
          toggleCalenderIcon ? "stroke-white" : "stroke-black"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    </button>
  );
}

export default CalendarWidget;
