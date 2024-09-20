import { render, screen } from "@testing-library/react";
import Banner from "./banner";

describe("Banner Component", () => {
  it("Has the header \"Win Unlimited Money By Playing Online Casino Games\" loaded", () => {
    render(<Banner />);

    const header = screen.getByText("Win Unlimited Money By Playing Online Casino Games");

    expect(header).toBeInTheDocument();
  });

  it("should display banner thumbnail", () => {
    const { container } = render(<Banner />);

    const images = container.querySelectorAll("img");

    expect(images[0]).toBeInTheDocument();
    // expect(images[0]).toHaveAttribute("src", "/_next/image?url=%2Ficons%2Fbanner-thumb.png&w=1080&q=75");
    expect(images[0]).toHaveAttribute("alt", "wheel of fortune image");
  });
});
