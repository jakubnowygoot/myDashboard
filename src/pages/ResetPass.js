import CardEntry from "../components/entry/CardEntry";
import Button from "../components/ui/Button";
import InputPassword from "../components/ui/InputPassword";

function ResetPass() {
  return (
    <CardEntry>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Reset your password
      </h1>
      <form className="space-y-4 md:space-y-6" action="/login">
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

        <Button type="submit">Save</Button>
      </form>
    </CardEntry>
  );
}

export default ResetPass;
