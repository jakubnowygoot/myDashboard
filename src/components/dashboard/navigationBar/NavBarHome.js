import { Link } from "react-router-dom";
import DropDownMenuHome from "./DropDownMenuHome";

function NavBarHome({ menuToggle }) {
  return (
    <div className="w-full flex flex-wrap items-center justify-between">
      <a className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          My Dashboard
        </span>
      </a>
      <DropDownMenuHome menuToggle={menuToggle} />
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 ">
          <li>
            <Link to="/">
              <a
                className="block py-2 pl-3 pr-4 text-primary-600 bg-primary-600 rounded md:bg-transparent md:text-primary-600 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a
                className="block py-2 pl-3 pr-4 text-primary-600 bg-primary-600 rounded md:bg-transparent md:text-primary-600 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarHome;
