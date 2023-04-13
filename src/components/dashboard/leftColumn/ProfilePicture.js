function ProfilePicture() {
  return (
    <a className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-primary-600">
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-primary-600"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </a>
  );
}

export default ProfilePicture;
