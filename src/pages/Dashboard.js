import { useCallback, useEffect, useState } from "react";
import { isSameDay, parseISO, startOfToday } from "date-fns";
import axios from "axios";
import LeftColumn from "../components/dashboard/leftColumn/LeftColumn";
import SettingsMenu from "../components/dashboard/settings/SettingsMenu";
import NavBar from "../components/dashboard/navigationBar/NavBar";
import Weather from "../components/dashboard/body/weatherWidget/Weather";
import Card from "../components/dashboard/body/Card";
import WeatherDays from "../components/dashboard/body/weatherWidget/WeatherDays";
import { weatherIcon } from "../components/dashboard/data/WeatherIcon";
import Moon from "../components/dashboard/body/moonWidget/Moon";
import { GetRightHour } from "../components/ui/RightHour";
import Calendar from "../components/dashboard/body/calendar/Calendar";
import Events from "../components/dashboard/body/calendar/Events";
import Notes from "../components/dashboard/body/noteWidget/Notes";

function Dashboard() {
  const today = startOfToday();
  const [settingsMenu, setSettingsMenu] = useState(false);
  const [showNextDays, setShowNextDays] = useState(false);
  const [location, setLocation] = useState("");
  const [daysData, setDaysData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newError, setNewError] = useState(false);
  const [selectedDay, setSelectedDay] = useState(today);
  const [addEvent, setAddEvent] = useState(true);
  const [checkEvent, setCheckEvent] = useState(0);
  const [textArea, setTextArea] = useState("");
  const [firstTime, setFirstTime] = useState("");
  const [secondTime, setSecondTime] = useState("");
  const [checkEdit, setCheckEdit] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");
  const [temperature, setTemperature] = useState("");
  const [events, setEvents] = useState(() => {
    const savedStateCalendar = localStorage.getItem("calendarData");
    const calendarData = JSON.parse(savedStateCalendar);
    return calendarData || [];
  });

  const [showNote, setShowNote] = useState(
    JSON.parse(localStorage.getItem("note")) || false
  );
  const [showCalendar, setShowCalendar] = useState(
    JSON.parse(localStorage.getItem("calendar")) || false
  );
  const [dataMoon, setDataMoon] = useState(() => {
    const savedStateMoon = localStorage.getItem("moonData");
    const moonData = JSON.parse(savedStateMoon);
    return moonData || {};
  });
  const [showWeather, setShowWeather] = useState(
    JSON.parse(localStorage.getItem("weather")) || false
  );
  const [showMoon, setShowMoon] = useState(
    JSON.parse(localStorage.getItem("moon")) || false
  );
  const [mainProfilePicture, setMainProfilePicture] = useState(
    JSON.parse(localStorage.getItem("profilePicture")) || []
  );
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem("name")) || []
  );
  const [telNumber, setTelNumber] = useState(
    JSON.parse(localStorage.getItem("telNumber")) || []
  );

  const [units, setUnits] = useState(
    JSON.parse(localStorage.getItem("units")) || "metric"
  );

  const date = new Date();
  const day = `0${date.getUTCDate() + 1}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  const currentDate = `${year}${month}${day}`;
  const keyMoon = "fed123ade789465db119dcf3d581e41a";
  const urlMoon = `https://devapi.qweather.com/v7/astronomy/moon?location=274D0&lang=en&date=${currentDate}&key=${keyMoon}`;
  const keyWeather = "62bf8f2f137d858cde8784170789de51";
  const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&appid=${keyWeather}`;

  const selectedDayMeetings = events.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  useEffect(() => {
    localStorage.setItem("units", JSON.stringify(units));
  }, [units]);

  useEffect(() => {
    localStorage.setItem("telNumber", JSON.stringify(telNumber));
  }, [telNumber]);

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    if (mainProfilePicture.length === 0) {
      console.log("sad");
    } else {
      localStorage.setItem(
        "profilePicture",
        JSON.stringify(mainProfilePicture)
      );
    }
  }, [mainProfilePicture]);

  useEffect(() => {
    localStorage.setItem("calendarData", JSON.stringify(events));
  }, [events]);
  useEffect(() => {
    localStorage.setItem("weather", showWeather.toString());
  }, [showWeather]);

  useEffect(() => {
    localStorage.setItem("moon", showMoon.toString());
  }, [showMoon]);

  useEffect(() => {
    localStorage.setItem("moonData", JSON.stringify(dataMoon));
  }, [dataMoon]);

  useEffect(() => {
    localStorage.setItem("calendar", JSON.stringify(showCalendar));
  }, [showCalendar]);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(showNote));
  }, [showNote]);

  const RenderMoonData = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get(urlMoon);
      setDataMoon(resp.data.moonPhase[0]);
      setNewError(false);
    } catch (error) {
      setNewError(true);
    }
    setIsLoading(false);
  };

  const weatherNextDays = async () => {
    try {
      const resp = await axios.get(urlWeather);
      setDaysData(
        resp.data.list.filter((reading) =>
          reading.dt_txt.includes(`0${GetRightHour()}:00:00`.slice(-8))
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const SettingsMenuHandler = useCallback(() => {
    setSettingsMenu(!settingsMenu);
  }, [settingsMenu]);

  return (
    <>
      {settingsMenu && (
        <SettingsMenu
          setSettingsMenu={setSettingsMenu}
          settingsMenu={settingsMenu}
          setUnits={setUnits}
          units={units}
          setProfilePicture={setProfilePicture}
          profilePicture={profilePicture}
          setMainProfilePicture={setMainProfilePicture}
          name={name}
          setName={setName}
          setTelNumber={setTelNumber}
          telNumber={telNumber}
        />
      )}
      <div className="flex w-screen h-screen text-gray-700 dark:bg-gray-800  ">
        <LeftColumn
          setShowWeather={setShowWeather}
          showWeather={showWeather}
          setShowMoon={setShowMoon}
          RenderMoonData={RenderMoonData}
          showMoon={showMoon}
          setShowNote={setShowNote}
          showNote={showNote}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          setShowNextDays={setShowNextDays}
          mainProfilePicture={mainProfilePicture}
        />
        <div className="flex flex-col flex-grow">
          <div className="flex items-center flex-shrink-0 h-16 px-8 border-gray-300">
            <NavBar menuToggle={SettingsMenuHandler} />
          </div>
          <Card>
            {showCalendar && (
              <Calendar
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                setAddEvent={setAddEvent}
                events={events}
                setCheckEvent={setCheckEvent}
                setFirstTime={setFirstTime}
                setSecondTime={setSecondTime}
                setTextArea={setTextArea}
                setCheckEdit={setCheckEdit}
              />
            )}
            {showCalendar && (
              <Events
                selectedDay={selectedDay}
                addEvent={addEvent}
                setAddEvent={setAddEvent}
                setEvents={setEvents}
                events={events}
                selectedDayMeetings={selectedDayMeetings}
                setCheckEvent={setCheckEvent}
                checkEvent={checkEvent}
                textArea={textArea}
                setTextArea={setTextArea}
                firstTime={firstTime}
                setFirstTime={setFirstTime}
                secondTime={secondTime}
                setSecondTime={setSecondTime}
                setCheckEdit={setCheckEdit}
                checkEdit={checkEdit}
              />
            )}
            {showWeather && (
              <>
                <Weather
                  Icons={weatherIcon}
                  setShowNextDays={setShowNextDays}
                  showNextDays={showNextDays}
                  weatherNextDays={weatherNextDays}
                  location={location}
                  setLocation={setLocation}
                  units={units}
                  setTemperature={setTemperature}
                  temperature={temperature}
                />
                {showNextDays ? (
                  <WeatherDays
                    Icons={weatherIcon}
                    daysData={daysData}
                    temperature={temperature}
                  />
                ) : null}
              </>
            )}
            {showMoon && (
              <Moon
                RenderMoonData={RenderMoonData}
                dataMoon={dataMoon}
                isLoading={isLoading}
                newError={newError}
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
