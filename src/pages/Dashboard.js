import { useCallback, useState } from "react";
import LeftColumn from "../components/dashboard/leftColumn/LeftColumn";
import SettingsMenu from "../components/dashboard/settings/SettingsMenu";
import NavBar from "../components/dashboard/navigationBar/NavBar";
import Weather from "../components/dashboard/body/Weather";
import Moon from "../components/dashboard/body/Moon";
import Card from "../components/dashboard/body/Card";
import WeatherDays from "../components/dashboard/body/WeatherDays";
import Notes from "../components/dashboard/body/Notes";

function Dashboard() {
  const [settingsMenu, setSettingsMenu] = useState(false);

  const SettingsMenuHandler = useCallback(() => {
    setSettingsMenu(!settingsMenu);
  }, [settingsMenu]);

  const weatherIcons = {
    Thunderstorm:
      "M8.46 12.626c-.054 0-.089-.05-.065-.093l.792-1.438C9.21 11.05 9.176 11 9.122 11H7.544a.147.147 0 0 0-.076.02.158.158 0 0 0-.058.057l-1.397 2.637c-.042.079.022.17.118.17h1.42c.05 0 .084.043.069.086l-.739 1.943c-.027.07.072.118.124.063l2.978-3.243c.04-.042.006-.107-.055-.107H8.46ZM3 13a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm8 0a1 1 0 0 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm-3.1-3c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z",
    Drizzle:
      "M8.534 12.125a.25.25 0 0 1 .433.25l-1.75 3.031a.25.25 0 1 1-.433-.25l1.75-3.031Zm4.25.7a.25.25 0 0 1 .432.25l-1 1.732a.25.25 0 1 1-.432-.25l1-1.732Zm-9 0a.25.25 0 0 1 .433.25l-1 1.732a.25.25 0 0 1-.433-.25l1-1.732ZM7.9 10c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z",
    Rain: "M4 14a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm6 0a1 1 0 0 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm-2.1-4c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z",
    Snow: "M5.501 12a.35.35 0 0 0-.35.35v.544l-.47-.272a.35.35 0 1 0-.35.606l.47.272-.47.272a.35.35 0 1 0 .35.606l.47-.272v.544a.35.35 0 1 0 .7 0v-.544l.47.272a.35.35 0 1 0 .35-.606l-.47-.272.47-.272a.35.35 0 1 0-.35-.606l-.47.272v-.544a.35.35 0 0 0-.35-.35Zm5 0a.35.35 0 0 0-.35.35v.544l-.47-.272a.35.35 0 1 0-.35.606l.47.272-.47.272a.35.35 0 1 0 .35.606l.47-.272v.544a.35.35 0 1 0 .7 0v-.544l.47.272a.35.35 0 1 0 .35-.606l-.47-.272.47-.272a.35.35 0 1 0-.35-.606l-.47.272v-.544a.35.35 0 0 0-.35-.35ZM7.9 10c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z",
    Atmosphere:
      "M.5 11a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm3 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm4.5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM4.5 15a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm3.4-5c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z",
    Clear:
      "M7.655 2.357a.5.5 0 0 0 .854-.353v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.353Zm-4.08 1.861c.06.026.126.039.191.039l.001-.001a.5.5 0 0 0 .355-.855l-1.064-1.06a.5.5 0 0 0-.707.708l1.062 1.06a.498.498 0 0 0 .162.11ZM.503 8.496h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm1.914 5.221a.501.501 0 0 0 .631-.063l1.063-1.06a.5.5 0 0 0-.708-.707l-1.062 1.06a.5.5 0 0 0 .076.77Zm5.225 2.14a.5.5 0 0 0 .854-.354v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.354Zm5.467-2.084a.5.5 0 0 0 .544-.816l-1.06-1.06a.498.498 0 0 0-.832.152.5.5 0 0 0 .126.555l1.06 1.06a.496.496 0 0 0 .162.109Zm.893-5.263h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm-2.031-4.327a.5.5 0 0 0 .633-.063l1.06-1.06a.5.5 0 1 0-.708-.708l-1.06 1.06a.5.5 0 0 0 .075.77Zm-6.466.075a4.5 4.5 0 1 1 5 7.484 4.5 4.5 0 0 1-5-7.484Zm4.445.832a3.5 3.5 0 1 0-3.89 5.82 3.5 3.5 0 0 0 3.89-5.82Z",
    Clouds:
      "M8.406 15.985a4.766 4.766 0 0 0 3.446-1.449.323.323 0 0 1 .341-.074c.31.112.645.173.995.173 1.553 0 2.812-1.209 2.812-2.7s-1.26-2.7-2.813-2.7c-.157 0-.312.013-.463.037a.32.32 0 0 1-.32-.137c-.824-1.29-2.306-2.15-3.998-2.15-1.682 0-3.157.85-3.984 2.128a.318.318 0 0 1-.3.138 2.962 2.962 0 0 0-.31-.016C2.26 9.235 1 10.444 1 11.935s1.26 2.7 2.813 2.7c.302 0 .594-.046.867-.13a.322.322 0 0 1 .324.076 4.768 4.768 0 0 0 3.402 1.404Zm3.661-2.606c-.161-.116-.41-.088-.52.074a3.788 3.788 0 0 1-3.14 1.632 3.792 3.792 0 0 1-3.091-1.56c-.106-.147-.326-.178-.482-.08-.294.183-.645.29-1.021.29-1.036 0-1.876-.806-1.876-1.8s.84-1.8 1.875-1.8c.241 0 .471.044.683.123.173.065.383-.008.455-.172.569-1.293 1.902-2.2 3.456-2.2 1.575 0 2.924.931 3.48 2.253.075.18.314.254.496.17.244-.111.517-.174.806-.174 1.035 0 1.874.806 1.874 1.8s-.839 1.8-1.874 1.8c-.42 0-.808-.132-1.12-.356ZM4.995 1.762a.516.516 0 1 0 1.007-.224L5.746.388A.516.516 0 0 0 4.74.612l.255 1.15ZM1.273 3.52l.994.633a.516.516 0 0 0 .555-.87l-.995-.633a.516.516 0 0 0-.554.87ZM.878 8.028l1.15-.256a.516.516 0 0 0-.223-1.008l-1.15.256a.516.516 0 1 0 .223 1.008Zm10.238-2.28a.535.535 0 0 0 .112-.012l1.15-.256a.516.516 0 1 0-.224-1.008l-1.15.256a.516.516 0 0 0 .112 1.02ZM8.772 2.713a.516.516 0 0 0 .712-.158l.633-.994a.516.516 0 0 0-.87-.554l-.633.994a.516.516 0 0 0 .158.712ZM3.07 7.017c.07.303.182.596.33.87a3.13 3.13 0 0 0 .909-.486 2.453 2.453 0 0 1-.233-.608 2.504 2.504 0 0 1 4.888-1.088c.003.013.002.026.005.038a5.42 5.42 0 0 1 1.063.25 3.497 3.497 0 0 0-.061-.512A3.535 3.535 0 1 0 3.07 7.017Z",
  };

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
            <Weather Icons={weatherIcons} />
            <Moon />
            <WeatherDays Icons={weatherIcons} />
            <Notes />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
