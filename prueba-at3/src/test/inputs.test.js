import { render } from "@testing-library/react";
import React from "react";

import SimpleInput from "components/inputs/simpleInput";

describe("SimpleInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <SimpleInput
        type="text"
        label="Name"
        classFieldName="semi"
        value="value"
        validation={() => true}
        onChange={() => null}
      />
    );
    expect(baseElement).toBeTruthy();
  });
  it("should match snapshot", () => {
    const { baseElement } = render(
      <SimpleInput
        type="text"
        label="Name"
        classFieldName="semi"
        value="value"
        validation={() => true}
        onChange={() => null}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
