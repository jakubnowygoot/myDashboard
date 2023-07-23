import { moonIcons } from "../../data/MoonIcons";

function MoonInfoRender({ isLoaded, data, newError }) {
  const date = new Date();
  const dateWithDay = date.toDateString();

  function IconNumber() {
    const iconFullNumber = data.icon;
    return iconFullNumber ? iconFullNumber.slice(-1) : [];
  }

  return (
    <div
      className={`${
        newError ? "hidden" : "block"
      } rounded flex justify-between h-full p-4 flex-col items-center`}
    >
      <div className="text-2xl xs:text-3xl font-bold dark:text-gray-300 flex flex-col items-center">
        Moon phase <hr />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="qi-804 w-40 h-40 dark:fill-gray-300"
        viewBox="0 -1 17 17"
      >
        {isLoaded && <path d={`${moonIcons[`${IconNumber()}`]}`} />}
      </svg>
      <div className="flex flex-row justify-between mt-6 w-full">
        <div className="flex flex-col items-center">
          <div className="font-medium text-base xs:text-lg dark:text-white">
            {dateWithDay}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-300">
            {data.name}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-base xs:text-lg dark:text-white">
            Visibility
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            {data.illumination}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default MoonInfoRender;
