import { add, format } from "date-fns";

function CalendarButtons({ firstDayCurrentMonth, setCurrentMonth }) {
  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div className="flex items-center pb-1">
      <h2 className="flex-auto font-semibold text-gray-900 dark:text-white">
        {format(firstDayCurrentMonth, "MMMM yyyy")}
      </h2>
      <button
        type="button"
        onClick={previousMonth}
        className="-my-1.5 flex flex-none items-center justify-center p-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-5 h-5 dark:stroke-white stroke-gray-400 hover:stroke-black dark:hover:stroke-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={nextMonth}
        type="button"
        className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-5 h-5 stroke-gray-400 dark:stroke-white hover:stroke-black dark:hover:stroke-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>{" "}
      </button>
    </div>
  );
}

export default CalendarButtons;
