import {
  addItemToCart,
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from "../helpers/cartHelpers";
import { filterProducts } from "../helpers/filterProductsHelpers";
import { type AppAction } from "../types/interfaces/actions.interface";
import { type InitialState } from "../types/interfaces/initialState.interface";

//  initial state
export const initialState: InitialState = {
  categories: [],
  products: [],
  filteredProducts: [],
  selectedCategory: "all",
  searchTerm: "",
  cartItems: [],
  isLoading: false,
  error: null,
};

// reducer

export const appReducer = (
  state: InitialState,
  action: AppAction
): InitialState => {
  switch (action.type) {
    // fetch categories actions
    case "FETCH_CATEGORIES_START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case "FETCH_CATEGORIES_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    // fetch products actions
    case "FETCH_PRODUCTS_START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    // cart actions
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cartItems: addItemToCart(
          state.cartItems,
          action.payload.product,
          action.payload.quantity
        ),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: increaseQuantity(state.cartItems, action.payload.id),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: decreaseQuantity(state.cartItems, action.payload.id),
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    // filter products actions
    case "FILTER_PRODUCTS": {
      const { searchTerm, category } = action.payload;

      return {
        ...state,
        filteredProducts: filterProducts(state.products, category, searchTerm),
        selectedCategory: category,
        searchTerm: searchTerm,
      };
    }

    default:
      return state;
  }
};
