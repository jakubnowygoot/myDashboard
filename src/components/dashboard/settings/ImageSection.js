function ImageSection() {
  return (
    <div className="bg-primary-600 p-4">
      <div className="max-w-sm mx-auto md:w-full md:mx-0 ">
        <div className="inline-flex items-center space-x-4">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-primary-600"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <h1 className="text-black dark:text-white">Jakub Siepiela</h1>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
