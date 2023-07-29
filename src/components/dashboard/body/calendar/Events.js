import { format, isSameDay, parseISO } from "date-fns";
import Card from "./Card";
import { meetings } from "./EventsData";
import Meeting from "./Meeting";
import DefaultInput from "../../../ui/inputs/DefaultInput";
import Button from "../../../ui/Button";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Events({ selectedDay, setAddEvent, addEvent }) {
  const selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  function AddEvent() {
    setAddEvent(!addEvent);
  }

  function test() {
    console.log();
  }

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
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-400 h-full ">
          {selectedDayMeetings.length > 0 ? (
            selectedDayMeetings.map((meeting) => (
              <Meeting
                meeting={meeting}
                key={meeting.id}
                classNames={classNames}
              />
            ))
          ) : (
            <div className="h-full flex justify-between items-start">
              {addEvent ? (
                <>
                  <p>No meetings for today.</p>
                  <button onClick={AddEvent}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 stroke-gray-400 dark:stroke-gray-400 hover:stroke-black dark:hover:stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <div className="flex flex-col w-full h-full">
                  <form className="h-full">
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex flex-col gap-4 ">
                        <DefaultInput
                          placeholder="What are your plans ?"
                          type="text-area"
                        />
                        <div className="flex gap-4 items-baseline">
                          <DefaultInput type="time" addStyle="w-2/4" />
                          To
                          <DefaultInput type="time" addStyle="w-2/4" />
                        </div>
                      </div>
                      <div className="flex flex-row-reverse">
                        <Button onClick={test()} type="submit">
                          Add
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </ol>
      </div>
    </Card>
  );
}

export default Events;
