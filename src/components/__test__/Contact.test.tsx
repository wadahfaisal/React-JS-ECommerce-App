import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "../Contact";

describe("Contact", () => {
  it("should render image container", () => {
    render(<Contact />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
