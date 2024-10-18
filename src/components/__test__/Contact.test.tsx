// import { render, screen } from "@testing-library/react";
import { render } from "vitest-browser-react";
// import { render } from "vitest-browser-react";
import { describe, expect, it } from "vitest";
import Contact from "../Contact";

describe("Contact", () => {
  it("should render image container", () => {
    const { getByRole } = render(<Contact />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
