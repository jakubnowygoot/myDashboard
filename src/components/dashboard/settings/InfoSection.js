import DefaultInput from "../../ui/inputs/DefaultInput";

function InfoSection({ name, setName, telNumber, setTelNumber }) {
  return (
    <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
      <h2 className="md:w-1/3 mx-auto max-w-sm dark:text-gray-300">
        Personal info
      </h2>
      <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
        <DefaultInput
          placeholder={name.length === 0 ? "Jakub Siepiela" : name}
          onChange={(e) => setName(e.target.value)}
        >
          Change full name
        </DefaultInput>
        <DefaultInput
          placeholder={`+48 ${
            telNumber.length === 0 ? "499421231" : telNumber
          }`}
          onChange={(e) => setTelNumber(e.target.value)}
        >
          Change phone number
        </DefaultInput>
      </div>
    </div>
  );
}

export default InfoSection;
