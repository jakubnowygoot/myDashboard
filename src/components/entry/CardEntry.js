function CardEntry({
  children,
  parentStyle,
  childrenStyle,
  darkStyle,
  sectionStyle,
}) {
  return (
    <section className={`bg-gray-50 dark:bg-gray-900 h-91  ${sectionStyle}`}>
      <div
        className={`flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0  ${parentStyle}`}
      >
        <div
          className={`w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 ${childrenStyle}`}
        >
          <div className={`p-6 space-y-4 md:space-y-6 sm:p-8 ${darkStyle}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardEntry;
