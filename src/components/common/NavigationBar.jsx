import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../../Styles/NavigationBar.css";

const NavigationBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar fixed="top" variant="dark" expand="lg" className="navbar">
      {/* Use fixed-width Container for centered layout */}
      <Container>
        <Navbar.Brand className="brand" as={Link} to="/">
          CONSTELLI
          <sup>
            <i className="bi bi-r-circle" />
          </sup>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link ${currentPath === "/" ? "active-link" : ""}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-link ${currentPath === "/about" ? "active-link" : ""}`}
            >
              About us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className={`nav-link ${currentPath === "/services" ? "active-link" : ""}`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/careers"
              className={`nav-link ${currentPath === "/careers" ? "active-link" : ""}`}
            >
              Careers
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`nav-link ${currentPath === "/contact" ? "active-link" : ""}`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
