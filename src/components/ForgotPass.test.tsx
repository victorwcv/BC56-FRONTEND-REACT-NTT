import { render } from "@testing-library/react";
import ForgotPass from "./ForgotPass";
import { vi } from "vitest";

describe("ForgotPass Component Snapshot", () => {
  it("renders correctly and matches snapshot", () => {
    const mockOnClose = vi.fn();
    const { asFragment } = render(<ForgotPass onClose={mockOnClose} />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
