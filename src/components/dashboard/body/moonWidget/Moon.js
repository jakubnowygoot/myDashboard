import axios from "axios";

import { useState } from "react";
import Button from "../../../ui/Button";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import ErrorMassage from "./ErrorMassage";
import MoonInfoRender from "./MoonData";

function Moon() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [newError, setNewError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const date = new Date();
  const day = `0${date.getUTCDate() + 1}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
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

  return (
    <div className="rounded border-white bg-white dark:border-gray-700 border-2 h-96 dark:bg-gray-800">
      <Button onClick={MoonData} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <MoonInfoRender isLoaded={isLoaded} data={data} newError={newError} />
          {newError && <ErrorMassage MoonData={MoonData} />}
        </>
      )}
    </div>
  );
}

export default Moon;
