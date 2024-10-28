import { type CategoryAPI } from "../types/interfaces/api.interface";
import { type Category } from "../types/interfaces/category.interface";

export const mapCategory = (categoryApi: CategoryAPI): Category => {
  const { slug, name, url } = categoryApi;
  
  return {
    slug,
    name,
    url,
  };
};

export const mapCategories = (categoriesApi: CategoryAPI[]): Category[] => {
  return categoriesApi.map(mapCategory);
};
