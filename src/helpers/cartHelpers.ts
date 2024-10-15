import { CartItem, type Product } from "../types/interfaces/product.interface";
import { add, multiply, subtract } from "../utils/mathOperations";

export const addItemToCart = (
  cartItems: CartItem[],
  product: Product,
  quantity: number
) => {
  const existingItem = cartItems.find((item) => item.id === product.id);
  const totalPrice = multiply(product.price, quantity);
  if (existingItem) {
    const newQuantity = existingItem.quantity + quantity;
    return cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: newQuantity, total: totalPrice }
        : item
    );
  }
  return [...cartItems, { ...product, quantity, total: totalPrice }];
};

export const increaseQuantity = (cartItems: CartItem[], productId: number) => {
  return cartItems.map((item) =>
    item.id === productId
      ? {
          ...item,
          quantity: item.quantity + 1,
          total: add(item.total, item.price),
        }
      : item
  );
};

export const decreaseQuantity = (cartItems: CartItem[], productId: number) => {
  return cartItems.map((item) =>
    item.id === productId && item.quantity > 1
      ? {
          ...item,
          quantity: item.quantity - 1,
          total: subtract(item.total, item.price),
        }
      : item
  );
};

export const removeItemFromCart = (cartItems: CartItem[], product: Product) => {
  return cartItems.filter((item) => item.id !== product.id);
};
