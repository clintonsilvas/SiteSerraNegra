import React from "react";
import { Carousel, Container } from "react-bootstrap";
import hero from "../assets/img/hero.jpg";
import frente from "../assets/img/frente.jpg";
import func from "../assets/img/func.jpeg";
import "./Slider.css";

export default function Slider() {
  return (
    <Container fluid className="p-0">
      <Carousel fade controls indicators>
        <Carousel.Item>
          <div className="carousel-overlay">
            <img className="d-block w-100" src={hero} alt="Fachada da empresa" />
          </div>
          <Carousel.Caption>
            <h2>Quer construir sua casa?</h2>
            <p>Conte conosco, temos mais de 34 anos de mercado para te ajudar.</p>
            <a href="#contact-area" className="main-btn">Contate-nos</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-overlay">
          <img className="d-block w-100" src={frente} alt="Fachada da empresa" />
          </div>
          <Carousel.Caption>
            <h2>Tirar o projeto do papel?</h2>
            <p>Nossa equipe de vendedores está pronta para lhe atender.</p>
            <a href="#contact-area" className="main-btn">Entre em contato</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-overlay">
          <img className="d-block w-100" src={func} alt="Funcionários da empresa" />
          </div>
          <Carousel.Caption>
            <h2>Melhores preços na hora de construir?</h2>
            <p>Faça um orçamento e ajudaremos você a escolher a melhor opção.</p>
            <a href="#footer-area" className="main-btn">Entre em contato</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
