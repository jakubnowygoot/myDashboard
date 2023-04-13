import Button from "../../../ui/Button";

function ErrorMassage({ MoonData }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-full">
      <p className="text-lg dark:text-gray-300">
        We have problem getting the date please
      </p>
      <Button onClick={MoonData}>Try again</Button>
    </div>
  );
}

export default ErrorMassage;
