import { CartItem, Product } from "../types/interfaces/product.interface";
import {
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
} from "./cartHelpers";

describe("cartHelpers functions test", () => {
  const existingItem: CartItem = {
    id: 2, 
    title: "Product 2",
    description: "Description of product 2",
    price: 20,
    category: "Category 2",
    image: "image2.jpg",
    quantity: 1,
    total: 20,
  };
  test("addItemToCart should add the product to the cart if it doesn't exist yet and add the quantity and total price", () => {
    const product: Product = {
      id: 1,
      title: "Product 1",
      description: "Description of product 1",
      price: 10,
      category: "Category 1",
      image: "image1.jpg",
    };
    const cartItems: CartItem[] = [existingItem];
    const quantity = 2;
    const result = addItemToCart(cartItems, product, quantity);
    expect(result).toEqual([
      existingItem,
      {
        id: 1,
        title: "Product 1",
        description: "Description of product 1",
        price: 10,
        category: "Category 1",
        image: "image1.jpg",
        quantity: 2,
        total: 20,
      },
    ]);
  });

  test("addItemToCart should increase the quantity of the product if it already exists in the cart", () => {
    const product: Product = {
      id: 1,
      title: "Product 1",
      description: "Description of product 1",
      price: 10,
      category: "Category 1",
      image: "image1.jpg",
    };
    const cartItems: CartItem[] = [
      existingItem,
      {
        ...product,
        quantity: 1,
        total: 10,
      },
    ];
    const quantity = 2;
    const result = addItemToCart(cartItems, product, quantity);
    expect(result).toEqual([
      existingItem,
      {
        id: 1,
        title: "Product 1",
        description: "Description of product 1",
        price: 10,
        category: "Category 1",
        image: "image1.jpg",
        quantity: 3,
        total: 30,
      },
    ]);
  });

  test("increaseQuantity should increase the quantity of the product in the cart by 1 and update the total price accordingly", () => {
    const item: CartItem = {
      id: 1,
      title: "Product 1",
      description: "Description of product 1",
      price: 10,
      category: "Category 1",
      image: "image1.jpg",
      quantity: 1,
      total: 10,
    };
    const cartItems: CartItem[] = [
      existingItem,
      {
        ...item,
      },
    ];
    const result = increaseQuantity(cartItems, 1);
    expect(result).toEqual([ existingItem, { ...item, quantity: 2, total: 20 }]);
  });

  test("decreaseQuantity should decrease the quantity of the product in the cart by 1 and update the total price accordingly", () => {
    const item: CartItem = {
      id: 1,
      title: "Product 1",
      description: "Description of product 1",
      price: 10,
      category: "Category 1",
      image: "image1.jpg",
      quantity: 5,
      total: 20,
    };
    const cartItems: CartItem[] = [
      existingItem,
      {
        ...item,
      },
    ];
    const result = decreaseQuantity(cartItems, 1);
    expect(result).toEqual([ existingItem, { ...item, quantity: 4, total: 10 }]);
    expect(result.length).toBe(2);
  });

  test("removeItemFromCart should remove the product from the cart", () => {
    const item: CartItem = {
      id: 1,
      title: "Product 1",
      description: "Description of product 1",
      price: 10,
      category: "Category 1",
      image: "image1.jpg",
      quantity: 1,
      total: 10,
    };
    const cartItems: CartItem[] = [
      existingItem,
      {
        ...item,
      },
    ];
    const product: Product = {
      id: 1,
      title: "Product 1",
      description: "Description of product 1",
      price: 10,
      category: "Category 1",
      image: "image1.jpg",
    };
    const result = removeItemFromCart(cartItems, product);
    expect(result.length).toBe(1);
  });
});
