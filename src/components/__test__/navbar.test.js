import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, useLocation } from "react-router-dom";
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
  it("when login button is clicked went to login page", () => {
    render(<MockToDoNavbar />);
    const buttonEl = screen.getByRole("button", { name: "Login" });
    userEvent.click(buttonEl);
    const path = window.location.href;
    expect(path).toBe("http://localhost/login");
  });
  it("when register button is clicked went to register page", () => {
    render(<MockToDoNavbar />);
    const buttonEl = screen.getByRole("button", { name: "Register" });
    userEvent.click(buttonEl);
    const path = window.location.href;
    expect(path).toBe("http://localhost/register");
  });
  it("when home button is clicked went to home page", () => {
    render(<MockToDoNavbar />);
    const buttonEl = screen.getByRole("button", { name: "Home" });
    userEvent.click(buttonEl);
    const path = window.location.href;
    expect(path).toBe("http://localhost/");
  });
});
describe("user auth", () => {
  it("is logout button not to be", () => {
    render(<MockToDoNavbar />);
    const buttonEl = screen.queryByRole("button", { name: "Logout" });
    expect(buttonEl).not.toBe();
  });
});
