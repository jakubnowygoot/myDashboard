import { useCallback, useState } from "react";
import LeftColumn from "../components/dashboard/leftColumn/LeftColumn";
import SettingsMenu from "../components/dashboard/settings/SettingsMenu";
import NavBar from "../components/dashboard/navigationBar/NavBar";
import Weather from "../components/dashboard/body/Weather";
import Moon from "../components/dashboard/body/Moon";
import Card from "../components/dashboard/body/Card";
import WeatherDays from "../components/dashboard/body/WeatherDays";

function Dashboard() {
  const [settingsMenu, setSettingsMenu] = useState(false);

  const SettingsMenuHandler = useCallback(() => {
    setSettingsMenu(!settingsMenu);
  }, [settingsMenu]);

  return (
    <>
      {settingsMenu && <SettingsMenu onClick={SettingsMenuHandler} />}
      <div className="flex w-screen h-screen text-gray-700 dark:bg-gray-800  ">
        <LeftColumn />
        <div className="flex flex-col flex-grow">
          <div className="flex items-center flex-shrink-0 h-16 px-8 border-gray-300">
            <NavBar menuToggle={SettingsMenuHandler} />
          </div>
          <Card>
            <Weather />
            <Moon />
            <WeatherDays />
            <div className="rounded-l border-white bg-white dark:border-gray-700 border-2 h-96" />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
