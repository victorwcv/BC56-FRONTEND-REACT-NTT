import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useFetchInitialData } from "./useFetchInitialData";
import { useAppState } from "./useAppState";
import { getAllProducts, getCategories } from "../services/market.service";

vi.mock("./useAppState");
vi.mock("../services/market.service");

describe("useFetchInitialData", () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useAppState as jest.Mock).mockReturnValue({ dispatch: mockDispatch });
  });

  it("should dispatch FETCH_PRODUCTS_START and FETCH_PRODUCTS_SUCCESS when products are fetched successfully", async () => {
    const mockProducts = [{ id: 1, name: "Product 1" }];
    (getAllProducts as jest.Mock).mockResolvedValue(mockProducts);

    renderHook(() => useFetchInitialData());

    expect(mockDispatch).toHaveBeenCalledWith({ type: "FETCH_PRODUCTS_START" });

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: mockProducts,
    });
  });

  it("should dispatch FETCH_CATEGORIES_START and FETCH_CATEGORIES_SUCCESS when categories are fetched successfully", async () => {
    const mockCategories = [{ id: 1, name: "Category 1" }];
    (getCategories as jest.Mock).mockResolvedValue(mockCategories);

    renderHook(() => useFetchInitialData());

    expect(mockDispatch).toHaveBeenCalledWith({ type: "FETCH_CATEGORIES_START" });

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "FETCH_CATEGORIES_SUCCESS",
      payload: mockCategories,
    });
  });

  it("should handle errors when fetching products fails", async () => {
    (getAllProducts as jest.Mock).mockRejectedValue(new Error("Failed to fetch products"));

    renderHook(() => useFetchInitialData());

    expect(mockDispatch).toHaveBeenCalledWith({ type: "FETCH_PRODUCTS_START" });

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(mockDispatch).not.toHaveBeenCalledWith({ type: "FETCH_PRODUCTS_SUCCESS" });
  });

  it("should handle errors when fetching categories fails", async () => {
    (getCategories as jest.Mock).mockRejectedValue(new Error("Failed to fetch categories"));

    renderHook(() => useFetchInitialData());

    expect(mockDispatch).toHaveBeenCalledWith({ type: "FETCH_CATEGORIES_START" });

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(mockDispatch).not.toHaveBeenCalledWith({ type: "FETCH_CATEGORIES_SUCCESS" });
  });
});
