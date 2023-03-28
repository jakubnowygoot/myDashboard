import { Link } from "react-router-dom";
import CardStartPage from "../components/startPage/CardStartPage";
import Button from "../components/ui/Button";

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
          <Button type="button" addStyle="w-full mt-4 md:mt-6">
            Get Started
          </Button>
        </Link>
        <Link to="/login">
          <Button type="button" addStyle="w-full mt-4 md:mt-6">
            Learn more
          </Button>
        </Link>
      </div>
    </CardStartPage>
  );
}

export default HomePage;
