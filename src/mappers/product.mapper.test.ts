import { mapProduct, mapProducts } from "./product.mapper";
import {
  type ProductAPI,
  type ProductsAPI,
} from "../types/interfaces/api.interface";
import { type Product } from "../types/interfaces/product.interface";
import { mockProductsAPI } from "../mock/productsAPI.mock";

describe("mapProduct", () => {
  it("should correctly map a ProductAPI object to a Product object", () => {
    const expectedProduct: Product = {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    };

    const result = mapProduct(mockProductsAPI.products[0]);
    expect(result).toEqual(expectedProduct);
  });

  it("should handle missing optional properties by setting them as undefined in Product", () => {
    const productApi = {
      id: 2,
      title: "Tablet",
      description: "A tablet device",
      price: 500,
      category: "electronics",
      thumbnail: undefined,
    } as unknown as ProductAPI;

    const expectedProduct = {
      id: 2,
      title: "Tablet",
      description: "A tablet device",
      price: 500,
      category: "electronics",
      image: undefined,
    };

    const result = mapProduct(productApi);
    expect(result).toEqual(expectedProduct);
  });
});

describe("mapProducts", () => {
  it("should correctly map an array of ProductAPI objects within ProductsAPI to an array of Product objects", () => {
    const expectedProducts: Product[] = [
      {
        id: 1,
        title: "Essence Mascara Lash Princess",
        description:
          "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9.99,
        image:
          "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      },
    ];

    const result = mapProducts(mockProductsAPI);
    expect(result).toEqual(expectedProducts);
  });

  it("should return an empty array when productsApi.products is empty", () => {
    const productsApi: ProductsAPI = {
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    };
    const result = mapProducts(productsApi);
    expect(result).toEqual([]);
  });

  it("should ignore extra properties in ProductAPI objects", () => {
    const expectedProducts: Product[] = [
      {
        id: 1,
        title: "Essence Mascara Lash Princess",
        description:
          "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9.99,
        image:
          "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      },
    ];

    const result = mapProducts(mockProductsAPI);
    expect(result).toEqual(expectedProducts);
  });
});
