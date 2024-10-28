import {
  type ProductsAPI,
  type ProductAPI,
} from "../types/interfaces/api.interface";
import { type Product } from "../types/interfaces/product.interface";

export const mapProduct = (productApi: ProductAPI): Product => {
  const { id, title, description, price, category, thumbnail } = productApi;
  return {
    id,
    title,
    description,
    price,
    category,
    image: thumbnail,
  };
};

export const mapProducts = (productsApi: ProductsAPI): Product[] => {
  return productsApi.products.map(mapProduct);
};
