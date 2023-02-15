import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import useAuth from "../helper/zustand";

const NavbarR = () => {
  const user = useAuth((state) => state.user);
  const removeUser = useAuth((state) => state.removeUser);
  const removeAuth = useAuth((state) => state.removeAuth);

  const handleLogout = () => {
    removeUser();
    removeAuth();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Osman Ali SEVİNÇ MOVİE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="m-1" to="/">
              <Button>Home</Button>
            </Link>
          </Nav>
          <Nav className="me-auto">
            {Object.keys(user).length > 0 ? (
              <Button>
                {user.firstName} {user.lastName}
              </Button>
            ) : (
              ""
            )}
          </Nav>
          {Object.keys(user).length > 0 ? (
            <Nav>
              <Link className="m-1" to="/">
                <Button onClick={handleLogout}>Logout</Button>
              </Link>
            </Nav>
          ) : (
            <Nav>
              <Link className="m-1" to="/register">
                <Button>Register</Button>
              </Link>
              <Link className="m-1" to="/login">
                <Button>Login</Button>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarR;
