import { useState } from "react";

function MoonWidgetIcon() {
  const [toggleMoonIcon, setToggleMoonIcon] = useState(false);

  function handleClick() {
    setToggleMoonIcon(!toggleMoonIcon);
  }

  return (
    <button
      className={`flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${
        toggleMoonIcon &&
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
          toggleMoonIcon ? "stroke-white" : "stroke-black"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </button>
  );
}

export default MoonWidgetIcon;
