import { useState } from "react";
import { widgetIcons } from "../data/WidgetIcons";
import ProfilePicture from "./ProfilePicture";

function ToggleIcon({ d }) {
  const [toggleIcon, setToggleIcon] = useState(false);

  function handleClick() {
    setToggleIcon(!toggleIcon);
  }

  return (
    <button
      key={d}
      className={`flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${
        toggleIcon &&
        "bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600 "
      }`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={`w-5 h-5 dark:stroke-white ${
          toggleIcon ? "stroke-white" : "stroke-black"
        }`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </button>
  );
}

function LeftColumn() {
  return (
    <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-gray-300">
      <ProfilePicture />
      {widgetIcons.map((path) => (
        <ToggleIcon d={path.path} key={path.path} />
      ))}
    </div>
  );
}

export default LeftColumn;
