import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import DefaultInput from "../../ui/inputs/DefaultInput";
import InputPassword from "../../ui/inputs/InputPassword";
import RememberMe from "./RememberMe";

function Form() {
  return (
    <form className="space-y-4 md:space-y-6" action="/dashboard">
      <DefaultInput
        htmlFor="email"
        type="email"
        name="email"
        id="email"
        placeholder="email@expample.com"
        requried
      >
        Your Email
      </DefaultInput>

      <InputPassword htmlFor="password" name="password" id="password">
        Password
      </InputPassword>

      <div className="flex items-center justify-between">
        <RememberMe />
      </div>
      <div className="flex justify-center">
        <Button type="submit" addStyle="w-28">
          Login
        </Button>
      </div>

      <div className="flex justify-center flex-col items-center gap-2">
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Did you{" "}
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            forget password?
          </Link>
        </p>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <Link
            to="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Form;
