import { type Category } from "./category.interface";
import { type CartItem, type Product } from "./product.interface";
import { type CatSlug } from "./api.interface";
import { type UserData } from "./user.interface";

// interface for the context
export interface InitialState {
  user: UserData;
  categories: Category[];
  products: Product[];
  filteredProducts: Product[];
  selectedCategory: CatSlug;
  searchTerm: string;
  cartItems: CartItem[];
  currentPage: number;
  isLoading: boolean;
  error: string | null;
}
