import { Link } from "react-router-dom";

function Button({ children, href }) {
  return (
    <Link to={href}>
      <button
        type="button"
        className="block w-full rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 sm:w-auto"
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
