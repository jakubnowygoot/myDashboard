function Card({ children }) {
  return (
    <div className="flex-grow xs:p-6 p-4 overflow-auto bg-gray-200 dark:bg-gray-700">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        {children}
      </div>
    </div>
  );
}

export default Card;
