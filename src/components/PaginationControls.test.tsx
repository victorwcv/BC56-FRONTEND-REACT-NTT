import { render } from "@testing-library/react";
import PaginationControls from "./PaginationControls";

describe("PaginationControls", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(
      <PaginationControls 
        currentPage={3}
        pageCount={10}
        onPageChange={() => {}}
      />
    );
    
    expect(asFragment()).toMatchSnapshot();
  });
});
