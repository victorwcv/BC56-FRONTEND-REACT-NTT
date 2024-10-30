import { vi } from "vitest";
import { appReducer, initialState } from "./appReducer";
import {
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
} from "../utils/cartHelpers";
import { type AppAction } from "../types/interfaces/actions.interface";

// mocks
import { mockProduct } from "../mock/product.mock";
import { mockCategories } from "../mock/categories.mock";
import { mockCartItem } from "../mock/cartItem.mock";
import { mockProducts } from "../mock/products.mock";

global.scrollTo = vi.fn();

describe("Testing appReducer, the reducer function in the context of the app", () => {
  it("should set loading to true on FETCH_CATEGORIES_START", () => {
    const action = { type: "FETCH_CATEGORIES_START" };
    const newState = appReducer(initialState, action as AppAction);
    expect(newState.isLoading).toBe(true);
  });

  it("should update categories on FETCH_CATEGORIES_SUCCESS", () => {
    const action = {
      type: "FETCH_CATEGORIES_SUCCESS",
      payload: mockCategories,
    };
    const newState = appReducer(initialState, action as AppAction);
    expect(newState.categories).toEqual(mockCategories);
    expect(newState.isLoading).toBe(false);
  });

  it("should handle error on FETCH_CATEGORIES_ERROR", () => {
    const action = {
      type: "FETCH_CATEGORIES_ERROR",
      payload: "Error message",
    };
    const newState = appReducer(initialState, action as AppAction);
    expect(newState.error).toBe("Error message");
    expect(newState.isLoading).toBe(false);
  });

  it("should set loading to true on FETCH_PRODUCTS_START", () => {
    const action = { type: "FETCH_PRODUCTS_START" };
    const newState = appReducer(initialState, action as AppAction);
    expect(newState.isLoading).toBe(true);
  });

  it("should update products on FETCH_PRODUCTS_SUCCESS", () => {
    const action = {
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: mockProducts,
    };
    const newState = appReducer(initialState, action as AppAction);
    expect(newState.products).toEqual(mockProducts);
    expect(newState.isLoading).toBe(false);
  });

  it("should handle error on FETCH_PRODUCTS_ERROR", () => {
    const action = {
      type: "FETCH_PRODUCTS_ERROR",
      payload: "Error message",
    };
    const newState = appReducer(initialState, action as AppAction);
    expect(newState.error).toBe("Error message");
    expect(newState.isLoading).toBe(false);
  });

  it("should handle ADD_ITEM_TO_CART action", () => {
    const action = {
      type: "ADD_ITEM_TO_CART",
      payload: { product: mockProduct, quantity: 1 },
    };

    const expectedCartItems = addItemToCart(
      initialState.cartItems,
      action.payload.product,
      action.payload.quantity
    );

    const newState = appReducer(initialState, action as AppAction);

    expect(newState.cartItems).toEqual(expectedCartItems);
  });

  it("should handle INCREASE_QUANTITY action", () => {
    const action = {
      type: "INCREASE_QUANTITY",
      payload: { id: 1 },
    };

    const initialStateWithItem = {
      ...initialState,
      cartItems: [mockCartItem],
    };

    const expectedCartItems = increaseQuantity(
      initialStateWithItem.cartItems,
      action.payload.id
    );

    const newState = appReducer(initialStateWithItem, action as AppAction);

    expect(newState.cartItems).toEqual(expectedCartItems);
  });

  it("should handle DECREASE_QUANTITY action", () => {
    const action = {
      type: "DECREASE_QUANTITY",
      payload: { id: 1 },
    };

    const initialStateWithItem = {
      ...initialState,
      cartItems: [mockCartItem],
    };

    const expectedCartItems = decreaseQuantity(
      initialStateWithItem.cartItems,
      action.payload.id
    );

    const newState = appReducer(initialStateWithItem, action as AppAction);

    expect(newState.cartItems).toEqual(expectedCartItems);
  });

  it("should handle REMOVE_ITEM_FROM_CART action", () => {
    const action = {
      type: "REMOVE_ITEM_FROM_CART",
      payload: mockProduct,
    };

    const initialStateWithItem = {
      ...initialState,
      cartItems: [mockCartItem],
    };

    const expectedCartItems = removeItemFromCart(
      initialStateWithItem.cartItems,
      action.payload
    );

    const newState = appReducer(initialStateWithItem, action as AppAction);

    expect(newState.cartItems).toEqual(expectedCartItems);
  });

  it("should handle CLEAR_CART action", () => {
    const action = {
      type: "CLEAR_CART",
    };

    const initialStateWithItem = {
      ...initialState,
      cartItems: [mockCartItem],
    };

    const newState = appReducer(initialStateWithItem, action as AppAction);

    expect(newState.cartItems).toEqual([]);
  });

  it("should handle SET_FILTER_PRODUCTS action", () => {
    const action: AppAction = {
      type: "SET_FILTER_PRODUCTS",
      payload: mockProducts,
    };

    const initialStateWithProducts = {
      ...initialState,
    };

    const newState = appReducer(initialStateWithProducts, action);      

    expect(newState.filteredProducts).toEqual(mockProducts);
  });

  it("should return the initial state", () => {
    const action = { type: "UNKNOWN_ACTION" };
    const newState = appReducer(initialState, action as AppAction);
    expect(newState).toEqual(initialState);
  });
});
