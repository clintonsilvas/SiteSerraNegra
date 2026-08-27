import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaInfoCircle, 
  FaBoxes, 
  FaChartBar, 
  FaUsers, 
  FaEnvelope, 
  FaWhatsapp 
} from "react-icons/fa";
import logo from "../assets/img/logo.svg";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="custom-navbar">
      <Container id="nav-container">
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <img id="logo" src={logo} alt="Serra Negra Materiais" />
          <span className="brand-text">Serra Negra <strong>Materiais</strong></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-links" />

        <Navbar.Collapse id="navbar-links">
          <Nav className="ms-auto align-items-lg-center gap-1">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === "/" ? "active-link" : ""}
            >
              <FaHome className="nav-icon" /> Início
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/sobre" 
              className={location.pathname === "/sobre" ? "active-link" : ""}
            >
              <FaInfoCircle className="nav-icon" /> Sobre
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/servicos" 
              className={location.pathname === "/servicos" ? "active-link" : ""}
            >
              <FaBoxes className="nav-icon" /> Produtos
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/dados" 
              className={location.pathname === "/dados" ? "active-link" : ""}
            >
              <FaChartBar className="nav-icon" /> Dados
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/time" 
              className={location.pathname === "/time" ? "active-link" : ""}
            >
              <FaUsers className="nav-icon" /> Time
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/contato" 
              className={location.pathname === "/contato" ? "active-link" : ""}
            >
              <FaEnvelope className="nav-icon" /> Contato
            </Nav.Link>

            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-header ms-lg-2"
            >
              <FaWhatsapp size={17} /> Orçamento
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}