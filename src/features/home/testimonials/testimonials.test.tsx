import { render } from "@testing-library/react";
import Testimonials from "./testimonials";

describe("Testimonials section", () => {
  it("Should the heading \"What Casino Game Players Say\"", () => {
    const { getByText } = render(<Testimonials />);

    const headerText = getByText("What Say");
    const spanInHeaderText = getByText("Casino Game Players");

    expect(headerText).toBeInTheDocument();
    expect(spanInHeaderText).toBeInTheDocument();
  });

  it("should display names in the testimonial section", () => {
    const { getByText } = render(<Testimonials />);

    const avatarName = getByText("Avatar Aang");
    const madaraName = getByText("Madara Uchiha");
    const tanjiroName = getByText("Tanjiro");
    const captainLevi = getByText("Levi Ackerman");

    [avatarName, madaraName, tanjiroName, captainLevi].forEach((name) => {
      expect(name).toBeInTheDocument();
    });
  });
});
