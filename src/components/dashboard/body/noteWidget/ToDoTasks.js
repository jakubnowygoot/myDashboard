function ToDoTasks({ taskList, DeleteTask }) {
  const handleChange = (event) => {
    const e = event;
    if (e.target.checked) {
      e.target.nextElementSibling.className =
        "w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 line-through";
    } else {
      e.target.nextElementSibling.className =
        "w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300";
    }
  };
  return (
    <>
      {taskList.map((tasks) => (
        <div
          className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-600 dark:bg-gray-700"
          key={tasks.id}
        >
          <input
            id={tasks.id}
            type="checkbox"
            onChange={handleChange}
            className="w-4 h-4 border accent-primary-600 border-gray-300 rounded bg-gray-50 focus:ring-indigo-600 focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
          <label
            htmlFor={tasks.id}
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {tasks.task}
          </label>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 m-3 cursor-pointer dark:stroke-white"
              onClick={() => DeleteTask(tasks.id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}

export default ToDoTasks;
