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
  addStyle,
  addSecondStyle,
  onClick,
}) {
  return (
    <div className={`${addStyle}`}>
      <label
        htmlFor={htmlFor}
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${addSecondStyle}`}
      >
        {children}
      </label>
      <input
        onClick={onClick}
        value={value}
        onKeyDown={onKeyDown}
        type={type}
        name={name}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 outline-none sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none"
        placeholder={placeholder}
        required
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}

export default DefaultInput;
