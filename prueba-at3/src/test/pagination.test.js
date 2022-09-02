import { render } from "@testing-library/react";
import React from "react";

import Pagination from "components/pagination";

describe("Pagination", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Pagination data={[1, 2, 3]} countPage={2} changeList={() => null} />
    );
    expect(baseElement).toBeTruthy();
  });
  it("should match snapshot", () => {
    const { baseElement } = render(
      <Pagination data={[1, 2, 3]} countPage={2} changeList={() => null} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
