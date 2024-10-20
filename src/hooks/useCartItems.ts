import { useContext } from "react";
import { AppContext } from "../context/appContext";

export const useCartItems = () => {
  const { state } = useContext(AppContext) || {};

  if (!state) {
    throw new Error("useCartItems debe estar dentro de un AppProvider");
  }

  const { cartItems } = state;

  return cartItems;
};
