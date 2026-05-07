import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer-area" className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-md-4 mb-4">
            <h4>Serra Negra Materiais</h4>
            <p>CNPJ: 17.267.006/0001-22</p>
            <p>Centro de Alterosa - MG</p>
            <p>Atendimento:</p>
            <p>De segunda a sexta: 06h30 às 17h30</p>
            <p>Sábados: 06h30 às 11h30</p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Links Rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about-area">Sobre Nós</a>
              </li>
              <li>
                <a href="#services-area">Produtos</a>
              </li>
              <li>
                <a href="#data-area">Dados</a>
              </li>
              <li>
                <a href="#team-area">Time</a>
              </li>
              <li>
                <a href="#news-area">Onde Estamos</a>
              </li>
              <li>
                <a href="#call-area">Orçamento</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Redes Sociais</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/Serra.negra.mc1990/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Serra Negra Materiais"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/serranegra.mc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Serra Negra Materiais"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/553532941140"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp da Serra Negra Materiais"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/serra-negra-materiais-para-constru%C3%A7%C3%A3o-ltda/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Serra Negra Materiais"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0">
            Desenvolvido por{" "}
            <a
              href="https://github.com/clintonsilvas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fw-bold"
            >
              Clinton Nogueira
            </a>{" "}
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
