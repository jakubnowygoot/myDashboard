import { useState } from "react";
import DefaultInput from "../../../ui/inputs/DefaultInput";

function ToDoSection() {
  const [taskText, setTaskText] = useState("");
  const [task, setTask] = useState([]);

  const AddNewTask = () => {
    const newNote = {
      id: Math.random(),
      task: taskText,
    };
    const newNotes = [...task, newNote];
    setTask(newNotes);
  };

  function handleKeyPress(enter) {
    if (enter.key === "Enter" && taskText.length > 0) {
      AddNewTask();
      setTaskText("");
    }
  }

  return (
    <>
      <div className="px-4 pb-2">
        <DefaultInput
          value={taskText}
          placeholder="Task to do"
          onChange={(e) => setTaskText(e.target.value)}
          onKeyUp={(enter) => handleKeyPress(enter)}
        />
      </div>
      <div className="overflow-auto h-[48.3%] p-4 pt-2 space-y-3.5">
        {task.map((tasks) => (
          <div
            className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700"
            key={tasks.id}
          >
            <input
              id={tasks.id}
              type="checkbox"
              value=""
              name="checked"
              className="w-4 h-4 border accent-primary-600 border-gray-300 rounded bg-gray-50 focus:ring-indigo-600 focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            />
            <label
              htmlFor={tasks.id}
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {tasks.task}
            </label>
          </div>
        ))}
        <hr />
        <p className="text-center font-medium text-base xs:text-lg dark:text-white">
          Done
        </p>
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-checkbox-2"
            type="checkbox"
            value=""
            name="checked"
            className="w-4 h-4 border accent-primary-600 border-gray-300 rounded bg-gray-50 focus:ring-indigo-600 focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
          <label
            htmlFor="bordered-checkbox-2"
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 line-through"
          >
            Default radio
          </label>
        </div>
      </div>
    </>
  );
}

export default ToDoSection;
