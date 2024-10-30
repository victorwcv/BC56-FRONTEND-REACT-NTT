import { AppContextProvider } from "./../context/AppContextProvider";
import SearchBar from "./SearchBar";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing SearchBar component", () => {
  test("should render SearchBar component", () => {
    const { container } = render(
      <AppContextProvider>
        <SearchBar categories={[]} currentTerm="" currentCategory="all" onChangeTerm={() => {}} onChangeCategory={() => {}} />
      </AppContextProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
