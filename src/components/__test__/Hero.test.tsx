import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero", () => {
  test("should render image container", () => {
    render(<Hero />);
    const articleElement = screen.getByTestId("image-container-1");
    expect(articleElement).toBeInTheDocument();
  });
});
