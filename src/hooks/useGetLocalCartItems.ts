import { useEffect } from "react";
import { useAppState } from "./useAppState";
import { getLocalStore, saveLocalStore } from "../utils/localStore";

export const useGetLocalCartItems = () => {
  const {
    state: { cartItems },
    dispatch,
  } = useAppState();

  useEffect(() => {
    const localCartItems = getLocalStore("cartItems");
    
    if (localCartItems) {
      const parsedCartItems = JSON.parse(localCartItems);

      if (parsedCartItems.length > 0) {
        dispatch({ type: "SET_CART_ITEMS", payload: parsedCartItems });
      }
    }
  }, [ dispatch ]);

  useEffect(() => {
    saveLocalStore("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
};
