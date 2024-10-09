import { mapCategories } from "../mappers/categoryMapper";
import { mapProducts } from "../mappers/productMapper";
import { CategoryAPI, ProductsAPI } from "../types/apiTypes";
import { Errormessages } from "../types/errorMesages.enum";



// Endpoints
const _URL_CATEGORIES = "https://dummyjson.com/products/categories";
const _URL_PRODUCTS = "https://dummyjson.com/products";

// llamada a la api para obtener las categorías
export const getCategories = async () => {
  try {
    const res = await fetch(_URL_CATEGORIES);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data: CategoryAPI[] = await res.json();
    return mapCategories(data);
  } catch (error) {
    console.error(Errormessages.ERROR_GETTING_CATEGORIES, error);
  }
};

// llamada a la api para obtener todos los productos
export const getAllProducts = async () => {
  try {
    const res = await fetch(_URL_PRODUCTS);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data: ProductsAPI = await res.json();
    return mapProducts(data);
  } catch (error) {
    console.error(Errormessages.ERROR_GETTING_PRODUCTS, error);
  }
};
