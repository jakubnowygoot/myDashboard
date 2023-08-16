import { Link } from "react-router-dom";
import NavBarHome from "../components/dashboard/navigationBar/NavBarHome";
import CardEntry from "../components/entry/CardEntry";

function ErrorPage({ setIsAuth }) {
  return (
    <>
      <NavBarHome setIsAuth={setIsAuth} />
      <CardEntry childrenStyle="sm:max-w-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Page Not Found
        </h1>
        <p className="dark:text-white">
          Looks like you have followed a broken link or entered a URL that does
          not exist on the site.
        </p>
        <p className="text-sm font-extralight text-gray-500 dark:text-gray-400  whitespace-nowrap flex gap-1 flex-wrap">
          If you do not want to visit that page,you can
          <Link
            to="/"
            className=" text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            return to the home page
          </Link>
        </p>
      </CardEntry>
    </>
  );
}

export default ErrorPage;
