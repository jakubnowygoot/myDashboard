import { Link } from "react-router-dom";
import DropDownMenuHome from "./DropDownMenuHome";
import DarkMode from "./DarkMode";

function NavBarHome({ isAuth }) {
  return (
    <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300 dark:border-gray-600 dark:bg-gray-800">
      <div className="w-full flex flex-wrap items-center justify-between flex-nowrap gap-2">
        <div className="flex items-center">
          <Link to="/dashboard">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
              My Dashboard
            </span>
          </Link>
        </div>
        <div className="flex flex-row gap-2">
          <DarkMode addStyle="hidden" />
          <DropDownMenuHome isAuth={isAuth} />
        </div>
      </div>
    </div>
  );
}

export default NavBarHome;
