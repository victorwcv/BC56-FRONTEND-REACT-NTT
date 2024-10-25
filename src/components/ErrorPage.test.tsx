import ErrorPage from "./ErrorPage";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing ErrorPage component", () => {
  test("should render ErrorPage component", () => {
    const { container } = render(<ErrorPage />);
    expect(container).toMatchSnapshot();
  });
});