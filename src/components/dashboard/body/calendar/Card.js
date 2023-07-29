function Card({ children }) {
  return (
    <div className="rounded border-white bg-white dark:border-gray-700 border-2 h-96 dark:bg-gray-800">
      <div className="grid xxs:block flex-col justify-center items-center bg-white rounded p-4 h-full w-full dark:bg-gray-800 justify-between">
        <div className="md:grid md:divide-x md:divide-gray-200">{children}</div>
      </div>
    </div>
  );
}

export default Card;
