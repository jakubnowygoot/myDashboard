import { Link } from "react-router-dom";
import Input from "../../ui/Input";
import InputPassword from "../../ui/InputPassword";
import TermsElem from "./TermsElem";
import Button from "../../ui/Button";

function Form() {
  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <Input
        htmlFor="fullName"
        type="text"
        name="fullName"
        id="fullName"
        placeholder="John Smith"
      >
        Full name
      </Input>

      <Input
        htmlFor="email"
        type="email"
        name="email"
        id="email"
        placeholder="email@expample.com"
      >
        Your email
      </Input>

      <InputPassword htmlFor="password" name="password" id="password">
        Password
      </InputPassword>

      <InputPassword
        htmlFor="confirmPassword"
        name="confirmPassword"
        id="confirmPassword"
      >
        Confirm password
      </InputPassword>

      <TermsElem />

      <Button type="submit" addStyle="w-full mt-4 md:mt-6">
        Sign in
      </Button>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Login here
        </Link>
      </p>
    </form>
  );
}

export default Form;
