import React from "react";
import { Nav } from "react-bootstrap";
import "./styles/styleNavbar.css";

export default function navbar() {
  return (
    <Nav
      className="topbar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">
          <img src="iwamashinshinlogo-1" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">News</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Iwama Aikido</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Schedule</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Affiliate Dojos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Contact Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5">Store</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6">Language</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
