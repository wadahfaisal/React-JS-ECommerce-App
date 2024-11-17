import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "../Hero";

const MockHero = () => {
  return (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
};

describe("Hero", () => {
  it("should render image container", () => {
    render(<MockHero />);
    const articleElement = screen.getByTestId("image-container-1");
    expect(articleElement).toBeInTheDocument();
  });
});
