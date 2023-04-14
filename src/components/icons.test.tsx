import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import * as icons from "./icons";

const sizes: icons.Sizes[] = ["sm", "lg", "base"];

describe("Logo component", () => {
  it("should render according to the size prop", () => {
    for (const size of sizes) {
      const result = render(() => <icons.Logo size={size} />);
      const fragment = result.asFragment();

      expect(fragment).toContain(`width="${icons.widthMap[size]}"`);
      expect(fragment).toContain(`height="${icons.widthMap[size]}"`);
    }
  });
});
