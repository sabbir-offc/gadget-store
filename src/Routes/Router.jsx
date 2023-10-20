import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import AddProduct from "../Pages/AddProduct";
import PrivateRoutes from "./PrivateRoutes";
import BrandProducts from "../Pages/BrandProducts";
import AdvertiseSend from "../Pages/AdvertiseSend";
import Error from "../Pages/Error";
import ProductDetails from "../Pages/ProductDetails";
import MyCart from "../Pages/MyCart";
import UpdateProduct from "../Pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/add-product",

        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/brand-products/:brand",
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/brands/${params.brand}`),
      },
      {
        path: "/ad",
        element: <AdvertiseSend></AdvertiseSend>,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>,
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/products/${params.id}`),
      },
      {
        path: "/my-cart/:userId",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/user-cart/${params.userId}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/products/${params.id}`),
      },
    ],
  },
]);

export default router;
