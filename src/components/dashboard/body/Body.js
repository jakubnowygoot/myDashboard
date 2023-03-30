import Weather from "./Weather";
import Moon from "./Moon";

function Body() {
  return (
    <div className="flex-grow p-6 overflow-auto bg-gray-200 dark:bg-gray-700">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        <Weather />
        <Moon />
        <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96" />
        <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96" />
      </div>
    </div>
  );
}

export default Body;
