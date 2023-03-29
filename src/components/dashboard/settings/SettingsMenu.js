import Input from "../../ui/Input";
import InputPassword from "../../ui/InputPassword";
import Button from "../../ui/Button";

function SettingsMenu({ onClick }) {
  return (
    <section className="flex items-center backdrop-blur-sm bg-white/30 h-screen pt-14 pb-14 absolute w-full">
      <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md overflow-auto max-h-[85vh] rounded-lg ">
        <div className="bg-primary-600 p-4">
          <div className="max-w-sm mx-auto md:w-full md:mx-0 ">
            <div className="inline-flex items-center space-x-4">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-primary-600"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <h1 className="text-black dark:text-white">Jakub Siepiela</h1>
            </div>
          </div>
        </div>
        <div className="bg-white space-y-6 dark:bg-gray-800">
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto dark:text-gray-300">
              Account
            </h2>
            <div className="md:w-2/3 max-w-sm mx-auto">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
                disabled="true"
              >
                Email
              </Input>
            </div>
          </div>

          <hr />
          <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 mx-auto max-w-sm dark:text-gray-300">
              Personal info
            </h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
              <Input placeholder="Jakub Siepiela ">Change full name</Input>
              <Input placeholder="+48 499 232 123">Change phone number</Input>
            </div>
          </div>

          <hr />
          <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center ">
            <h2 className="md:w-1/3 mx-auto max-w-sm dark:text-gray-300">
              Change password
            </h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
              <InputPassword>Change password</InputPassword>
              <InputPassword>Confirm password</InputPassword>
            </div>
          </div>

          <hr />
        </div>
        <div className="flex justify-end gap-6 w-full p-4 text-right text-gray-500 bg-white dark:bg-gray-800">
          <Button type="button" onClick={onClick}>
            Save
          </Button>
          <Button type="button" onClick={onClick}>
            Cancel
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SettingsMenu;
