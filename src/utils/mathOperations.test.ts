import { add, subtract, multiply } from "./mathOperations";

describe("math operations", () => {
  test("add function ahould add two numbers and return the sum", () => {
    expect(add(0, 0)).toBe(0);
    expect(add(1, 1)).toBe(2);
    expect(add(1.1, 1.2)).toBe(2.3);
  });
  test("subtract function should subtract two numbers and return the difference", () => {
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(0, 1)).toBe(-1);
    expect(subtract(2, 1)).toBe(1);
  });
  test("multiply function should multiply two numbers and return the product", () => {
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(0, 1)).toBe(0);
    expect(multiply(1, 0)).toBe(0);
    expect(multiply(1, 1)).toBe(1);
    expect(multiply(1.1, 1.1)).toBe(1.21);
  });
});
