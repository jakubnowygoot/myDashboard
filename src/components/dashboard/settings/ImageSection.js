function ImageSection({ profilePicture }) {
  return (
    <div className="bg-primary-600 p-4">
      <div className="max-w-sm mx-auto md:w-full md:mx-0 ">
        <div className="inline-flex items-center space-x-4">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-primary-600"
            src={
              profilePicture.length === 0
                ? "https://wallpapercave.com/wp/wp6819375.jpg"
                : window.URL.createObjectURL(profilePicture)
            }
            alt=""
          />
          <h1 className="text-black dark:text-white">Jakub Siepiela</h1>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
