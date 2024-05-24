import { screen, render } from "@testing-library/react";
import About from "./about";

describe("About section", () => {
  it("Should the heading \"About our Casino brand\"", () => {
    render(<About />);

    const headerText = screen.getByText("About our");
    const spanInHeaderText = screen.getByText("Casino brand");

    expect(headerText).toBeInTheDocument();
    expect(spanInHeaderText).toBeInTheDocument();
  });

  it("should display wheel of fortune photo", () => {
    const { getAllByRole } = render(<About />);

    const images = getAllByRole("img");
    const [pointerImg, spinningImg] = images;

    console.log(images[0].innerHTML);

    expect(pointerImg).toHaveAttribute("alt", "spinning wheel pointer");

    expect(spinningImg).toHaveAttribute("alt", "wheel of fortune image");
  });
});
