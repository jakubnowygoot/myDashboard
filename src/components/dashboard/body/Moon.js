import axios from "axios";

import { useState } from "react";
import Button from "../../ui/Button";
import LoadingSpinner from "../../ui/LoadingSpinner";

const iconData = [
  "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z",
  "M9 0c-.265 0-.53.013-.795.04a7.985 7.985 0 0 0-.631.094c-.043.008-.087.011-.13.02a7.998 7.998 0 0 0 0 15.692c.043.009.087.012.13.02.208.037.417.073.631.094A8 8 0 1 0 9 0Zm0 15.5a7.46 7.46 0 0 1-1.668-.188 8.497 8.497 0 0 0 0-14.623A7.5 7.5 0 1 1 9 15.5Z",
  "M8 0c-.356.003-.712.03-1.065.079a7.992 7.992 0 0 0-.354 15.788h.001c.468.087.942.131 1.418.133A8 8 0 0 0 8 0Zm0 15.5a6.76 6.76 0 0 1-.725-.04A24.01 24.01 0 0 0 8.5 7.5 25.67 25.67 0 0 0 7.593.514C7.734.504 7.868.5 8 .5a7.5 7.5 0 1 1 0 15Z",
  "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 15a6.73 6.73 0 0 1-.948-.072.486.486 0 0 1-.24-.106A8.838 8.838 0 0 1 3.962 8 8.868 8.868 0 0 1 6.76 1.22a.702.702 0 0 1 .359-.157c.292-.04.586-.062.881-.063a7 7 0 0 1 0 14Z",
  "M8 1a7 7 0 1 1-7 7 7.008 7.008 0 0 1 7-7m0-1a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z",
  "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8Zm1 0a7.008 7.008 0 0 1 7-7c.295.001.59.022.881.063a.702.702 0 0 1 .36.157A8.868 8.868 0 0 1 12.036 8a8.838 8.838 0 0 1-2.849 6.822.486.486 0 0 1-.24.106A6.73 6.73 0 0 1 8 15a7.008 7.008 0 0 1-7-7Z",
  "M8 0a8.03 8.03 0 0 0-1.065.079 7.992 7.992 0 0 0-.354 15.788h.001c.468.087.942.131 1.418.133A8 8 0 0 0 8 0ZM1 8a7.008 7.008 0 0 1 6.204-6.951A25.25 25.25 0 0 1 8 7.5c.032 2.51-.328 5.01-1.067 7.41A7.005 7.005 0 0 1 1 8Z",
  "M10.555.154c-.042-.009-.085-.012-.129-.02A7.981 7.981 0 0 0 9.795.04a8 8 0 1 0 0 15.92 8.12 8.12 0 0 0 .631-.094c.043-.008.087-.011.13-.02a7.998 7.998 0 0 0 0-15.692h-.001Zm.113 15.158a7.499 7.499 0 1 1 0-14.623 8.497 8.497 0 0 0 0 14.623Z",
];

function Moon() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [newError, setNewError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const date = new Date();
  const day = `0${date.getUTCDate() + 1}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  const dateWithDay = date.toDateString();
  const currentDate = `${year}${month}${day}`;

  const key = "fed123ade789465db119dcf3d581e41a";

  const url = `https://devapi.qweather.com/v7/astronomy/moon?location=274D0&lang=en&date=${currentDate}&key=${key}`;

  const MoonData = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get(url);
      setData(resp.data.moonPhase[0]);
      setNewError(false);
      setIsLoaded(true);
    } catch (error) {
      setNewError(true);
    }
    setIsLoading(false);
  };

  function IconNumber() {
    const iconFullNumber = data.icon;
    return iconFullNumber ? iconFullNumber.slice(-1) : [];
  }

  return (
    <div className="rounded border-white bg-white dark:border-gray-700 border-2 h-96 dark:bg-gray-800">
      <Button onClick={MoonData} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div
          className={`${
            newError ? "hidden" : "block"
          } rounded flex justify-between h-full p-4 flex-col items-center`}
        >
          <div className="text-xl xs:text-3xl font-bold dark:text-gray-300">
            {dateWithDay}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="qi-804 w-40 h-40 xs:w-48 xs:h-48 dark:fill-gray-300"
            viewBox="0 0 16 16"
          >
            {isLoaded && <path d={`${iconData[`${IconNumber()}`]}`} />}
          </svg>
          <div className="flex flex-row justify-between mt-6 w-full">
            <div className="flex flex-col items-center">
              <div className="font-medium text-base xs:text-lg dark:text-white">
                Moon phase
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-300">
                {data.name}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-base xs:text-lg dark:text-white">
                Visibility
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                {data.illumination}%
              </span>
            </div>
          </div>
        </div>
      )}
      {newError && (
        <div className="flex flex-col justify-center items-center gap-4 h-full">
          <p className="text-lg dark:text-gray-300">
            We have problem getting the date please
          </p>
          <Button onClick={MoonData}>Try again</Button>
        </div>
      )}
    </div>
  );
}

export default Moon;
