import { type CategoryAPI } from "../types/apiTypes";
import { type Category } from "../types/categoryTypes";

export const mapCategory = (categoryApi: CategoryAPI): Category  => {
  return {
    slug: categoryApi.slug, 
    name: categoryApi.name, 
    url: categoryApi.url
  }
}

export const mapCategories = (categoriesApi: CategoryAPI[]): Category[]  => {
  return categoriesApi.map(mapCategory);
}