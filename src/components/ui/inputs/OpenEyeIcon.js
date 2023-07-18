function OpenEyeIcon({ onClick, isFocused }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      type="button"
      onClick={onClick}
      viewBox="-10 0 48 24"
      cursor="pointer"
      strokeWidth={1.5}
      className={`w-10 stroke-black dark:stroke-white border-b border-r border-t ${
        isFocused ? "border-primary-600" : "border-gray-300"
      } rounded-r-lg bg-gray-50 dark:bg-gray-700 ${
        isFocused ? "dark:border-primary-600" : "dark:border-gray-600 "
      }dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none"
      `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export default OpenEyeIcon;
