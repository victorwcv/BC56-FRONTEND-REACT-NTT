import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { AppContextProvider } from "./AppContextProvider";
import { AppContext } from "./appContext";
import { initialState } from "./appReducer";
import { test, expect, describe } from "vitest";
import "@testing-library/jest-dom";

// mock component

const MockComponent = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppState debe estar dentro de un AppProvider");
  }

  return (
    <>
      <span data-testid="state-value">{JSON.stringify(context.state)}</span>
      <button
        onClick={() =>
          context.dispatch({
            type: "FETCH_PRODUCTS_START",
          })
        }
      >
        Dispatch
      </button>
    </>
  );
};

describe("AppContextProvider test", () => {
  test("should provide the initial state", () => {
    render(
      <AppContextProvider>
        <MockComponent />
      </AppContextProvider>
    );

    const stateValue = screen.getByTestId("state-value");
    expect(stateValue).toHaveTextContent(JSON.stringify(initialState));
  });

  test("should dispatch an action", () => {
    render(
      <AppContextProvider>
        <MockComponent />
      </AppContextProvider>
    );

    const dispatchButton = screen.getByText("Dispatch");

    fireEvent.click(dispatchButton);

    const stateValue = screen.getByTestId("state-value");
    expect(stateValue).toHaveTextContent(
      JSON.stringify({ ...initialState, isLoading: true })
    );
  });
});
