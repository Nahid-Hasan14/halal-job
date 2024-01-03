import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About";
import SignUp from "../Pages/Authenticate/SignUp/SignUp";
import LogIn from "../Pages/Authenticate/LogIn/LogIn";
import Jobs from "../Pages/Jobs/Jobs";
import PostData from "../Pages/PostData/PostData";
import JobDetails from "../Pages/Jobs/JobDetails";
import Contact from "../Pages/Contact/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/postdata",
        element: <PostData />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/jobs/${params.id}`),
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

export default routes;
