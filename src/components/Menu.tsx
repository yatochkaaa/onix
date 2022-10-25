import { Container, Nav, Navbar } from "react-bootstrap";

const Menu: React.FC = () => {
  return (
    <Navbar className="menu justify-content-lg-center ms-xs-2" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="menu__nav" id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Second</Nav.Link>
          <Nav.Link href="/">Third</Nav.Link>
          <Nav.Link href="/">Fourth</Nav.Link>
          <Nav.Link href="/">Fifth</Nav.Link>
          <Nav.Link href="/">Sixth</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="/">EN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
