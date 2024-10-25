import ProductCard from "./ProductCard";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockProduct } from "../mock/product.mock";

describe("Testing ProductCard component", () => {
  test("should render ProductCard component", () => {
    const { container } = render(
      <ProductCard product={mockProduct} onAddToCart={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  test("should call onAddToCart when button is clicked", () => {
    const onAddToCart = vi.fn();

    render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />);

    const button = screen.getByText("Agregar al carrito");

    fireEvent.click(button);

    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });

  test("should increase quantity when button + is clicked", () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);

    const buttonPlus = screen.getByText("+");
    const quantityInput = screen.getByTestId("quantity-input");

    expect(quantityInput).toHaveValue("1");
    fireEvent.click(buttonPlus);
    expect(quantityInput).toHaveValue("2");
  });

  test("should decrease quantity when button - is clicked and quantity is greater than 1", () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);

    const buttonMinus = screen.getByText("-");
    const buttonPlus = screen.getByText("+");
    const quantityInput = screen.getByTestId("quantity-input");

    expect(quantityInput).toHaveValue("1");
    fireEvent.click(buttonPlus);
    expect(quantityInput).toHaveValue("2");
    fireEvent.click(buttonMinus);
    expect(quantityInput).toHaveValue("1");
    fireEvent.click(buttonMinus);
    expect(quantityInput).toHaveValue("1");
  });

  test("should reset quantity to 1 on blur when input is empty", () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);

    const quantityInput = screen.getByTestId("quantity-input");

    fireEvent.change(quantityInput, { target: { value: "" } });

    fireEvent.blur(quantityInput);

    expect(quantityInput).toHaveValue("1");
  });
});
