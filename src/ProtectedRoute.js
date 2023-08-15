import { Outlet } from "react-router-dom";
import HomePage from "./pages/Home";

function ProtectedRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <HomePage />;
}

export default ProtectedRoute;
