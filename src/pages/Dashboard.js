import LeftColumn from "../components/dashboard/icons/LeftColumn";
import Body from "../components/dashboard/body/Body";
import NavBar from "../components/dashboard/navigationBar/NavBar";

function Dashboard() {
  return (
    <div className="flex w-screen h-screen text-gray-700 dark:bg-gray-800">
      <LeftColumn />
      <div className="flex flex-col flex-grow">
        <div className="flex items-center flex-shrink-0 h-16 px-8 border-gray-300">
          <NavBar />
        </div>
        <Body />
      </div>
    </div>
  );
}

export default Dashboard;
