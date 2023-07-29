import { format, isSameDay, parseISO } from "date-fns";
import Card from "./Card";
import { meetings } from "./EventsData";
import Meeting from "./Meeting";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Events({ selectedDay }) {
  const selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <Card>
      <div>
        <h2 className="font-semibold text-gray-900 dark:text-gray-300">
          Schedule for{" "}
          <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
            {format(selectedDay, "MMM dd, yyy")}
          </time>
        </h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500 ">
          {selectedDayMeetings.length > 0 ? (
            selectedDayMeetings.map((meeting) => (
              <Meeting
                meeting={meeting}
                key={meeting.id}
                classNames={classNames}
              />
            ))
          ) : (
            <p>No meetings for today.</p>
          )}
        </ol>
      </div>
    </Card>
  );
}

export default Events;
