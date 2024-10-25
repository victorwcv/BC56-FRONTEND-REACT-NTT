import AlertModal from "./AlertModal";
import { vi } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing AlertModal component", () => {
  test("should render AlertModal component", () => {
    const { container } = render(
      <AlertModal
        isOpen={true}
        handleAlert={() => {}}
        msg="test"
        imgSrc="test"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should lock body scroll when modal is open", () => {
    const handleAlert = vi.fn();

    render(
      <AlertModal
        isOpen={true}
        handleAlert={handleAlert}
        msg="This is an alert message"
      />
    );

    expect(document.body.style.overflowY).toBe("hidden");
  });

  test("should restore body scroll when modal is closed", () => {
    const handleAlert = vi.fn();

    const { rerender } = render(
      <AlertModal
        isOpen={true}
        handleAlert={handleAlert}
        msg="This is an alert message"
      />
    );

    rerender(
      <AlertModal
        isOpen={false}
        handleAlert={handleAlert}
        msg="This is an alert message"
      />
    );

    expect(document.body.style.overflowY).toBe("scroll");
  });
});
