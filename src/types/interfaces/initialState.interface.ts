import { type Category } from "./category.interface";
import { type CartItem, type Product } from "./product.interface";
import { type CatSlug } from "./api.interface";

// interface for the context
export interface InitialState {
  categories: Category[];
  products: Product[];
  filteredProducts: Product[];
  selectedCategory: CatSlug;
  searchTerm: string;
  cartItems: CartItem[];
  isLoading: boolean;
  error: string | null;
}
