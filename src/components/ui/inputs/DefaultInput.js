function DefaultInput({
  htmlFor,
  children,
  type,
  name,
  id,
  placeholder,
  disabled,
  onChange,
  value,
  onKeyDown,
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {children}
      </label>
      <input
        value={value}
        onKeyDown={onKeyDown}
        type={type}
        name={name}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 outline-primary-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none"
        placeholder={placeholder}
        required
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}

export default DefaultInput;
