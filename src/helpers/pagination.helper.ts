import { Product } from "../types/interfaces/product.interface";

export const getDisplayedProducts = ( products: Product[], currentPage: number, itemsPerPage: number ) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return products.slice(startIndex, endIndex);
}