import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Market from "./pages/market/Market";
import OrderSummary from "./pages/orderSummary/OrderSummary";
import ErrorPage from "./components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Market />,
      },
      {
        path: "order-summary",
        element: <OrderSummary />,
      },
    ],
  },
]);
