import { useCallback, useState } from "react";
import LeftColumn from "../components/dashboard/leftColumn/LeftColumn";
import Body from "../components/dashboard/body/Body";
import SettingsMenu from "../components/dashboard/settings/SettingsMenu";
import NavBar from "../components/dashboard/navigationBar/NavBar";

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
          <Body />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
