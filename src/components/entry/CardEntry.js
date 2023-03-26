function CardEntry({ children, parentStyle, childrenStyle }) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div
        className={`flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-screen ${parentStyle}`}
      >
        <div
          className={`w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ${childrenStyle}`}
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default CardEntry;
