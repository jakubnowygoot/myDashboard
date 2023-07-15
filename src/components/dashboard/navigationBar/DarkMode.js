import { useState } from "react";

function DarkMode() {
  const [darkModeActive, setDarkModeActive] = useState(false);

  function ChangeDarkModeIcon() {
    setDarkModeActive(!darkModeActive);
    if (darkModeActive === false) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }

  return (
    <div className="flex justify-center items-center z-0 gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={`w-5 h-5 dark:stroke-white ${
          darkModeActive ? "stroke-gray-400" : "stroke-black"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
      <label className="relative inline-flex items-center cursor-pointer ">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={ChangeDarkModeIcon}
        />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={`w-5 h-5 dark:stroke-white ${
          darkModeActive ? "stroke-black" : "stroke-gray-400"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </div>
  );
}

export default DarkMode;
