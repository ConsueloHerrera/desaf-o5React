import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const total = 0;
  const token = false;

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand> <Link className="link whiteText" to="/">Pizzeria Mamma Mia</Link></Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="link whiteText" to="/">Home</Link>
              {token ? (
                <>
                  <Link className="link whiteText" to="/profile">Profile</Link>
                </>
              ) : (
                <>
                  <Link className="link whiteText" to="/login">Login</Link>
                  <Link className="link whiteText" to="/register">Register</Link>
                </>
              )}
            </Nav>
            <Nav>
              <Link className="link whiteText" to="/cart">
                <Nav.Item className="d-flex align-items-center carrito">
                  <span>Total: $</span>
                  <span className="ms-2">{total}</span>
                </Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
