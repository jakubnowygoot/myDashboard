import { Link } from "react-router-dom";
import CardStartPage from "../components/startPage/CardStartPage";
import Button from "../components/ui/Button";
import HomeText from "../components/startPage/HomeText";

function HomePage() {
  return (
    <CardStartPage>
      <HomeText />
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
