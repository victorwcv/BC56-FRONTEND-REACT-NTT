import { type Category } from "./category.interface";
import { type CartItem, type Product } from "./product.interface";
import { type UserData } from "./user.interface";

// interface for the context
export interface InitialState {
  user: UserData;
  categories: Category[];
  products: Product[];
  filteredProducts: Product[];

  cartItems: CartItem[];
  currentPage: number;
  isLoading: boolean;
  error: string | null;
}
