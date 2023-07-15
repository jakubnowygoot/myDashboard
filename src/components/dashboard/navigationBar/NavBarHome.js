import DropDownMenuHome from "./DropDownMenuHome";
import DarkMode from "./DarkMode";

function NavBarHome({ menuToggle }) {
  return (
    <div className="w-full flex flex-wrap items-center justify-between">
      <a className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          My Dashboard
        </span>
      </a>
      <div className="flex flex-row-reverse">
        <DarkMode />
        <DropDownMenuHome menuToggle={menuToggle} />
      </div>
    </div>
  );
}

export default NavBarHome;
