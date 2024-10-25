import FormField from "./FormField";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing FormField component", () => {
  test("should render FormField component", () => {
    const { container } = render(
      <FormField
        label="test"
        type="test"
        name="test"
        value="test"
        error="test"
        disabled
        placeholder="test"
        onChange={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should render FormField component with error", () => {
    const { container } = render(
      <FormField
        label="test"
        type="test"
        name="test"
        value="test"
        error="test"
        disabled
        placeholder="test"
        onChange={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
