import DropDownMenu from "./DropDownMenu";
import DarkMode from "./DarkMode";

function NavBar({ menuToggle }) {
  return (
    <div className="w-full flex flex-wrap items-center xs:justify-between justify-center gap-1 ">
      <a className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          My Dashboard
        </span>
      </a>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 ">
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-primary-600 bg-primary-600 rounded md:bg-transparent md:text-primary-600 md:p-0 dark:text-white"
              aria-current="page"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              onClick={menuToggle}
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 flex-row-reverse md:order-1 pl-2">
        <DropDownMenu menuToggle={menuToggle} />
        <DarkMode />
      </div>
    </div>
  );
}

export default NavBar;
