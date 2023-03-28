import Input from "../components/ui/Input";
import InputPassword from "../components/ui/InputPassword";
import Button from "../components/ui/Button";

function SettingsNav() {
  return (
    <section className="flex items-center bg-gray-100 bg-opacity-50 h-screen pt-14 pb-14 ">
      <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md overflow-auto max-h-[85vh] rounded-lg">
        <div className="bg-primary-600 p-4">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <img
                className="w-10 h-10 object-cover rounded-full"
                alt="User avatar"
                src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
              />

              <h1 className="text-black">Jakub Siepiela</h1>
            </div>
          </div>
        </div>
        <div className="bg-white space-y-6">
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
            <div className="md:w-2/3 max-w-sm mx-auto">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
              >
                Email
              </Input>
            </div>
          </div>

          <hr />
          <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
              <Input placeholder="Jakub Siepiela">Full name</Input>
              <Input placeholder="+48 499 232 123">Phone number</Input>
            </div>
          </div>

          <hr />
          <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 mx-auto max-w-sm">Change password</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
              <InputPassword>Change password</InputPassword>
              <InputPassword>Confirm password</InputPassword>
            </div>
          </div>

          <hr />
        </div>
        <div className="flex justify-end gap-6 w-full p-4 text-right text-gray-500 bg-white">
          <Button type="button" addStyle="mt-0 md:mt-0">
            Save
          </Button>
          <Button type="button" addStyle="mt-0">
            Cancel
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SettingsNav;
