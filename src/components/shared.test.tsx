import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import * as shared from "./shared";
import { StartRouter } from "solid-start/entry-server/StartServer";
import { Router } from "solid-start/islands/server-router";

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

describe("Container component", () => {
  it("should render with default max w size", () => {
    const expectedText = "not found text";
    const result = render(() => (
      <shared.Container>{expectedText}</shared.Container>
    ));
    const fragment = result.asFragment();

    expect(result.getByText(expectedText)).toBeTruthy();
    expect(fragment).toMatch(/max-w-4xl/);
    expect(fragment).toMatch(/mx-auto/);
  });
});
