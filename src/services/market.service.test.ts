import { describe, it, expect, vi, afterEach } from "vitest";
import { getCategories, getAllProducts, getProductsByCategory } from "./market.service";
import { mapCategories } from "../mappers/category.mapper";
import { mapProducts } from "../mappers/product.mapper";
import { Errormessages } from "../types/enums/errorMesages.enum";

// Mocks de los mappers
vi.mock("../mappers/category.mapper", () => ({
  mapCategories: vi.fn(),
}));
vi.mock("../mappers/product.mapper", () => ({
  mapProducts: vi.fn(),
}));

// Mock global de fetch
global.fetch = vi.fn();

describe("Product Service", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("getCategories", () => {
    it("should fetch categories and map them correctly", async () => {
      const mockResponse = [{ id: 1, name: "Category 1" }];
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });
      (mapCategories as jest.Mock).mockReturnValue(["Category 1"]);

      const categories = await getCategories();

      expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products/categories"); 
      expect(mapCategories).toHaveBeenCalledWith(mockResponse);
      expect(categories).toEqual(["Category 1"]);
    });

    it("should handle errors and log them for failed fetch", async () => {
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      });

      const categories = await getCategories();

      expect(categories).toBeUndefined();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        Errormessages.ERROR_GETTING_CATEGORIES,
        expect.any(Error)
      );
      consoleErrorSpy.mockRestore();
    });
  });

  describe("getAllProducts", () => {
    it("should fetch all products with default params and map them", async () => {
      const mockResponse = { products: [{ id: 1, title: "Product 1" }] };
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });
      (mapProducts as jest.Mock).mockReturnValue(["Product 1"]);

      const products = await getAllProducts();

      expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products?limit=30&skip=0");
      expect(mapProducts).toHaveBeenCalledWith(mockResponse);
      expect(products).toEqual(["Product 1"]);
    });

    it("should handle errors and log them for failed product fetch", async () => {
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      });

      const products = await getAllProducts();

      expect(products).toBeUndefined();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        Errormessages.ERROR_GETTING_PRODUCTS,
        expect.any(Error)
      );
      consoleErrorSpy.mockRestore();
    });
  });

  describe("getProductsByCategory", () => {
    it("should fetch products by category and map them", async () => {
      const mockResponse = { products: [{ id: 1, title: "Product in Category" }] };
      const category = "electronics";
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });
      (mapProducts as jest.Mock).mockReturnValue(["Product in Category"]);

      const products = await getProductsByCategory(category);

      expect(fetch).toHaveBeenCalledWith(`https://dummyjson.com/products/category/electronics`); 
      expect(mapProducts).toHaveBeenCalledWith(mockResponse);
      expect(products).toEqual(["Product in Category"]);
    });

    it("should return undefined if category is 'all'", async () => {
      const products = await getProductsByCategory("all");

      expect(fetch).not.toHaveBeenCalled();
      expect(products).toBeUndefined();
    });

    it("should handle errors and log them for failed fetch by category", async () => {
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      const category = "invalid-category";
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 404,
        statusText: "Not Found",
      });

      const products = await getProductsByCategory(category);

      expect(products).toBeUndefined();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        Errormessages.ERROR_GETTING_PRODUCTS,
        expect.any(Error)
      );
      consoleErrorSpy.mockRestore();
    });
  });
});
