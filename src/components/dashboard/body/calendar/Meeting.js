import { format, parseISO } from "date-fns";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

function Meeting({
  meeting,
  classNames,
  EditEvent,
  setEvents,
  selectedDayMeetings,
  setCheckEvent,
}) {
  const startDateTime = parseISO(meeting.startDatetime);
  const endDateTime = parseISO(meeting.endDatetime);

  function deleteById(id) {
    setEvents((oldValues) => oldValues.filter((event) => event.id !== id));
    if (selectedDayMeetings.length - 1 > 0) {
      setCheckEvent(1);
    } else {
      setCheckEvent(0);
    }
  }

  return (
    <li className="flex w-full items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 dark:focus-within:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="flex-auto break-words	w-0.5	">
        <p className="text-gray-900 dark:text-white">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, "H:mm")}
          </time>{" "}
          -{" "}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, "H:mm")}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white">
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={() => EditEvent(meeting)}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900 dark:hover:bg-gray-700 "
                        : "text-gray-700 dark:text-white",
                      "block px-4 py-2 text-sm dark:text-white"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={() => deleteById(meeting.id)}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900 dark:hover:bg-gray-700 "
                        : "text-gray-700 dark:text-white",
                      "block px-4 py-2 text-sm dark:text-white"
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}
export default Meeting;
