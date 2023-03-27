import { useState } from "react";
import LeftIcons from "../components/dashboard/icons/LeftIcons";

function Dashboard() {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [toggleBurger, setToggleBurger] = useState(false);

  function BurgerHandler() {
    setToggleBurger(!toggleBurger);
  }

  function DropDownMenuHandler() {
    setDropDownMenu(!dropDownMenu);
  }

  function TwoFunctionBurger() {
    BurgerHandler();
    DropDownMenuHandler();
  }

  return (
    <div className="flex w-screen h-screen text-gray-700">
      <LeftIcons />
      <div className="flex flex-col flex-grow">
        <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                My Dashboard
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="hidden md:flex md:text-white md:bg-primary-600 md:hover:bg-primary-700 md:focus:ring-4 md:focus:outline-none md:focus:ring-primary-300 md:font-medium md:rounded-lg md:text-sm md:px-5 md:py-2.5 md:text-center md:mr-3 md:mr-0 md:dark:bg-blue-600 md:dark:hover:bg-blue-700 md:dark:focus:ring-blue-800"
              >
                Log in
              </button>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
                  toggleBurger && "bg-primary-600 hover:bg-primary-600"
                }`}
                aria-controls="navbar-cta"
                aria-expanded="false"
                onClick={TwoFunctionBurger}
              >
                <svg
                  className={`w-6 h-6 ${
                    toggleBurger ? "fill-white" : "fill-black"
                  }`}
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
              </button>

              {dropDownMenu && (
                <div
                  id="dropdown"
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 absolute mt-12 mr-16 -ml-14 md:hidden"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block text-black px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-black px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Calendar
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-black px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-black px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                  >
                    Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-grow p-6 overflow-auto bg-gray-200">
          <div className="grid grid-cols-3 gap-6">
            <div className="h-24 col-span-1 bg-white border border-gray-300" />
            <div className="h-24 col-span-1 bg-white border border-gray-300" />
            <div className="h-24 col-span-1 bg-white border border-gray-300" />
            <div className="h-24 col-span-2 bg-white border border-gray-300" />
            <div className="h-24 col-span-2 bg-white border border-gray-300" />
            <div className="h-24 col-span-2 bg-white border border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
