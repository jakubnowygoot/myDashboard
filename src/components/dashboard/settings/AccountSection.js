import DefaultInput from "../../ui/inputs/DefaultInput";

function AccountSection() {
  return (
    <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
      <h2 className="md:w-1/3 max-w-sm mx-auto dark:text-gray-300">Account</h2>
      <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
        <DefaultInput
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
        >
          Email
        </DefaultInput>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="user_avatar"
          >
            Change profile picture
          </label>
          <input
            className="border m-0 border-solid dark:file:bg-gray-600 dark:hover:file:bg-gray-500 hover:file:bg-neutral-200 bg-clip-padding px-3 py-[0.32rem]  relative m-0 min-w-0 flex-auto file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit  file:px-3 file:py-[0.32rem] file:text-black file:dark:text-white file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] bg-gray-50 border border-gray-300 text-gray-400 outline-none sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none"
            id="user_avatar"
            type="file"
          />
        </div>
      </div>
    </div>
  );
}

export default AccountSection;
