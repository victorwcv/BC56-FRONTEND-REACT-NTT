import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppContextProvider } from "./context/AppContextProvider";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Testing App component", () => {
  beforeEach(() => {
    render(
      <AppContextProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </AppContextProvider>
    );
  });

  test("renders TopBar", () => {
    const topBar = screen.getByTestId("topbar");
    expect(topBar).toBeInTheDocument();
  });

  test("renders Footer", () => {
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
