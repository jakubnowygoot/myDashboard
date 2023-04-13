import DefaultInput from "../../ui/inputs/DefaultInput";

function InfoSection() {
  return (
    <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
      <h2 className="md:w-1/3 mx-auto max-w-sm dark:text-gray-300">
        Personal info
      </h2>
      <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
        <DefaultInput placeholder="Jakub Siepiela ">
          Change full name
        </DefaultInput>
        <DefaultInput placeholder="+48 499 232 123">
          Change phone number
        </DefaultInput>
      </div>
    </div>
  );
}

export default InfoSection;
