import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/CreateAccount/SignUp";
import News from "./Pages/News/News";
import { Toaster } from "react-hot-toast";
import LogOut from "./Pages/LogOut/LogOut";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import Destination from "./Pages/Destination/Destination";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import TravelSpotInfo from "./Pages/TravelSpotInfo/TravelSpotInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/travel-details-info/:id",
        element: <TravelSpotInfo />,
        loader: ({ params }) =>
          fetch(
            `https://travel-guru-server-mu-ten.vercel.app/travel-details-info/${params.id}`
          ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
