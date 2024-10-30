import { AppContextProvider } from "../../../context/AppContextProvider";
import ShippingInfoForm from "./ShippingInfoForm";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Testing ShippingInfoForm component", () => {
  test("should render ShippingInfoForm component", () => {
    const { container } = render(
      <AppContextProvider>
        <MemoryRouter>
          <ShippingInfoForm />
        </MemoryRouter>
      </AppContextProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
