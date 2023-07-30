import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import Card from "./Card";
import CalendarButtons from "./CalendarButtons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Calendar({ selectedDay, setSelectedDay, setAddEvent, events }) {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const colStartClasses = [
    "",
    "col-start-1",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];
  return (
    <Card>
      <h1 className="text-3xl font-bold pb-5 dark:text-gray-300 text-center justify-center ">
        Calendar
      </h1>
      <CalendarButtons
        setCurrentMonth={setCurrentMonth}
        firstDayCurrentMonth={firstDayCurrentMonth}
      />
      <div className="grid grid-cols-7 mt-2.5 text-xs leading-6 text-center text-gray-400">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className="grid grid-cols-7 mt-2 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(dayIdx === 0 && colStartClasses[getDay(day)])}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedDay(day);
                setAddEvent(true);
              }}
              className={classNames(
                isEqual(day, selectedDay) && "text-white bg-primary-600",
                !isEqual(day, selectedDay) &&
                  isToday(day) &&
                  "text-red-500 dark:text-red-500",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-900",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-400",
                isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                isEqual(day, selectedDay) && !isToday(day) && "bg-gray-900",
                !isEqual(day, selectedDay) && "hover:bg-primary-600",
                (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
                "mx-auto flex h-8 w-8 items-center justify-center rounded-full dark:text-white hover:text-white"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
            <div className="w-1 h-1 mx-auto mb-1">
              {events.some((meeting) =>
                isSameDay(parseISO(meeting.startDatetime), day)
              ) && <div className="w-1 h-1 rounded-full bg-sky-500" />}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Calendar;
