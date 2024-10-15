import { type CatSlug } from "../types/interfaces/api.interface";
import { type Product } from "../types/interfaces/product.interface";

export const filterProducts = (
  products: Product[],
  category: CatSlug = "all",
  searchTerm: string = ""
) => {
  let filteredProducts = [];
  window.scrollTo(0, 0);
  if (category !== "all") {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  } else {
    filteredProducts = products;
  }
  if (searchTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return filteredProducts;
};
