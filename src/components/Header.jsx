import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container id="nav-container">
        <Navbar.Brand href="/">
          <img id="logo" src={logo} alt="Serra Negra Materiais" /> Serra Negra
          Materiais
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-links" />
        <Navbar.Collapse id="navbar-links">
          <Nav className="ml-auto">
            <Nav.Link href="/sobre">Sobre nós</Nav.Link>
            <Nav.Link href="/servicos">Produtos</Nav.Link>
            <Nav.Link href="/dados">Dados</Nav.Link>
            <Nav.Link href="/time">Time</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
