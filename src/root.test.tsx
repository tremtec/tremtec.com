import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import Root from "./root";

describe("<Root /> component", () => {
  it("should be rendering root", () => {
    const result = render(() => <Root />, {});
    expect(result).not.toBeNull();
  });
});
