function TermsAndCondition() {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id="terms"
          aria-describedby="terms"
          type="checkbox"
          className="w-4 h-4 border accent-primary-600 border-gray-300 rounded bg-gray-50 focus:ring-indigo-600 focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          required=""
        />
      </div>
      <div className="ml-3 text-sm">
        <label
          htmlFor="terms"
          className="font-light text-gray-500 dark:text-gray-300"
        >
          I accept the{" "}
          <a
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            href="#"
          >
            Terms and Conditions
          </a>
        </label>
      </div>
    </div>
  );
}

export default TermsAndCondition;
