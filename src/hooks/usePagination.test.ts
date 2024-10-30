import { renderHook, act } from "@testing-library/react";
import { usePagination } from "./usePagination";
import { Product } from "../types/interfaces/product.interface";
import { vi } from "vitest";
import { useSearchParams } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  useSearchParams: vi.fn(),
}));

describe("usePagination", () => {
  const mockSetSearchParams = vi.fn();

  const products: Product[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    description: `Description for product ${i + 1}`,
    price: (i + 1) * 10,
    category: "Category",
    image: "image_url",
  }));

  beforeEach(() => {
    vi.clearAllMocks();
    (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams(), mockSetSearchParams]);
  });

  it("should initialize with the correct page count", () => {
    const { result } = renderHook(() =>
      usePagination({ itemsPerPage: 5, products })
    );

    expect(result.current.pageCount).toBe(4); 
  });

  it("should return the correct products for the first page", () => {
    const { result } = renderHook(() =>
      usePagination({ itemsPerPage: 5, products })
    );

    expect(result.current.productsToDisplay).toEqual(products.slice(0, 5));
  });

  it("should change the page and update productsToDisplay when handlePageChange is called", () => {
    const { result } = renderHook(() =>
      usePagination({ itemsPerPage: 5, products })
    );

    act(() => {
      result.current.handlePageChange(2);
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.productsToDisplay).toEqual(products.slice(5, 10));
    expect(mockSetSearchParams).toHaveBeenCalledWith(
      expect.objectContaining({ page: "2" })
    );
  });
});
