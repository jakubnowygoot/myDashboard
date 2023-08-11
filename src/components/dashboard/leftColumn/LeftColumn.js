import ProfilePicture from "./ProfilePicture";
import WeatherWidgetIcon from "./WeatherWidget";
import MoonWidgetIcon from "./MoonIcon";
import NoteWidgetIcon from "./NoteWidget";
import CalendarWidget from "./CalendarWidget";

function LeftColumn({
  setShowWeather,
  showWeather,
  setShowMoon,
  showMoon,
  setShowNote,
  showNote,
  RenderMoonData,
  showCalendar,
  setShowCalendar,
  setShowNextDays,
}) {
  return (
    <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-gray-300">
      <ProfilePicture />
      <WeatherWidgetIcon
        showWeather={showWeather}
        setShowWeather={setShowWeather}
        setShowNextDays={setShowNextDays}
      />
      <MoonWidgetIcon
        setShowMoon={setShowMoon}
        showMoon={showMoon}
        RenderMoonData={RenderMoonData}
      />
      <NoteWidgetIcon setShowNote={setShowNote} showNote={showNote} />
      <CalendarWidget
        showCalendar={showCalendar}
        setShowCalendar={setShowCalendar}
      />
    </div>
  );
}

export default LeftColumn;
