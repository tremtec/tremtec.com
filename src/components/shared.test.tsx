import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import * as shared from "./shared";

describe("NotFound component", () => {
  it("should render with default text", () => {
    const result = render(() => <shared.NotFound />);
    expect(result.getByText(/Page Not Found/)).toBeTruthy();
  });

  it("should render with default text", () => {
    const expectedText = "not found text";
    const result = render(() => (
      <shared.NotFound>{expectedText}</shared.NotFound>
    ));
    expect(result.getByText(expectedText)).toBeTruthy();
  });
});
