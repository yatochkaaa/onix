import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Menu: React.FC = () => {
  const [show, setShow] = React.useState(false);

  const showDropdown = (e: any)=>{
      setShow(!show);
  }

  const hideDropdown = (e: any) => {
      setShow(false);
  }

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="navbar__nav" id="responsive-navbar-nav">
        <Nav className="navbar__main">
          <Nav.Link className="navbar__mainLink" href="/">Cпівпраця</Nav.Link>
          <NavDropdown
            className="navbar__mainLink"
            title="Послуги" 
            id="collasible-nav-dropdown"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <NavDropdown.Item href="#action1">
              Послуга 1
            </NavDropdown.Item>

            <NavDropdown.Item href="#action2">
              Послуга 2
            </NavDropdown.Item>

            <NavDropdown.Item href="#action3">
              Послуга 3
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="navbar__mainLink" href="/">Продукти</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Nav className="navbar__right">
        <Nav.Link className="navbar__rightLink" href="#en">EN</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Menu;
