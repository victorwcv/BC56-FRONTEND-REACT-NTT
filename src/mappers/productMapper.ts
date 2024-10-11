import { ProductsAPI, type ProductAPI } from "../types/apiTypes";
import { type Product } from "../types/productTypes";

export const mapProduct = (productApi: ProductAPI): Product => {
  return {
    id: productApi.id,
    title: productApi.title,
    description: productApi.description,
    price: productApi.price,
    category: productApi.category,
    image: productApi.thumbnail,
  };
};

export const mapProducts = (productsApi: ProductsAPI): Product[] => {
  return productsApi.products.map(mapProduct);
};
