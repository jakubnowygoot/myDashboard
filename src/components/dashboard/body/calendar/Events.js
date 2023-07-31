import { format } from "date-fns";
import { useCallback, useState } from "react";
import Card from "./Card";
import Meeting from "./Meeting";
import DefaultInput from "../../../ui/inputs/DefaultInput";
import Button from "../../../ui/Button";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Events({
  selectedDay,
  setAddEvent,
  addEvent,
  setEvents,
  events,
  test,
  settest,
  selectedDayMeetings,
}) {
  const [textArea, setTextArea] = useState("");
  const [firstTime, setFirstTime] = useState("");
  const [secondTime, setSecondTime] = useState("");

  const AddNewEvent = () => {
    const newEvent = {
      id: Math.random(),
      name: textArea,
      startDatetime: `${format(selectedDay, "yyyy-MM-dd")}T${firstTime}`,
      endDatetime: `${format(selectedDay, "yyyy-MM-dd")}T${secondTime}`,
    };
    const newEvents = [newEvent, ...events];
    setEvents(newEvents);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    AddNewEvent();
    setAddEvent(true);
    setTextArea("");
    setFirstTime("");
    setSecondTime("");
    settest(1);
  };

  const deleteById = (id) => {
    setEvents((oldValues) => oldValues.filter((fruit) => fruit.id !== id));
    settest(0);
  };

  const AddEvent = useCallback(() => {
    setAddEvent(!addEvent);
    if (selectedDayMeetings.length > 0) {
      settest(1);
    } else {
      settest(0);
    }
  }, [addEvent]);

  const AddSecondEvent = useCallback(() => {
    setAddEvent(!addEvent);
    settest(0);
  }, [addEvent]);

  return (
    <Card scroll="overflow-scroll">
      <div className="flex flex-col h-full">
        <h2 className="font-semibold text-gray-900 dark:text-gray-300 text-center">
          Schedule for{" "}
          <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
            {format(selectedDay, "MMM dd, yyy")}
          </time>
        </h2>
        {!addEvent ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            onClick={AddEvent}
            className="w-5 h-5 cursor-pointer stroke-gray-400 dark:stroke-gray-400 hover:stroke-black dark:hover:stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-q   3"
            />
          </svg>
        ) : (
          <div />
        )}
        <ol
          className={`mt-4 ${
            test === 1
              ? "flex flex-col items-start overflow-scroll "
              : undefined
          } space-y-1 text-sm leading-6 text-gray-400 h-full`}
        >
          {test === 1 ? (
            selectedDayMeetings.map((meeting) => (
              <Meeting
                meeting={meeting}
                key={meeting.id}
                classNames={classNames}
                deleteById={deleteById}
              />
            ))
          ) : (
            <div className="h-full flex justify-between items-start">
              {addEvent ? (
                <>
                  <p>No plans for today.</p>
                  <Button addStyle="self-end" onClick={AddEvent}>
                    Add new plan
                  </Button>
                </>
              ) : (
                <div className="flex flex-col w-full h-full">
                  <form className="h-full" onSubmit={onSubmit}>
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex flex-col xxs:gap-4 gap-1">
                        <DefaultInput
                          placeholder="What are your plans ?"
                          type="text-area"
                          value={textArea}
                          onChange={(e) => setTextArea(e.target.value)}
                        />
                        <div className="flex xxs:flex-row xxs:flex-nowrap xxs:gap-4 xxs:items-baseline gap-1 flex-wrap content-center items-center flex-col">
                          <DefaultInput
                            type="time"
                            addStyle="w-2/4"
                            value={firstTime}
                            onChange={(e) => setFirstTime(e.target.value)}
                          />
                          To
                          <DefaultInput
                            type="time"
                            addStyle="w-2/4"
                            value={secondTime}
                            onChange={(e) => setSecondTime(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row-reverse">
                        <Button type="submit">Save</Button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </ol>
        {test === 1 ? (
          <Button addStyle="self-end" onClick={AddSecondEvent}>
            Add another plan
          </Button>
        ) : (
          <div />
        )}
      </div>
    </Card>
  );
}

export default Events;
