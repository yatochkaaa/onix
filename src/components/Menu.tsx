import { Container, Nav, Navbar } from "react-bootstrap";

const Menu: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav">
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
      </Container>
    </Navbar>
  );
}

export default Menu;
