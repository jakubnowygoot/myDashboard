import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function TermsElem() {
  return (
    <div className="flex xs:justify-between justify-center flex-wrap gap-4">
      <div className="flex items-start items-center">
        <div className="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border accent-primary-600 border-gray-300 rounded bg-gray-50 focus:ring-indigo-600 focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{" "}
            <Link
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              to="/terms-and-condition"
            >
              Terms and Conditions
            </Link>
          </label>
        </div>
      </div>
      <Button type="submit">Sign in</Button>
    </div>
  );
}

export default TermsElem;
