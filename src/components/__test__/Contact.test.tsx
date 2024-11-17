import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact", () => {
  it("should render button element", () => {
    render(<Contact />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
