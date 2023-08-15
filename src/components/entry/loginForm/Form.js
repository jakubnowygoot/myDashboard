import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import DefaultInput from "../../ui/inputs/DefaultInput";
import InputPassword from "../../ui/inputs/InputPassword";
import RememberMe from "./RememberMe";

function Form({ setIsAuth, isAuth }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [wongPass, setWrongPass] = useState(
    JSON.parse(localStorage.getItem("passCheck")) || false
  );

  useEffect(() => {
    localStorage.setItem("passCheck", JSON.stringify(wongPass));
  }, [wongPass]);

  const onSubmit = () => {
    setWrongPass(false);
    if (password === "test123" && email === "test123@gmail.com") {
      setIsAuth(true);
    }
    setWrongPass(true);
    return false;
  };

  useEffect(() => {
    setTimeout(() => {
      setWrongPass(false);
    }, 2000);
  }, [onSubmit]);

  return (
    <form
      className="space-y-4 md:space-y-6"
      action={isAuth ? "/dashboard" : ""}
    >
      <DefaultInput
        type="email"
        id="email"
        placeholder={
          wongPass ? "Invalid password or email" : "email@expample.com"
        }
        requried
        onChange={(e) => setEmail(e.target.value)}
      >
        Your Email
      </DefaultInput>

      <InputPassword
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      >
        Password
      </InputPassword>

      <div className="flex items-center justify-between">
        <RememberMe />
      </div>
      <div className="flex justify-center">
        <Button type="submit" onClick={onSubmit} addStyle="w-28">
          Login
        </Button>
      </div>

      <div className="flex justify-center flex-col items-center gap-2">
        <p className="text-sm font-extralight text-gray-500 dark:text-gray-400">
          Did you{" "}
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            forget password?
          </Link>
        </p>
        <p className="text-sm font-extralight text-gray-500 dark:text-gray-400  whitespace-nowrap flex gap-1 flex-nowrap">
          Don’t have an account yet?
          <Link
            to="/register"
            className=" text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Form;
