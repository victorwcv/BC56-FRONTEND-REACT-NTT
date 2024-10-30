import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import { useFilterProducts } from "./useFilterProducts";
import { filterProducts } from "../utils/filterProducts";
import { getProductsByCategory } from "../services/market.service";
import { mockProducts } from "../mock/products.mock";

vi.mock("../utils/filterProducts");
vi.mock("../services/market.service");
vi.mock("react-router-dom", () => ({
  useSearchParams: vi.fn(() => [
    new URLSearchParams(),
    vi.fn(),
  ]),
}));

window.scrollTo = vi.fn();

describe("useFilterProducts", () => {
  const mockDispatch = vi.fn();
  

  beforeEach(() => {
    vi.clearAllMocks();
  });


  it("should set search params and call dispatch with filtered products", () => {
    const mockFilteredProducts = [mockProducts[0]];
    (filterProducts as jest.Mock).mockReturnValue(mockFilteredProducts);

    const { result } = renderHook(() =>
      useFilterProducts({ products: mockProducts, dispatch: mockDispatch })
    );

    act(() => {
      result.current.handleCategoryChange({
        target: { value: "electronics" },
      } as React.ChangeEvent<HTMLSelectElement>);
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_FILTER_PRODUCTS",
      payload: mockFilteredProducts,
    });
  });

  it("should fetch products by category when no local products match", async () => {
    (filterProducts as jest.Mock).mockReturnValue([]);
    const mockFetchedProducts = [{ id: 3, title: "Product 3", category: "electronics", price: 120, thumbnail: "" }];
    (getProductsByCategory as jest.Mock).mockResolvedValue(mockFetchedProducts);

    const { result } = renderHook(() =>
      useFilterProducts({ products: mockProducts, dispatch: mockDispatch })
    );

    act(() => {
      result.current.handleCategoryChange({
        target: { value: "electronics" },
      } as React.ChangeEvent<HTMLSelectElement>);
    });

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: mockFetchedProducts,
    });
  });
});
