import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { FaWhatsapp, FaArrowRight, FaShieldAlt, FaTruck, FaStore } from "react-icons/fa";
import hero from "../assets/img/hero.webp";
import frente from "../assets/img/fabrica.webp";
import func from "../assets/img/func.webp";
import "./Slider.css";

export default function Slider() {
  const anosMercado = new Date().getFullYear() - 1990;

  return (
    <section className="hero-slider-section" id="hero">
      <h1 className="visually-hidden">
        Serra Negra Materiais para Construção Alterosa
      </h1>

      <Carousel fade controls indicators interval={6000} className="hero-carousel">
        {/* Slide 1 - Tradição / Marca */}
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100 kenburns-img"
              src={hero}
              alt="Fachada Serra Negra Materiais"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <Carousel.Caption>
            <div className="caption-card">
              <span className="hero-badge">
                <FaShieldAlt /> Tradicional em Alterosa e Região
              </span>
              <h2>Tudo para realizar a sua obra do chão ao teto</h2>
              <p>
                Tradição e confiança com mais de <strong>{anosMercado} anos</strong> no mercado de construção.
              </p>
              <div className="hero-btn-group">
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-btn primary-btn"
                >
                  <FaWhatsapp /> Solicitar Orçamento
                </a>
                <a href="/servicos" className="hero-btn outline-btn">
                  Ver Produtos <FaArrowRight />
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 - Atendimento / Time */}
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100 kenburns-img"
              src={func}
              alt="Nossa Equipe de Atendimento"
              decoding="async"
            />
          </div>
          <Carousel.Caption>
            <div className="caption-card">
              <span className="hero-badge">
                <FaStore /> Atendimento Especializado
              </span>
              <h2>Equipe pronta para orientar seu projeto</h2>
              <p>
                Atendimento consultivo e ágil para ajudar você a escolher os melhores materiais pelo melhor preço.
              </p>
              <div className="hero-btn-group">
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-btn primary-btn"
                >
                  <FaWhatsapp /> Falar com Atendente
                </a>
                <a href="/time" className="hero-btn outline-btn">
                  Nosso Time <FaArrowRight />
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 - Infraestrutura / Fábrica */}
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100 kenburns-img"
              src={frente}
              alt="Fábrica de artefatos de cimento"
              decoding="async"
            />
          </div>
          <Carousel.Caption>
            <div className="caption-card">
              <span className="hero-badge">
                <FaTruck /> Fabricação e Pronta Entrega
              </span>
              <h2>Infraestrutura própria para entregas rápidas</h2>
              <p>
                Blocos, canaletas, tubos, postes e lajes produzidos com controle rigoroso de qualidade.
              </p>
              <div className="hero-btn-group">
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-btn primary-btn"
                >
                  <FaWhatsapp /> Cotar no Atacado
                </a>
                <a href="/sobre" className="hero-btn outline-btn">
                  Conheça a Fábrica <FaArrowRight />
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}