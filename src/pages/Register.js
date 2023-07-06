import CardEntry from "../components/entry/CardEntry";
import Form from "../components/entry/registerFom/Form";
import NavBar from "../components/dashboard/navigationBar/NavBar";

function Register() {
  return (
    <>
      <div className="flex items-center flex-shrink-0 h-16 px-8 border-gray-300">
        <NavBar />
      </div>
      <CardEntry childrenStyle="sm:max-w-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create new account
        </h1>
        <Form />
      </CardEntry>
    </>
  );
}

export default Register;
