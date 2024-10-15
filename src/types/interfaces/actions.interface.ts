import { Category } from "./category.interface";
import { Product } from "./product.interface";
import { CatSlug } from "./api.interface";

// fetch categories actions
export interface FetchCategoriesStartAction {
  type: "FETCH_CATEGORIES_START";
}

export interface FetchCategoriesSuccessAction {
  type: "FETCH_CATEGORIES_SUCCESS";
  payload: Category[];
}

export interface FetchCategoriesErrorAction {
  type: "FETCH_CATEGORIES_ERROR";
  payload: string;
}

// cart actions
export interface AddItemToCartAction {
  type: "ADD_ITEM_TO_CART";
  payload: { product: Product; quantity: number };
}

export interface IncreaseQuantityAction {
  type: "INCREASE_QUANTITY";
  payload: Product;
}

export interface DecreaseQuantityAction {
  type: "DECREASE_QUANTITY";
  payload: Product;
}

export interface RemoveItemFromCartAction {
  type: "REMOVE_ITEM_FROM_CART";
  payload: Product;
}

export interface ClearCartAction {
  type: "CLEAR_CART";
}

// fetch products actions
export interface FetchProductsStartAction {
  type: "FETCH_PRODUCTS_START";
}

export interface FetchProductsSuccessAction {
  type: "FETCH_PRODUCTS_SUCCESS";
  payload: Product[];
}

export interface FetchProductsErrorAction {
  type: "FETCH_PRODUCTS_ERROR";
  payload: string;
}

// filter actions
export interface FilterProductsAction {
  type: "FILTER_PRODUCTS";
  payload: {
    category: CatSlug;
    searchTerm: string;
  };
}

// app actions
export type AppAction =
  | FetchCategoriesStartAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesErrorAction
  | AddItemToCartAction
  | IncreaseQuantityAction
  | DecreaseQuantityAction
  | RemoveItemFromCartAction
  | ClearCartAction
  | FetchProductsStartAction
  | FetchProductsSuccessAction
  | FetchProductsErrorAction
  | FilterProductsAction;
