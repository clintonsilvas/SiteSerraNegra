import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaClock,
  FaBuilding,
  FaChevronRight
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer-area" className="pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Coluna 1: Sobre & Institucional */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <div className="footer-brand mb-3">
              <img
                src="/logo.svg"
                alt="Serra Negra Materiais"
                className="footer-logo mb-2"
              />
              <h4 className="footer-title">Serra Negra</h4>
              <p className="footer-subtitle">Materiais para Construção</p>
            </div>
            <p className="footer-text">
              Desde 1990 oferecendo a maior variedade em materiais brutos, artefatos de cimento e acabamento para Alterosa e região.
            </p>
            <div className="footer-cnpj">
              <FaBuilding className="me-2 text-success-custom" />
              <span>CNPJ: 17.267.006/0001-22</span>
            </div>
          </div>

          {/* Coluna 2: Atendimento e Endereço */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h5 className="footer-heading">Atendimento & Local</h5>
            <ul className="footer-info-list list-unstyled">
              <li>
                <FaMapMarkerAlt className="info-icon" />
                <span>Centro de Alterosa - MG</span>
              </li>
              <li>
                <FaClock className="info-icon" />
                <div>
                  <strong>Segunda a Sexta:</strong>
                  <br />
                  06h30 às 17h30
                </div>
              </li>
              <li>
                <FaClock className="info-icon" />
                <div>
                  <strong>Sábados:</strong>
                  <br />
                  06h30 às 11h30
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div className="col-lg-2 col-md-6 text-center text-md-start">
            <h5 className="footer-heading">Navegação</h5>
            <ul className="footer-links list-unstyled">
              {[
                { name: "Sobre Nós", path: "/sobre" },
                { name: "Produtos", path: "/servicos" },
                { name: "Dados", path: "/dados" },
                { name: "Time", path: "/time" },
                { name: "Onde Estamos", path: "/contato" },
                { name: "Orçamento", path: "/contato" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.path}>
                    <FaChevronRight className="link-arrow" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h5 className="footer-heading">Conecte-se Conosco</h5>
            <p className="footer-text small mb-3">
              Acompanhe nossas novidades, ofertas e lançamentos nas redes sociais.
            </p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/Serra.negra.mc1990/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-btn facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/serranegra.mc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-btn instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/553532941140"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
                className="social-btn whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/company/serra-negra-materiais-para-constru%C3%A7%C3%A3o-ltda/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-btn linkedin"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        {/* Créditos Finais */}
        <div className="row align-items-center copyright-row">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0 copyright-text small">
              &copy; {year} Serra Negra Materiais. Todos os direitos reservados.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 copyright-text small">
              Desenvolvido por{" "}
              <a
                href="https://github.com/clintonsilvas"
                target="_blank"
                rel="noopener noreferrer"
                className="developer-link fw-bold"
              >
                Clinton Nogueira
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}