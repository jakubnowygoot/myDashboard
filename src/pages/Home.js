import { Link } from "react-router-dom";
import CardStartPage from "../components/startPage/CardStartPage";
import Button from "../components/ui/Button";
import HomeText from "../components/startPage/HomeText";
import NavBarHome from "../components/dashboard/navigationBar/NavBarHome";

function HomePage() {
  return (
    <>
      <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
        <NavBarHome />
      </div>
      <CardStartPage>
        <HomeText />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/register">
            <Button type="button" addStyle="w-full mt-4 md:mt-6">
              Get Started
            </Button>
          </Link>
        </div>
      </CardStartPage>
    </>
  );
}

export default HomePage;
