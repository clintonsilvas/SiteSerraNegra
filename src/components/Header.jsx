import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container id="nav-container">
        <Navbar.Brand href="#home">
          <img id="logo" src={logo} alt="Serra Negra Materiais" /> Serra Negra Materiais
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-links" />
        <Navbar.Collapse id="navbar-links">
          <Nav className="ml-auto">
            <Nav.Link href="#about-area">Sobre nós</Nav.Link>
            <Nav.Link href="#services-area">Produtos</Nav.Link>
            <Nav.Link href="#data-area">Dados</Nav.Link>
            <Nav.Link href="#team-area">Time</Nav.Link>
            <Nav.Link href="#footer-area">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
