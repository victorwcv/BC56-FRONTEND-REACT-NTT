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
  const res = await fetch(URL_CATEGORIES);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Error al obtener las categorias");
  }

  const data: CategoryAPI[] = await res.json();
  return mapCategories(data);
};

// Call to get products
export const getAllProducts = async (limit = 30, skip = 0) => {
  const res = await fetch(`${URL_PRODUCTS}?limit=${limit}&skip=${skip}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Error al obtener los productos");
  }

  const data: ProductsAPI = await res.json();
  return mapProducts(data);
};

// Call to get products by category
export const getProductsByCategory = async (category: string) => {
  if (category === "all") return;
  try {
    const res = await fetch(`${URL_PRODUCTS}/category/${category}`);
    if (!res.ok) {
      throw new Error(`Error: Failed to get products`);
    }
    const data: ProductsAPI = await res.json();
    return mapProducts(data);
  } catch (error) {
    console.error(Errormessages.ERROR_GETTING_PRODUCTS, error);
  }
};
