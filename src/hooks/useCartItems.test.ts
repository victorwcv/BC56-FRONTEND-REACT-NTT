import { renderHook } from "@testing-library/react";
import { AppContextProvider } from "../context/AppContextProvider";
import { useCartItems } from "./useGetLocalCartItems";

describe("useCartItems Hook", () => {
  test("should return cartItems when used within AppProvider", () => {
    const { result } = renderHook(() => useCartItems(), {
      wrapper: AppContextProvider,
    });

    expect(result.current).toBeDefined();
  });
});
