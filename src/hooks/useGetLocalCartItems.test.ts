// useGetLocalCartItems.test.ts
import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useGetLocalCartItems } from "./useGetLocalCartItems";
import { useAppState } from "./useAppState";
import { getLocalStore, saveLocalStore } from "../utils/localStore";

vi.mock("./useAppState");
vi.mock("../utils/localStore");

describe("useGetLocalCartItems", () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useAppState as jest.Mock).mockReturnValue({
      state: { cartItems: [] },
      dispatch: mockDispatch,
    });
  });

  it("should dispatch SET_CART_ITEMS with items from localStorage on mount", () => {
    const mockCartItems = JSON.stringify([{ id: 1, title: "Item 1" }]);
    (getLocalStore as jest.Mock).mockReturnValue(mockCartItems);

    renderHook(() => useGetLocalCartItems());

    expect(getLocalStore).toHaveBeenCalledWith("cartItems");
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_CART_ITEMS",
      payload: JSON.parse(mockCartItems),
    });
  });

  it("should call saveLocalStore when cartItems change", () => {
    (useAppState as jest.Mock).mockReturnValue({
      state: { cartItems: [{ id: 1, title: "Item 1" }] },
      dispatch: mockDispatch,
    });

    renderHook(() => useGetLocalCartItems());

    expect(saveLocalStore).toHaveBeenCalledWith(
      "cartItems",
      JSON.stringify([{ id: 1, title: "Item 1" }])
    );
  });
});
