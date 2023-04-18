import { useState } from "react";

function ToDoTasks({ task }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      // eslint-disable-next-line no-param-reassign
      event.target.nextElementSibling.className =
        "w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 line-through";
    } else {
      // eslint-disable-next-line no-param-reassign
      event.target.nextElementSibling.className =
        "w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300";
    }
    setIsChecked(!isChecked);
  };

  return (
    <>
      {task.map((tasks) => (
        <div
          className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700"
          key={tasks.id}
        >
          <input
            id={tasks.id}
            type="checkbox"
            value={isChecked}
            name="checked"
            onChange={handleChange}
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
    </>
  );
}

export default ToDoTasks;
