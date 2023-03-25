import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TermsAndCondition from "./pages/TermsAndCondition";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/terms-and-condition",
      element: <TermsAndCondition />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
