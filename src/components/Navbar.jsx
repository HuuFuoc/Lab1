import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ThemeContext } from "../contexts/ThemeContext";
export default function MyNavbar() {
  const { theme } = useContext(ThemeContext);
  return (
    <Navbar
      bg={theme}
      data-bs-theme={theme}
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">FlowerShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Đặt Hoa</Nav.Link>
            <NavDropdown title="Lựa chọn" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Lan Hồ Điệp
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lan Vanda</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Lan Cattleya
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Lan Dendrobium
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
