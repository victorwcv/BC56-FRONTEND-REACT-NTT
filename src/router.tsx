import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Market from "./pages/market/Market";
import OrderSummary from "./pages/orderSummary/OrderSummary";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./pages/login-page/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "market",
        element: <PrivateRoute />,
        children: [
          {
            path: "",
            element: <Market />,
          },
          {
            path: "market/:category",
            element: <Market />,
          },
          {
            path: "order-summary",
            element: <OrderSummary />,
          },
        ],
      },
    ],
  },
]);
