import { useCallback, useState } from "react";
import axios from "axios";
import LeftColumn from "../components/dashboard/leftColumn/LeftColumn";
import SettingsMenu from "../components/dashboard/settings/SettingsMenu";
import NavBar from "../components/dashboard/navigationBar/NavBar";
import Weather from "../components/dashboard/body/weatherWidget/Weather";
import Card from "../components/dashboard/body/Card";
import WeatherDays from "../components/dashboard/body/weatherWidget/WeatherDays";
import Notes from "../components/dashboard/body/noteWidget/Notes";
import { weatherIcon } from "../components/dashboard/data/WeatherIcon";
import Moon from "../components/dashboard/body/moonWidget/Moon";

function Dashboard() {
  const [settingsMenu, setSettingsMenu] = useState(false);
  const [showNextDays, setShowNextDays] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showMoon, setShowMoon] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [location, setLocation] = useState("");
  const [daysData, setDaysData] = useState([]);

  const [dataMoon, setDataMoon] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [newError, setNewError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const date = new Date();
  const day = `0${date.getUTCDate() + 1}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  const currentDate = `${year}${month}${day}`;

  const keyMoon = "fed123ade789465db119dcf3d581e41a";
  const urlMoon = `https://devapi.qweather.com/v7/astronomy/moon?location=274D0&lang=en&date=${currentDate}&key=${keyMoon}`;

  const RenderMoonData = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get(urlMoon);
      setDataMoon(resp.data.moonPhase[0]);
      setNewError(false);
      setIsLoaded(true);
    } catch (error) {
      setNewError(true);
    }
    setIsLoading(false);
  };

  const key = "62bf8f2f137d858cde8784170789de51";

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${key}`;

  const SettingsMenuHandler = useCallback(() => {
    setSettingsMenu(!settingsMenu);
  }, [settingsMenu]);

  const getHour = new Date().getHours();

  function GetRightHour() {
    if (getHour % 3 === 0) {
      return getHour - 3;
    }
    if ((getHour - 2) % 3 === 0) {
      return getHour - 5;
    }
    if ((getHour - 1) % 3 === 0) {
      return getHour - 4;
    }
    if (getHour === 1 && 2) {
      return 6;
    }
  }

  const weatherNextDays = async () => {
    try {
      const resp = await axios.get(url);
      setDaysData(
        resp.data.list.filter((reading) =>
          reading.dt_txt.includes(`0${GetRightHour()}:00:00`.slice(-8))
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {settingsMenu && <SettingsMenu onClick={SettingsMenuHandler} />}
      <div className="flex w-screen h-screen text-gray-700 dark:bg-gray-800  ">
        <LeftColumn
          setShowWeather={setShowWeather}
          showWeather={showWeather}
          setShowMoon={setShowMoon}
          RenderMoonData={RenderMoonData}
          showMoon={showMoon}
          setShowNote={setShowNote}
          showNote={showNote}
        />
        <div className="flex flex-col flex-grow">
          <div className="flex items-center flex-shrink-0 h-16 px-8 border-gray-300">
            <NavBar menuToggle={SettingsMenuHandler} />
          </div>
          <Card>
            {showWeather && (
              <>
                <Weather
                  Icons={weatherIcon}
                  setShowNextDays={setShowNextDays}
                  showNextDays={showNextDays}
                  weatherNextDays={weatherNextDays}
                  location={location}
                  setLocation={setLocation}
                />
                {showNextDays ? (
                  <WeatherDays Icons={weatherIcon} daysData={daysData} />
                ) : null}
              </>
            )}
            {showMoon && (
              <Moon
                MoonData={RenderMoonData}
                dataMoon={dataMoon}
                isLoading={isLoading}
                newError={newError}
                isLoaded={isLoaded}
              />
            )}
            {showNote && <Notes />}
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
