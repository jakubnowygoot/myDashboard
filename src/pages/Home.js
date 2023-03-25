import { Link } from "react-router-dom";
import CardStartPage from "../components/startPage/CardStartPage";

function HomePage() {
  return (
    <CardStartPage>
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Understand Widget Power.
        <span className="sm:block"> Increase Conversion. </span>
      </h1>
      <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-gray-900 dark:text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/login">
          <button
            type="button"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4 md:mt-6"
          >
            Get Started
          </button>
        </Link>
        <Link to="/login">
          <button
            type="button"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4 md:mt-6"
          >
            Learn More
          </button>
        </Link>
      </div>
    </CardStartPage>
  );
}

export default HomePage;
