import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TermsAndCondition from "./pages/TermsAndCondition";
import ForgotPass from "./pages/ForgotPass";

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
    {
      path: "/forgot-password",
      element: <ForgotPass />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
