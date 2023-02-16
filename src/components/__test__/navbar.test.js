import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavbarR from "../Navbar";

const MockToDoNavbar = () => {
  return (
    <BrowserRouter>
      <NavbarR />
    </BrowserRouter>
  );
};

describe("go to want to page", () => {
  it("when the button clicked and went to page", () => {
    render(<MockToDoNavbar />);
    const buttonEl = screen.getByText(/Home/i);
    expect(buttonEl).toBeInTheDocument();
  });

  it("is button clickable", () => {
    render(<MockToDoNavbar />);
    const buttonEl = screen.getByRole("button", { name: "Home" });
    expect(buttonEl).toBeEnabled();
  });
  it("is button clickable", () => {
    render(<MockToDoNavbar />);
    const buttonEl = screen.getByRole("button", { name: "Register" });
    expect(buttonEl).toBeEnabled();
  });
  it("is button clickable", () => {
    render(<MockToDoNavbar />);
    const buttonEl = screen.getByRole("button", { name: "Login" });
    expect(buttonEl).toBeEnabled();
  });
});
