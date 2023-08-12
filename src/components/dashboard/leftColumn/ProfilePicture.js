function ProfilePicture({ mainProfilePicture }) {
  return (
    <a className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-primary-600">
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-primary-600"
        src={
          mainProfilePicture.length === 0
            ? "https://wallpapercave.com/wp/wp6819375.jpg"
            : window.URL.createObjectURL(mainProfilePicture)
        }
        alt=""
      />
    </a>
  );
}

export default ProfilePicture;
