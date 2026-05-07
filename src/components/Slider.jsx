import React from "react";
import { Carousel, Container } from "react-bootstrap";
import hero from "../assets/img/hero.jpg";
import frente from "../assets/img/fabrica.jpg";
import func from "../assets/img/func.jpeg";
import "./Slider.css";

export default function Slider() {
  return (
    <Container fluid className="p-0">
      <h1 style={{ display: "none" }}>
        Serra Negra Materiais para Construção Alterosa
      </h1>
      <Carousel fade controls indicators>
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100"
              src={hero}
              alt="Fachada da empresa"
            />
          </div>
          <Carousel.Caption>
            <h2>Quer construir sua casa?</h2>
            <p>
              Conte conosco, temos mais de {new Date().getFullYear() - 1990}{" "}
              anos de mercado para te ajudar.
            </p>
            <a href="#team-area" className="main-btn">
              Contate-nos
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100"
              src={func}
              alt="Fachada da empresa"
            />
          </div>
          <Carousel.Caption>
            <h2>Equipe treinada para melhor te atender</h2>
            <p>Nossa equipe de vendedores está pronta para lhe atender.</p>
            <a href="#team-area" className="main-btn">
              Entre em contato
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100"
              src={frente}
              alt="Funcionários da empresa"
            />
          </div>
          <Carousel.Caption>
            <h2>Infraestutura própria para melhor te atender</h2>
            <p>
              Blocos, canaletas, muros, placas de cimento, postes, esteios e
              muito mais
            </p>
            <a href="#team-area" className="main-btn">
              Entre em contato
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
