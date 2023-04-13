import CardEntry from "../components/entry/CardEntry";
import Form from "../components/entry/loginForm/Form";

function Login() {
  return (
    <CardEntry childrenStyle="sm:max-w-md">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <Form />
    </CardEntry>
  );
}

export default Login;
