function CardSettings({ children }) {
  return (
    <section className="flex items-center backdrop-blur-sm bg-white/30 h-screen pt-14 pb-14 absolute w-full z-50">
      <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md overflow-auto max-h-[85vh] rounded-lg ">
        {children}
      </div>
    </section>
  );
}

export default CardSettings;
