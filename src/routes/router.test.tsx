import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { router } from "./router";
import { AppContextProvider } from "../context/AppContextProvider"; 
import "@testing-library/jest-dom";

describe("Router Tests", () => {
  it("should render LoginPage on '/' route", () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ["/"],
    });

    render(
      <AppContextProvider>
        <RouterProvider router={testRouter} />
      </AppContextProvider>
    );

    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });

  it("should rendirect to login page on unknown route", () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ["/unknown-route"],
    });

    render(
      <AppContextProvider>
        <RouterProvider router={testRouter} />
      </AppContextProvider>
    );

    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });


});
