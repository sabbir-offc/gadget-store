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
import BrandSend from "../Pages/BrandSend";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import AdminRoute from "./AdminRoute";
import { axiosSecure } from "../hook/useAxios";
import Dashboard from "../Layout/Dashboard/Dashboard";

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
          <AdminRoute>
            <AddProduct></AddProduct>,
          </AdminRoute>
        ),
      },
      {
        path: "/brand-products/:brand",
        element: <BrandProducts></BrandProducts>,
        loader: async ({ params }) =>
          await axiosSecure(`/brands/${params.brand}`),
      },
      {
        path: "/ad",
        element: (
          <PrivateRoutes>
            <AdvertiseSend></AdvertiseSend>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>,
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          await axiosSecure(`/products/${params.id}`),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <AdminRoute>
            <UpdateProduct></UpdateProduct>
          </AdminRoute>
        ),
        loader: async ({ params }) =>
          await axiosSecure(`/products/${params.id}`),
      },
      {
        path: "/brand-data",
        element: (
          <PrivateRoutes>
            <BrandSend></BrandSend>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
