import Button from "../../ui/Button";

function Notes() {
  return (
    <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96  dark:bg-gray-800 ">
      <h1 className="text-xl xs:text-3xl font-bold dark:text-gray-300 text-center p-4">
        Notes
      </h1>
      <div className="overflow-auto h-[63.5%] p-4 space-y-3.5">
        <div className="border-solid border-2 w-full rounded-3xl dark:bg-gray-700 dark:border-gray-600">
          <ul className="p-4">
            <li className="font-medium text-base xs:text-lg dark:text-white">
              Jurnay
            </li>
          </ul>
        </div>
        <div className="border-solid border-2 rounded-3xl dark:bg-gray-700 dark:border-gray-600">
          <ul className="p-4">
            <li className="font-medium text-base xs:text-lg dark:text-white">
              Jurnay
            </li>
          </ul>
        </div>
        <div className="border-solid border-2 rounded-3xl dark:bg-gray-700 dark:border-gray-600">
          <ul className="p-4">
            <li className="font-medium text-base xs:text-lg dark:text-white">
              Jurnay
            </li>
          </ul>
        </div>
        <div className="border-solid border-2 rounded-3xl dark:bg-gray-700 dark:border-gray-600">
          <ul className="p-4">
            <li className="font-medium text-base xs:text-lg dark:text-white">
              Jurnay
            </li>
          </ul>
        </div>
        <div className="border-solid border-2 rounded-3xl dark:bg-gray-700 dark:border-gray-600">
          <ul className="p-4">
            <li className="font-medium text-base xs:text-lg dark:text-white">
              Jurnay
            </li>
          </ul>
        </div>
        <div className="border-solid border-2 rounded-3xl dark:bg-gray-700 dark:border-gray-600">
          <ul className="p-4">
            <li className="font-medium text-base xs:text-lg dark:text-white">
              Jurnay
            </li>
          </ul>
        </div>
        <div className="border-solid border-2 rounded-3xl dark:bg-gray-700 dark:border-gray-600">
          <ul className="p-4">
            <li className="font-medium text-base xs:text-lg dark:text-white">
              Jurnay
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 flex justify-between">
        <div className="flex justify-center items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
          </label>
          <span className="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            To do
          </span>
        </div>
        <Button>Add</Button>
      </div>
    </div>
  );
}

export default Notes;
