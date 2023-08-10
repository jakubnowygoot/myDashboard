function WeatherSection({ setUnits, units }) {
  return (
    <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
      <h2 className="md:w-1/3 max-w-sm mx-auto dark:text-gray-300">
        Weather Settings
      </h2>
      <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
        <div>
          <label
            htmlFor="units"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select units of measurement
          </label>
          <select
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            id="units"
            className="bg-gray-50 border border-gray-300 text-gray-900 outline-none sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none"
          >
            <option value="metric">Celsius</option>
            <option value="standard">Kelvin</option>
            <option value="imperial">Fahrenheit</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default WeatherSection;
