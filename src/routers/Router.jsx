import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AllCraft from "../pages/AllCraft";
import AddCraft from "../pages/AddCraft";
import ViewDetails from "../pages/ViewDetails";
import MyCraft from "../pages/MyCraft";
import PrivateRoute from "./PrivateRoute";




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
          element: <AllCraft></AllCraft>,
          loader: ()=> fetch('http://localhost:5000/crafts')
        },
        {
          path: '/addCraft',
          element: <AddCraft></AddCraft>
        },
        {
          path: '/viewDetails/:id',
          element: <ViewDetails></ViewDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/crafts/${params.id}`)
        },
        {
          path: '/myCraft',
          element: <PrivateRoute><MyCraft></MyCraft></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;