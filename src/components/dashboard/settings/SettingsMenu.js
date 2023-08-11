import Button from "../../ui/Button";
import CardSettings from "./CardSettings";
import ImageSection from "./ImageSection";
import AccountSection from "./AccountSection";
import InfoSection from "./InfoSection";
import PasswordSection from "./PasswordSection";
import WeatherSection from "./WeatherSection";

function SettingsMenu({ setSettingsMenu, settingsMenu, setUnits, units }) {
  const onSubmit = (event) => {
    event.preventDefault();
    setSettingsMenu(!settingsMenu);
  };
  return (
    <CardSettings>
      <form>
        <ImageSection />
        <div className="bg-white space-y-6 dark:bg-gray-800">
          <AccountSection />
          <hr className="dark:border-gray-600" />
          <InfoSection />
          <hr className="dark:border-gray-600" />
          <PasswordSection />
          <hr className="dark:border-gray-600" />
          <WeatherSection setUnits={setUnits} units={units} />
          <hr className="dark:border-gray-600" />
        </div>
        <div className="flex justify-end gap-6 w-full p-4 text-right text-gray-500 bg-white dark:bg-gray-800">
          <Button type="submit" onClick={onSubmit}>
            Save
          </Button>
          <Button type="button">Cancel</Button>
        </div>
      </form>
    </CardSettings>
  );
}

export default SettingsMenu;
