import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { createMemoryRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContextProvider";
import "@testing-library/jest-dom";

describe("Router Tests", () => {
  test("should render Market component on '/' route", () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ["/"],
    });

    render(
      <AppContextProvider>
        <RouterProvider router={testRouter} />
      </AppContextProvider>
    );

    expect(screen.getByTestId("market")).toBeInTheDocument();
  });

  test("should render Market component on '/order-summary' route", () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ["/order-summary"],
    });

    render(
      <AppContextProvider>
        <RouterProvider router={testRouter} />
      </AppContextProvider>
    );

    expect(screen.getByTestId("order-summary")).toBeInTheDocument();
  });

  test("should render ErrorPage for unknown route", () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ["/unknown-route"],
    });

    render(
      <AppContextProvider>
        <RouterProvider router={testRouter} />
      </AppContextProvider>
    );

    expect(screen.getByTestId("error-page")).toBeInTheDocument();
  });
});
