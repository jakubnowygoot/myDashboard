function CardStartPage({ children }) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-white h-screen flex items-center">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">{children}</div>
      </div>
    </section>
  );
}

export default CardStartPage;
