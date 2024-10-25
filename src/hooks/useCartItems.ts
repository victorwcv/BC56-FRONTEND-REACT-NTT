import { useContext } from "react";
import { AppContext } from "../context/appContext";

export const useCartItems = () => {
  const { state } = useContext(AppContext) || {};

  if (!state) {
    throw new Error("useCartItems must be used within an AppProvider");
  }

  const { cartItems } = state;

  return cartItems;
};
