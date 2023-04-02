import axios from "axios";
import { useState } from "react";

function WeatherDays() {
  const [daysData, setDaysData] = useState([]);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=wroclaw&units=metric&appid=62bf8f2f137d858cde8784170789de51`;

  const weatherNextDays = async () => {
    try {
      const resp = await axios.get(url);
      setDaysData(
        resp.data.list.filter((reading) => reading.dt_txt.includes("12:00:00"))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96">
      <button onClick={weatherNextDays}>Check weather</button>
      <div className="flex flex-col justify-center items-center bg-white rounded p-4 h-full w-full dark:bg-gray-800 justify-between">
        {daysData.map((getData) => (
          <div
            className="flex flex-row items-center w-full justify-between"
            key={Math.random()}
          >
            <div className="flex flex-col">
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
              <p className="hidden xs:block sm:text-xl md:text-sm font-light text-gray-500 dark:text-gray-300">
                {getData.weather[0].description}
              </p>
            ) : null}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              className="qi-101 fill-primary-600"
              viewBox="0 0 16 16"
            >
              <path d="M8.406 15.985a4.766 4.766 0 0 0 3.446-1.449.323.323 0 0 1 .341-.074c.31.112.645.173.995.173 1.553 0 2.812-1.209 2.812-2.7s-1.26-2.7-2.813-2.7c-.157 0-.312.013-.463.037a.32.32 0 0 1-.32-.137c-.824-1.29-2.306-2.15-3.998-2.15-1.682 0-3.157.85-3.984 2.128a.318.318 0 0 1-.3.138 2.962 2.962 0 0 0-.31-.016C2.26 9.235 1 10.444 1 11.935s1.26 2.7 2.813 2.7c.302 0 .594-.046.867-.13a.322.322 0 0 1 .324.076 4.768 4.768 0 0 0 3.402 1.404Zm3.661-2.606c-.161-.116-.41-.088-.52.074a3.788 3.788 0 0 1-3.14 1.632 3.792 3.792 0 0 1-3.091-1.56c-.106-.147-.326-.178-.482-.08-.294.183-.645.29-1.021.29-1.036 0-1.876-.806-1.876-1.8s.84-1.8 1.875-1.8c.241 0 .471.044.683.123.173.065.383-.008.455-.172.569-1.293 1.902-2.2 3.456-2.2 1.575 0 2.924.931 3.48 2.253.075.18.314.254.496.17.244-.111.517-.174.806-.174 1.035 0 1.874.806 1.874 1.8s-.839 1.8-1.874 1.8c-.42 0-.808-.132-1.12-.356ZM4.995 1.762a.516.516 0 1 0 1.007-.224L5.746.388A.516.516 0 0 0 4.74.612l.255 1.15ZM1.273 3.52l.994.633a.516.516 0 0 0 .555-.87l-.995-.633a.516.516 0 0 0-.554.87ZM.878 8.028l1.15-.256a.516.516 0 0 0-.223-1.008l-1.15.256a.516.516 0 1 0 .223 1.008Zm10.238-2.28a.535.535 0 0 0 .112-.012l1.15-.256a.516.516 0 1 0-.224-1.008l-1.15.256a.516.516 0 0 0 .112 1.02ZM8.772 2.713a.516.516 0 0 0 .712-.158l.633-.994a.516.516 0 0 0-.87-.554l-.633.994a.516.516 0 0 0 .158.712ZM3.07 7.017c.07.303.182.596.33.87a3.13 3.13 0 0 0 .909-.486 2.453 2.453 0 0 1-.233-.608 2.504 2.504 0 0 1 4.888-1.088c.003.013.002.026.005.038a5.42 5.42 0 0 1 1.063.25 3.497 3.497 0 0 0-.061-.512A3.535 3.535 0 1 0 3.07 7.017Z" />
            </svg>
            <p className="font-medium text-base xs:text-lg sm:text-2xl md:text-lg  dark:text-white">
              {getData.main.temp_min.toFixed()}/
              {getData.main.temp_max.toFixed()}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDays;
