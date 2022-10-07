import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Header testing", () => {
  it("should render the Header with the text Password Generator", () => {
    render(<Header />);

    const headerText = screen.getByText("Password Generator");
    expect(headerText).toBeInTheDocument();
  });
});
