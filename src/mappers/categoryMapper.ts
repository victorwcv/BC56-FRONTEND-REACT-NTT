import { type CategoryAPI } from "../types/interfaces/api.interface";
import { type Category } from "../types/interfaces/category.interface";

export const mapCategory = (categoryApi: CategoryAPI): Category => {
  return {
    slug: categoryApi.slug,
    name: categoryApi.name,
    url: categoryApi.url,
  };
};

export const mapCategories = (categoriesApi: CategoryAPI[]): Category[] => {
  return categoriesApi.map(mapCategory);
};
