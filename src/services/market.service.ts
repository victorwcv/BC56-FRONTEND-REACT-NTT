import { mapCategories } from "../mappers/category.mapper";
import { mapProducts } from "../mappers/product.mapper";
import {
  type CategoryAPI,
  type ProductsAPI,
} from "../types/interfaces/api.interface";
import { Errormessages } from "../types/enums/errorMesages.enum";
import { Endpoints } from "../types/enums/endPoints.enum";

// Endpoints
const URL_CATEGORIES = Endpoints.CATEGORIES;
const URL_PRODUCTS = Endpoints.PRODUCTS;

// Call to get categories
export const getCategories = async () => {
  try {
    const res = await fetch(URL_CATEGORIES);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data: CategoryAPI[] = await res.json();
    return mapCategories(data);
  } catch (error) {
    console.error(Errormessages.ERROR_GETTING_CATEGORIES, error);
  }
};

// Call to get products
export const getAllProducts = async () => {
  try {
    const res = await fetch(URL_PRODUCTS);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data: ProductsAPI = await res.json();
    return mapProducts(data);
  } catch (error) {
    console.error(Errormessages.ERROR_GETTING_PRODUCTS, error);
  }
};

// Call to get products by category
export const getProductsByCategory = async (category: string) => {
  if (category === "all") return;
  try {
    const res = await fetch(`${URL_PRODUCTS}/category/${category}`);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data: ProductsAPI = await res.json();
    return mapProducts(data);
  } catch (error) {
    console.error(Errormessages.ERROR_GETTING_PRODUCTS, error);
  }
};
