import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ContactUs from "./ContactUs";
import ProductDisplay from "./ProductDisplay";
import ReviewPage from "./ReviewPage";
import AddProduct from"./AddProduct";
import RemoveProduct from"./RemoveProduct";
import UpdateProduct from"./UpdateProduct";
import AdminLogin from"./AdminLogin";
import Dashboard from"./Dashboard";

const router = createBrowserRouter([
  { path: "/landingpage", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/registration", element: <RegistrationPage/> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/reviews", element: <ReviewPage/> },
  { path: "/display", element: <ProductDisplay /> },
 { path: "/addproduct", element: <AddProduct/> },
 { path: "/removeproduct", element: <RemoveProduct/> },
 { path: "/updateproduct", element: <UpdateProduct/> },
  { path: "/adminlogin", element: <AdminLogin/> },
   { path: "/dashboard", element: <Dashboard/> },
]);

export default router;