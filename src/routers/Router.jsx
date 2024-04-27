import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AllCraft from "../pages/AllCraft";
import AddCraft from "../pages/AddCraft";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/allCraft',
          element: <AllCraft></AllCraft>
        },
        {
          path: '/addCraft',
          element: <AddCraft></AddCraft>
        }
      ]
    },
  ]);

  export default router;