import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import LoginPage from "../pages/login-page/LoginPage";
import PrivateRoute from "../routes/PrivateRoute";
import Products from "../pages/products-page/Products";
import OrderSummary from "../pages/summary-page/OrderSummary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "market",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <Navigate to="/market/products" replace />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "order-summary",
            element: <OrderSummary />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/login" replace />,
      },
    ],
  },
]);
