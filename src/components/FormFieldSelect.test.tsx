import FormFieldSelect from "./FormFieldSelect";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing FormFieldSelect component", () => {
  test("should render FormFieldSelect component", () => {
    const { container } = render(
      <FormFieldSelect
        label="test"
        name="test"
        value="test"
        error="test"
        options={["test"]}
        onChange={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should render FormFieldSelect component with error", () => {
    const { container } = render(
      <FormFieldSelect
        label="test"
        name="test"
        value="test"
        error="test"
        options={["test"]}
        onChange={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
})