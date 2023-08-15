import DefaultInput from "../../ui/inputs/DefaultInput";
import InputPassword from "../../ui/inputs/InputPassword";
import TermsElem from "./TermsElem";

function Form() {
  return (
    <form className="space-y-4 md:space-y-6" action="/login">
      <DefaultInput
        htmlFor="fullName"
        type="text"
        name="fullName"
        id="fullName"
        placeholder="John Smith"
      >
        Full name
      </DefaultInput>

      <DefaultInput
        htmlFor="email"
        type="email"
        name="email"
        id="email"
        placeholder="email@expample.com"
      >
        Your email
      </DefaultInput>

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
    </form>
  );
}

export default Form;
