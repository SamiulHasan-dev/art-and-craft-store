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
import Update from "../pages/Update";
import Landscape from "../pages/Landscape";
import Portrait from "../pages/Portrait";
import Watercolor from "../pages/Watercolor";
import Oil from "../pages/Oil";
import Cartoon from "../pages/Cartoon";
import Charcoal from "../pages/Charcoal";
import ViewCategory from "../pages/ViewCategory";




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
          element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
        },
        {
          path: '/viewDetails/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/crafts/${params.id}`)
        },
        {
          path: '/myCraft',
          element: <PrivateRoute><MyCraft></MyCraft></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/crafts/${params.id}`)
        },
        {
          path: '/landscape',
          element: <PrivateRoute><Landscape></Landscape></PrivateRoute>
        },
        {
          path: '/portrait',
          element: <PrivateRoute><Portrait></Portrait></PrivateRoute>
        },
        {
          path: '/watercolor',
          element: <PrivateRoute><Watercolor></Watercolor></PrivateRoute>
        },
        {
          path: '/oil',
          element: <PrivateRoute><Oil></Oil></PrivateRoute>
        },
        {
          path: '/cartoon',
          element: <PrivateRoute><Cartoon></Cartoon></PrivateRoute>
        },
        {
          path: '/charcoal',
          element: <PrivateRoute><Charcoal></Charcoal></PrivateRoute>
        },
        {
          path: '/viewCategory/:id',
          element: <PrivateRoute><ViewCategory></ViewCategory></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/arts/${params.id}`)
        },
      ]
    },
  ]);

  export default router;