import Footer from "./Footer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing Footer component", () => {
  test("should render Footer component", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});