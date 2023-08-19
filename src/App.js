import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TermsAndCondition from "./pages/TermsAndCondition";
import ForgotPass from "./pages/ForgotPass";
import ResetPass from "./pages/ResetPass";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || false
  );

  useEffect(() => {
    localStorage.setItem("auth", isAuth.toString());
  }, [isAuth]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage isAuth={isAuth} />,
    },
    {
      path: "/login",
      element: <Login setIsAuth={setIsAuth} isAuth={isAuth} />,
    },
    {
      path: "forgot-password",
      element: <ForgotPass />,
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
      path: "/restart-password",
      element: <ResetPass />,
    },
    {
      element: <ProtectedRoute isAuth={isAuth} />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard setIsAuth={setIsAuth} />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
