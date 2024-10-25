import { CatSlug } from "./api.interface";

// Frontend category interface

export interface Category {
  slug: string | CatSlug;
  name: string;
  url: string;
}
