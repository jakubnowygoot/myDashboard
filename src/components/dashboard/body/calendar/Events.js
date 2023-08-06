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
  setCheckEvent,
  selectedDayMeetings,
  checkEvent,
  setTextArea,
  setFirstTime,
  setSecondTime,
  textArea,
  firstTime,
  secondTime,
  setCheckEdit,
  checkEdit,
}) {
  const [editId, setEditId] = useState("");

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
    setCheckEvent(1);
  };

  const AddEvent = useCallback(() => {
    setAddEvent(!addEvent);
    if (selectedDayMeetings.length > 0) {
      setCheckEvent(1);
    } else {
      setCheckEvent(0);
    }
    setTextArea("");
    setFirstTime("");
    setSecondTime("");
  }, [addEvent]);

  const AddSecondEvent = useCallback(() => {
    setAddEvent(!addEvent);
    setCheckEvent(0);
  }, [addEvent]);

  const EditEvent = useCallback(
    (meeting) => {
      setAddEvent(false);
      setCheckEvent(0);
      setTextArea(meeting.name);
      setFirstTime(meeting.startDatetime.slice(-5));
      setSecondTime(meeting.endDatetime.slice(-5));
      setEditId(meeting.id);
      setCheckEdit(true);
    },
    [addEvent]
  );

  const SaveEditedEvent = () => {
    const tempArray = [...events];
    const index = tempArray.findIndex((element) => element.id === editId);
    tempArray[index] = {
      id: Math.random(),
      name: textArea,
      startDatetime: `${format(selectedDay, "yyyy-MM-dd")}T${firstTime}`,
      endDatetime: `${format(selectedDay, "yyyy-MM-dd")}T${secondTime}`,
    };
    setEvents(tempArray);
    setTextArea("");
    setFirstTime("");
    setSecondTime("");
    setCheckEvent(1);
    setAddEvent(true);
    setCheckEdit(false);
  };

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
            className="w-6 h-6 cursor-pointer stroke-gray-400 dark:stroke-gray-400 hover:stroke-black dark:hover:stroke-white"
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
          className={`xxs:mt-4 ${
            checkEvent === 1
              ? "flex flex-col items-start overflow-scroll "
              : undefined
          } space-y-1 text-sm leading-6 text-gray-400 h-full`}
        >
          {checkEvent === 1 ? (
            selectedDayMeetings.map((meeting) => (
              <Meeting
                EditEvent={EditEvent}
                meeting={meeting}
                key={meeting.id}
                classNames={classNames}
                setEvents={setEvents}
                setCheckEvent={setCheckEvent}
                selectedDayMeetings={selectedDayMeetings}
              />
            ))
          ) : (
            <div className="h-full flex justify-between items-start">
              {addEvent ? (
                <>
                  <p>No plans for today.</p>
                  <Button addStyle="self-end" onClick={AddSecondEvent}>
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
                            addSecondStyle="mb-0"
                            type="time"
                            addStyle="w-2/4"
                            value={secondTime}
                            onChange={(e) => setSecondTime(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row-reverse">
                        {checkEdit ? (
                          <Button onClick={SaveEditedEvent}>Save</Button>
                        ) : (
                          <Button type="submit">Save</Button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </ol>
        {checkEvent === 1 ? (
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
