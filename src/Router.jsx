import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ContactUs from "./ContactUs";
import ProductDisplay from "./ProductDisplay";
import ReviewPage from "./ReviewPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/registration", element: <RegistrationPage/> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/reviews", element: <ReviewPage/> },
  { path: "/display", element: <ProductDisplay /> },
]);

export default router;