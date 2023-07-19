import { Link } from "react-router-dom";
import CardEntry from "../components/entry/CardEntry";
import DefaultInput from "../components/ui/inputs/DefaultInput";
import Button from "../components/ui/Button";
import NavBarHome from "../components/dashboard/navigationBar/NavBarHome";

function ForgotPass() {
  return (
    <>
      <NavBarHome />
      <CardEntry childrenStyle="sm:max-w-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Reset your password
        </h1>
        <p className="text-gray-400 text-xs">
          Enter your email and we we will send you link to reset your password.
        </p>
        <form className="space-y-4 md:space-y-6" action="/login">
          <DefaultInput
            htmlFor="email"
            type="email"
            name="email"
            id="email"
            placeholder="email@expample.com"
            requried
          />
          <Button type="submit" addStyle="w-28">
            Send link
          </Button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Go back to{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login page
            </Link>
          </p>
        </form>
      </CardEntry>
    </>
  );
}

export default ForgotPass;
