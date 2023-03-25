import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import InputPassword from "../../ui/InputPassword";
import RememberMe from "./RememberMe";

function Form() {
  return (
    <form className="space-y-4 md:space-y-6" action="src/components/entry#">
      <Input
        htmlFor="email"
        type="email"
        name="email"
        id="email"
        placeholder="email@expample.com"
      >
        Your Email
      </Input>

      <InputPassword
        htmlFor="password"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
      >
        Password
      </InputPassword>

      <div className="flex items-center justify-between">
        <RememberMe />

        <Link
          to="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" href="/">
        Sign in
      </Button>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          to="#"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default Form;
