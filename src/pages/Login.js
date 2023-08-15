import CardEntry from "../components/entry/CardEntry";
import Form from "../components/entry/loginForm/Form";
import NavBarHome from "../components/dashboard/navigationBar/NavBarHome";

function Login({ setIsAuth }) {
  return (
    <>
      <NavBarHome />
      <CardEntry childrenStyle="sm:max-w-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <Form setIsAuth={setIsAuth} />
      </CardEntry>
    </>
  );
}

export default Login;
