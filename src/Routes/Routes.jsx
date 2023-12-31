import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Footer/Footer";
import SignUp from "../Pages/Authenticate/SignUp/SignUp";
import LogIn from "../Pages/Authenticate/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Home />,
    childern: [
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

export default router;
