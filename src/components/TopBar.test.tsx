import TopBar from "./TopBar";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Testing TopBar component", () => {
  test("should render TopBar component", () => {
    const { container } = render(
      <MemoryRouter>
        <TopBar cartItemsLength={0} handleLogout={() => {}}/>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
