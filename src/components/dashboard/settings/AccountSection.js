import DefaultInput from "../../ui/inputs/DefaultInput";

function AccountSection() {
  return (
    <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
      <h2 className="md:w-1/3 max-w-sm mx-auto dark:text-gray-300">Account</h2>
      <div className="md:w-2/3 max-w-sm mx-auto">
        <DefaultInput
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
          disabled="true"
        >
          Email
        </DefaultInput>
      </div>
    </div>
  );
}

export default AccountSection;
