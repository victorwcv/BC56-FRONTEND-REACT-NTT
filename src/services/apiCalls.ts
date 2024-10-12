import { mapCategories } from "../mappers/categoryMapper";
import { mapProducts } from "../mappers/productMapper";
import { type CategoryAPI, type ProductsAPI } from "../types/interfaces/api.interface";
import { Errormessages } from "../types/enums/errorMesages.enum";
import { Endpoints } from "../types/enums/endPoints.enum";

// Endpoints
const _URL_CATEGORIES = Endpoints.CATEGORIES;
const _URL_PRODUCTS = Endpoints.PRODUCTS;

// Endpoint call to get categories
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

// Endpoint call to get products
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
