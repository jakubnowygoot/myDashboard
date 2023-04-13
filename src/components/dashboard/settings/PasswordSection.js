import InputPassword from "../../ui/inputs/InputPassword";

function PasswordSection() {
  return (
    <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center ">
      <h2 className="md:w-1/3 mx-auto max-w-sm dark:text-gray-300">
        Change password
      </h2>
      <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
        <InputPassword>Change password</InputPassword>
        <InputPassword>Confirm password</InputPassword>
      </div>
    </div>
  );
}

export default PasswordSection;
