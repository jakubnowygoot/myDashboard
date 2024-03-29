function ImageSection({ profilePicture, name }) {
  return (
    <div className="bg-primary-600 p-4">
      <div className="max-w-sm mx-auto md:w-full md:mx-0 ">
        <div className="inline-flex items-center space-x-4">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-primary-600"
            src={
              profilePicture.length === 0
                ? "https://wallpapercave.com/wp/wp6819375.jpg"
                : window.URL.createObjectURL(profilePicture.files[0])
            }
            alt=""
          />
          <h1 className="text-black dark:text-white">
            {name.length === 0 ? "Jakub Siepiela" : name}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
