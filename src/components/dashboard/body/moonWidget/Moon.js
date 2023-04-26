import LoadingSpinner from "../../../ui/LoadingSpinner";
import ErrorMassage from "./ErrorMassage";
import MoonInfoRender from "./MoonData";

function Moon({ RenderMoonData, isLoading, isLoaded, newError, dataMoon }) {
  return (
    <div className="rounded border-white bg-white dark:border-gray-700 border-2 h-96 dark:bg-gray-800">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <MoonInfoRender
            isLoaded={isLoaded}
            data={dataMoon}
            newError={newError}
          />
          {newError && <ErrorMassage MoonData={RenderMoonData} />}
        </>
      )}
    </div>
  );
}

export default Moon;
