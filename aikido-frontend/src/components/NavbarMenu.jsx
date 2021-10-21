import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import "./styles/styleNavbar.css";

export default function NavbarMenu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Image src="/img/iwamashinshinlogo-2.png" className="logo" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">News</Nav.Link>
          <Nav.Link href="#features">Dojos</Nav.Link>
          <Nav.Link href="#features">Galeria</Nav.Link>
          <Nav.Link href="#pricing">Contactanos</Nav.Link>
          <div className="ms-3">
            <Nav.Link href="#pricing">Login</Nav.Link>
            {/* <Nav.Link href="#pricing">Logout</Nav.Link> */}
          </div>
        </Nav>
      </Navbar>
    </>
  );
}
