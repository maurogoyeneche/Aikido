import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import "./styles/styleNavbar.css";
import { Link } from "react-router-dom";
<Link to="#home" className="navbar-brand">
  <Image src="/img/iwamashinshinlogo-2.png" className="logo" />
</Link>;
export default function NavbarMenu() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="#home" className="navbar-brand">
              <Image src="/img/iwamashinshinlogo-2.png" className="logo" />
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">News</Nav.Link>
              <Nav.Link href="#link">Dojo</Nav.Link>
              <Nav.Link href="#link">Galeria</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
