import { vi, Mock } from "vitest";
import { getCategories, getAllProducts } from "./apiCalls";
import { Errormessages } from "../types/enums/errorMesages.enum";
import { mapCategories } from "../mappers/categoryMapper";
import { mapProducts } from "../mappers/productMapper";
import { Endpoints } from "../types/enums/endPoints.enum";
import { mockProductsAPI } from "../mock/productsAPI.mock";
import * as categoryMapper from "../mappers/categoryMapper";
import * as productMapper from "../mappers/productMapper";

global.fetch = vi.fn();

describe("getCategories", () => {
  const mockMapCategories = vi.spyOn(categoryMapper, "mapCategories");

  test("should fetch categories and map them correctly", async () => {
    const mockCategories = [{ name: "beauty", slug: "beauty", url: "beauty" }];
    (fetch as Mock).mockResolvedValue({
      ok: true,
      json: async () => mockCategories,
    });

    const result = await getCategories();

    expect(fetch).toHaveBeenCalledWith(Endpoints.CATEGORIES);
    expect(mockMapCategories).toHaveBeenCalledWith(mockCategories);
    expect(result).toEqual(mapCategories(mockCategories));
  });

  test("should throw an error if the fetch fails", async () => {
    (fetch as Mock).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const result = await getCategories();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      Errormessages.ERROR_GETTING_CATEGORIES,
      expect.any(Error)
    );
    expect(result).toBeUndefined();
    consoleErrorSpy.mockRestore();
  });
});

describe("getAllProducts", () => {
  const mockMapProducts = vi.spyOn(productMapper, "mapProducts");

  test("should fetch products and map them correctly", async () => {
    (fetch as Mock).mockResolvedValue({
      ok: true,
      json: async () => mockProductsAPI,
    });

    const result = await getAllProducts();

    expect(fetch).toHaveBeenCalledWith(Endpoints.PRODUCTS);
    expect(mockMapProducts).toHaveBeenCalledWith(mockProductsAPI);
    expect(result).toEqual(mapProducts(mockProductsAPI));
  });

  test("should throw an error if the fetch fails", async () => {
    (fetch as Mock).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const result = await getAllProducts();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      Errormessages.ERROR_GETTING_PRODUCTS,
      expect.any(Error)
    );
    expect(result).toBeUndefined();
    consoleErrorSpy.mockRestore();
  });
});
