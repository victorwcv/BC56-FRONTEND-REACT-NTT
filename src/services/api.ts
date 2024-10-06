// llamada a la api para obtener las categorías

import { mapCategories } from "../mappers/categoryMapper";
import { mapProducts } from "../mappers/productMapper";
import { CategoryAPI, ProductsAPI } from "../types/apiTypes";

export const getCategories = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products/categories");
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data: CategoryAPI[] = await res.json();
    return mapCategories(data);
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
  }
};

// llamada a la api para obtener todos los productos
export const getAllProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data: ProductsAPI = await res.json();
    return mapProducts(data);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
};
