import { render } from "vitest-browser-react";
import { describe, expect, it } from "vitest";
// import "@testing-library/dom";
import Hero from "../Hero";

describe("Hero", () => {
  it("should render image container", () => {
    const { getByTestId } = render(<Hero />);
    const articleElement = getByTestId("image-container-1");
    expect(articleElement).toBeInTheDocument();
  });
});
