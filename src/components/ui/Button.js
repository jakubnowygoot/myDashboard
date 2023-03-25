import { Link } from "react-router-dom";

function Button({ children, href, type }) {
  return (
    <Link to={href}>
      <button
        type={type}
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4 md:mt-6"
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
