import { AppContextProvider } from "../../context/AppContextProvider";
import Market from "./Market";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Testing Market component", () => {
  test("should render Market component", () => {
    const { container } = render(
      <AppContextProvider>
        <MemoryRouter>
          <Market />
        </MemoryRouter>
      </AppContextProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
