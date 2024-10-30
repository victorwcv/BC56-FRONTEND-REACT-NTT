import { describe, it, expect } from "vitest";
import { filterProducts } from "./filterProducts";
import { mockProducts } from "../mock/products.mock";

describe("filterProducts", () => {
  it('should return all products if category is "all" and searchTerm is empty', () => {
    const result = filterProducts(mockProducts, "all", "");
    expect(result).toEqual(mockProducts);
  });

  it("should filter products by category", () => {
    const result = filterProducts(mockProducts, "beauty", "");
    expect(result).toEqual([
      {
        category: "beauty",
        description:
          "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        id: 1,
        image:
          "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
        price: 9.99,
        title: "Essence Mascara Lash Princess",
      }
    ]);
  });

  it("should filter products by searchTerm", () => {
    const result = filterProducts(mockProducts, "all", "sofa");
    expect(result).toEqual([
      {
        category: "furniture",
        description:
          "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
        id: 12,
        image:
          "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
        price: 2499.99,
        title: "Annibale Colombo Sofa",
      },
    ]);
  });

  it("should filter products by category and searchTerm", () => {
    const result = filterProducts(mockProducts, "groceries", "honey");
    expect(result).toEqual([
      {
        category: "groceries",
        description:
          "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
        id: 27,
        image:
          "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
        price: 6.99,
        title: "Honey Jar",
      },
    ]);
  });

  it("should return an empty array if no products match the category and searchTerm", () => {
    const result = filterProducts(mockProducts, "electronics", "Nike");
    expect(result).toEqual([]);
  });

});
