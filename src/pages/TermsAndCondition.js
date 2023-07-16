import { Link } from "react-router-dom";
import CardEntry from "../components/entry/CardEntry";
import Button from "../components/ui/Button";
import TermsText from "../components/entry/registerFom/TermsText";
import NavBarHome from "../components/dashboard/navigationBar/NavBarHome";

function TermsAndCondition() {
  return (
    <>
      <NavBarHome />
      <CardEntry
        childrenStyle="overflow-auto sm:max-w-3xl"
        parentStyle="lg:py-8 lg:px-6"
        darkStyle="dark:text-white"
      >
        <TermsText />
        <Link to="/register">
          <Button type="button" addStyle="w-full mt-4 md:mt-6">
            Go back
          </Button>
        </Link>
      </CardEntry>
    </>
  );
}

export default TermsAndCondition;
