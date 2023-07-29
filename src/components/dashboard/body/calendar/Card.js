function Card({ children, scroll }) {
  return (
    <div className="rounded border-white bg-white dark:border-gray-700 border-2 h-96 dark:bg-gray-800">
      <div
        className={`block ${scroll} flex-col justify-center items-center bg-white rounded p-4 h-full w-full dark:bg-gray-800 justify-between`}
      >
        {children}
      </div>
    </div>
  );
}

export default Card;
