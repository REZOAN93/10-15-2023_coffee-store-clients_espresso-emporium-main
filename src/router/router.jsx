import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/Root/ErrorPage";
import App from "../App";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Profile from "../Components/Auth/Profile";
import PrivateRoute from "../Components/Root/PrivateRoute";
import Users from "../Components/UserDetails/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("http://localhost:5000/coffee"),
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
        path: "/users",
        element: <PrivateRoute><Users /></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/addCoffee",
        element: (
          <PrivateRoute>
            <AddCoffee />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateCoffee/:id",
        element: (
          <PrivateRoute>
            <UpdateCoffee />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);
