function WeatherDays({ Icons, daysData }) {
  return (
    <div className="rounded-l border-white dark:border-gray-700 border-2 h-96">
      <div className="flex flex-col justify-center items-center bg-white rounded p-4 h-full w-full dark:bg-gray-800 justify-between">
        {daysData.map((getData) => (
          <div
            className="flex flex-row items-center w-full justify-between"
            key={Math.random()}
          >
            <div className="flex flex-col w-20">
              <h1 className="font-medium text-base xs:text-lg sm:text-2xl md:text-lg dark:text-white">
                {new Date(getData.dt_txt.split(" ")[0]).toLocaleDateString(
                  "en-us",
                  {
                    weekday: "long",
                  }
                )}
                ,
              </h1>
              <p className="sm:text-xl md:text-sm font-light text-gray-500 dark:text-gray-300">
                {new Date(getData.dt_txt.split(" ")[0]).toLocaleDateString(
                  "en-us",
                  {
                    month: "short",
                    day: "numeric",
                  }
                )}
              </p>
            </div>
            {getData.weather ? (
              <p className="hidden xs:block sm:text-xl md:text-sm font-light text-gray-500 dark:text-gray-300  text-center">
                {getData.weather[0].main}
              </p>
            ) : null}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              className="qi-101 fill-primary-600"
              viewBox="0 0 16 16"
            >
              <path
                d={`${
                  Icons[
                    `${getData.weather ? `${getData.weather[0].main}` : null}`
                  ]
                }`}
              />
            </svg>
            <p className="font-medium text-base xs:text-lg sm:text-2xl md:text-lg dark:text-white text-center">
              {getData.main.temp_max.toFixed()}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDays;
