import { AppContextProvider } from "../../context/AppContextProvider";
import OrderSummary from "./OrderSummary";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("Testing OrderSummary component", () => {
  test("should render OrderSummary component", () => {
    const { container } = render(
      <AppContextProvider>
        <MemoryRouter>
          <OrderSummary />
        </MemoryRouter>
      </AppContextProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
