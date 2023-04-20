import ProfilePicture from "./ProfilePicture";
import WeatherWidgetIcon from "./WeatherWidget";
import MoonWidgetIcon from "./MoonIcon";
import NoteWidgetIcon from "./NoteWidget";

function LeftColumn() {
  return (
    <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-gray-300">
      <ProfilePicture />
      <WeatherWidgetIcon />
      <MoonWidgetIcon />
      <NoteWidgetIcon />
    </div>
  );
}

export default LeftColumn;
