import { type Product } from "../types/interfaces/product.interface";

export const searchProducts = (
  products: Product[],
  searchString: string,
  searchType: "term" | "category"
): Product[] => {
  let filteredProducts: Product[] = [];

  if (!searchString) return products;

  if (searchType === "term") {
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().startsWith(searchString.toLowerCase());
    });
  } else if (searchType === "category") {
    filteredProducts = products.filter((product) => {
      return product.category === searchString;
    });
  }

  return filteredProducts;
};