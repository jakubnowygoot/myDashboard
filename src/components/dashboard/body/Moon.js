function Moon() {
  return (
    <div className="rounded border-white bg-white dark:border-gray-700 border-2 h-96">
      <div className="flex justify-between h-full p-4 flex-col items-center">
        <div className="text-xl xs:text-3xl font-bold">Thu Mar 30 2023</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="qi-802 w-40 h-40 xs:w-48 xs:h-48"
          viewBox="0 0 16 16"
        >
          <path d="M8 0c-.356.003-.712.03-1.065.079a7.992 7.992 0 0 0-.354 15.788h.001c.468.087.942.131 1.418.133A8 8 0 0 0 8 0Zm0 15.5a6.76 6.76 0 0 1-.725-.04A24.01 24.01 0 0 0 8.5 7.5 25.67 25.67 0 0 0 7.593.514C7.734.504 7.868.5 8 .5a7.5 7.5 0 1 1 0 15Z" />
        </svg>
        <div className="flex flex-row justify-between mt-6 w-full">
          <div className="flex flex-col items-center">
            <div className="font-medium text-base xs:text-lg dark:text-white">
              Moon phase
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-300">
              First quarter
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-base xs:text-lg dark:text-white">
              Visibility
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-300">
              59%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moon;
