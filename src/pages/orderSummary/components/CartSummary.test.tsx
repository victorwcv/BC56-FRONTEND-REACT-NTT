import { AppContextProvider } from "../../../context/AppContextProvider";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CartSummary from "./CartSummary";

describe("Testing CartSummary component", () => {
  test("should render CartSummary component", () => {
    const { container } = render(
      <AppContextProvider>
        <MemoryRouter>
          <CartSummary />
        </MemoryRouter>
      </AppContextProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
