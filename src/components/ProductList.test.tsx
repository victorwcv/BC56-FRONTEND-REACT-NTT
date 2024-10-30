import { render } from "@testing-library/react";
import ProductList from "./ProductList";
import { Product } from "../types/interfaces/product.interface";
import { vi } from "vitest";

describe("ProductList Component", () => {
  const mockProducts: Product[] = [
    {
      id: 1,
      price: 10,
      description: "A test product",
      category: "Category 1",
      title: "Product 1",
      image: "image1.jpg",
    },
  ];

  const mockOnAddToCart = vi.fn();

  it("renders correctly with products and matches snapshot", () => {
    const { asFragment } = render(
      <ProductList
        products={mockProducts}
        onAddToCart={mockOnAddToCart}
        errorMessage="No products available"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly without products and matches snapshot", () => {
    const { asFragment } = render(
      <ProductList
        products={[]}
        onAddToCart={mockOnAddToCart}
        errorMessage="No products available"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
