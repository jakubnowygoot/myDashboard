import { useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

function DropDownMenu() {
  const [dropDownMenuHome, setDropDownMenuHome] = useState(false);
  const [toggleBurgerHome, setToggleBurgerHome] = useState(false);

  function BurgerHandler() {
    setToggleBurgerHome(!toggleBurgerHome);
  }

  function DropDownMenuHandler() {
    setDropDownMenuHome(!dropDownMenuHome);
  }

  function TwoFunctionBurger() {
    BurgerHandler();
    DropDownMenuHandler();
  }

  return (
    <div className="flex md:order-2">
      <Link to="/login">
        <button
          type="button"
          className="hidden md:flex md:text-white md:bg-primary-600 md:hover:bg-primary-700 md:focus:ring-4 md:focus:outline-none md:focus:ring-primary-300 md:font-medium md:rounded-lg md:text-sm md:px-5 md:py-2.5 md:text-center md:ml-3 md:mr-0 dark:md:hover:bg-primary-700 dark:md:focus:ring-primary-800 "
        >
          Login
        </button>
      </Link>
      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none dark:hover:bg-gray-700 ${
          toggleBurgerHome &&
          "bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600"
        }`}
        aria-controls="navbar-cta"
        aria-expanded="false"
        onClick={TwoFunctionBurger}
      >
        <svg
          className={`w-6 h-6 dark:fill-white ${
            toggleBurgerHome ? "fill-white" : "fill-black"
          }`}
          aria-hidden="true"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
        </svg>
      </button>
      {dropDownMenuHome && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 dark:bg-gray-700 rounded-lg shadow w-32 dark:bg-gray-800 absolute mt-12 mr-16 -ml-14 md:hidden"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <DarkMode addStyle="flex px-4 py-2" />
            <li>
              <Link to="/login">
                <div className="block text-black px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">
                  Login
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
