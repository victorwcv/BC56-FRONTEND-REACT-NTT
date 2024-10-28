import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Market from "./pages/market/Market";
import OrderSummary from "./pages/orderSummary/OrderSummary";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./pages/login-page/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import Products from "./pages/market/components/Products";

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
            children: [
              {
                path: "",
                element: <Products />,
              },
              {
                path: "order-summary",
                element: <OrderSummary />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
