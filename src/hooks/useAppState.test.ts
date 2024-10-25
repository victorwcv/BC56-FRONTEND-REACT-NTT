import { renderHook } from "@testing-library/react";
import { AppContextProvider } from "../context/AppContextProvider";
import { useAppState } from "../hooks/useAppState";

describe("useAppState Hook", () => {
  test("should return state and dispatch when used within AppProvider", () => {
    const { result } = renderHook(() => useAppState(), {
      wrapper: AppContextProvider,
    });

    expect(result.current).toBeDefined();
  });

  
});
