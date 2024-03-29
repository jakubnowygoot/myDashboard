import { useRef, useCallback, useState } from "react";
import OpenEyeIcon from "./OpenEyeIcon";
import CloseEyeIcon from "./CloseEyeIcon";

function InputPassword({
  children,
  name,
  id,
  htmlFor,
  onChange,
  defaultValue,
}) {
  const [hidePass, setHidePass] = useState(true);

  const ShowPassHandler = useCallback(() => {
    setHidePass(!hidePass);
  }, [hidePass]);

  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);

  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {children}
      </label>
      <div className="flex justify-center items-center items-stretch ">
        <input
          type={hidePass ? "password" : "text"}
          name={name}
          id={id}
          ref={ref}
          defaultValue={defaultValue}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="bg-gray-50 border-t border-b border-l border-gray-300 text-gray-900 outline-0 sm:text-sm rounded-l-lg focus:ring-primary-600 focus:border-primary-600  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:outline-none"
          placeholder="••••••••"
          required
        />
        {hidePass ? (
          <CloseEyeIcon onClick={ShowPassHandler} isFocused={isFocused} />
        ) : (
          <OpenEyeIcon onClick={ShowPassHandler} isFocused={isFocused} />
        )}
      </div>
    </div>
  );
}

export default InputPassword;
