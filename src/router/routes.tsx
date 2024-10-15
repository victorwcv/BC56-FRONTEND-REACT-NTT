import OrderSummary from "../pages/orderSummary/OrderSummary";
import Market from "../pages/market/Market";

export const routes: { [key: string]: React.ComponentType } = {
  "/": Market,
  "/order-summary": OrderSummary,
};
