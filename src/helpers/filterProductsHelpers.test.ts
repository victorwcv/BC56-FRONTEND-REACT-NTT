import { vi } from "vitest";
import { filterProducts } from "../utils/filterProducts";
import { Product } from "../types/interfaces/product.interface";

describe("filterProducts", () => {
  window.scrollTo = vi.fn();
  const products: Product[] = [
    {
      id: 1,
      title: "Bed",
      description: "Description of product 1",
      price: 10,
      category: "furniture",
      image: "image1.jpg",
    },
    {
      id: 2,
      title: "Red Lipstick",
      description: "Description of product 2",
      price: 20,
      category: "beauty",
      image: "image2.jpg",
    },
  ];
  test("should filter products based on category priority and searchTerm if provided", () => {
    const filteredProducts = filterProducts(products, "all");
    expect(filteredProducts).toEqual(products);

    const filteredProducts2 = filterProducts(products, "beauty");
    expect(filteredProducts2).toEqual([products[1]]);

    const filteredProducts3 = filterProducts(products, "all", "be");
    expect(filteredProducts3).toEqual([products[0]]);
  });

  test("should filter the products which match the searchTerm if provided", () => {
    const filteredProducts = filterProducts(products, "all", "red");
    expect(filteredProducts).toEqual([products[1]]);
  });

  test("should return an empty array if no products match the category or searchTerm provided", () => {
    const filteredProducts = filterProducts(products, "all", "table");
    expect(filteredProducts).toEqual([]);
  });
});
