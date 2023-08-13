import { useState } from "react";

function ToDoSwitch({ ShowToDoHandler }) {
  const [notesSwitch, setNotesSwitch] = useState(
    localStorage.getItem("notesAndToDo") === "true"
  );
  return (
    <div className="flex justify-center items-center z-0">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          checked={notesSwitch}
          type="checkbox"
          className="sr-only peer"
          onChange={(e) => {
            localStorage.setItem("notesAndToDo", `${e.target.checked}`);
            setNotesSwitch(e.target.checked);
            ShowToDoHandler();
          }}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
      </label>
      <span className="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Notes
      </span>
    </div>
  );
}

export default ToDoSwitch;
