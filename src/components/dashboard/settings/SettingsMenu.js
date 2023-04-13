import Button from "../../ui/Button";
import CardSettings from "./CardSettings";
import ImageSection from "./ImageSection";
import AccountSection from "./AccountSection";
import InfoSection from "./InfoSection";
import PasswordSection from "./PasswordSection";

function SettingsMenu({ onClick }) {
  return (
    <CardSettings>
      <ImageSection />
      <div className="bg-white space-y-6 dark:bg-gray-800">
        <AccountSection />
        <hr />
        <InfoSection />
        <hr />
        <PasswordSection />
        <hr />
      </div>
      <div className="flex justify-end gap-6 w-full p-4 text-right text-gray-500 bg-white dark:bg-gray-800">
        <Button type="button" onClick={onClick}>
          Save
        </Button>
        <Button type="button" onClick={onClick}>
          Cancel
        </Button>
      </div>
    </CardSettings>
  );
}

export default SettingsMenu;
