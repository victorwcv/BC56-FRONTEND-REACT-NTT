import { CatSlug } from "./api.interface";

// Frontend category interface

export interface Category {
  slug: CatSlug;
  name: string;
  url: string;
}
