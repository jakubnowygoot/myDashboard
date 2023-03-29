function Body() {
  return (
    <div className="flex-grow p-6 overflow-auto bg-gray-200 dark:bg-gray-700">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96">
          <div className="flex flex-col bg-white rounded p-4 w-full">
            <div className="font-bold text-xl">Sydney</div>
            <div className="text-sm text-gray-500">Thursday 10 May 2020</div>
            <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
              <svg
                className="w-32 h-32"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex flex-row items-center justify-center mt-6">
              <div className="font-medium text-6xl">24°</div>
              <div className="flex flex-col items-center ml-6">
                <div>Cloudy</div>
                <div className="mt-1">
                  <span className="text-sm" />

                  <span className="text-sm font-light text-gray-500">28°C</span>
                </div>
                <div>
                  <span className="text-sm font-light text-gray-500">20°C</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Wind</div>
                <div className="text-sm text-gray-500">9k/h</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Humidity</div>
                <div className="text-sm text-gray-500">68%</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Visibility</div>
                <div className="text-sm text-gray-500">10km</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96" />
        <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96" />
        <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96" />
      </div>
    </div>
  );
}

export default Body;
