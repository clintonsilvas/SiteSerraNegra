import React from "react";
import funcImg from "../assets/img/func.webp";
import { FaCheckCircle } from "react-icons/fa";
import "./About.css";
import { Helmet } from "react-helmet-async";

export default function About({ seo = false }) {
  const anosMercado = new Date().getFullYear() - 1990;

  return (
    <>
      {seo && (
        <Helmet>
          <title>
            Sobre nós - Serra Negra Materiais para Construção Alterosa - MG
          </title>
          <meta
            name="description"
            content="Conheça a história da Serra Negra Materiais, empresa de Alterosa-MG dedicada a oferecer qualidade, confiança e ótimo atendimento."
          />
          <link rel="canonical" href="https://serranegramc.com.br/sobre" />
          <meta
            name="keywords"
            content="materiais de construção, fundadores, cimento, areia, tijolo, Alterosa MG, Serra Negra Materiais"
          />
        </Helmet>
      )}

      <section id="about-area" className="py-5">
        <div className="container py-4">
          <div className="row mb-5 text-center">
            <div className="col-12">
              <span className="about-subtitle">Nossa História & Valores</span>
              <h2 className="main-title">Sobre a Serra Negra</h2>
            </div>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-img-container">
                <img
                  className="img-fluid about-main-img shadow-lg"
                  src={funcImg}
                  alt="Equipe Serra Negra Materiais"
                />
                <div className="experience-badge">
                  <span className="exp-number">+{anosMercado}</span>
                  <span className="exp-text">Anos de Tradição</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <h3 className="about-heading">
                  Construindo histórias e realizando sonhos em Alterosa e região
                </h3>
                <p className="about-text">
                  Sempre trabalhando com ética, compromisso e dedicação para entregar o melhor aos nossos clientes, da base ao acabamento.
                </p>
                <p className="about-text">
                  Nossa infraestrutura própria e equipe especializada garantem excelência e agilidade em cada atendimento, honrando a confiança depositada em nossa marca.
                </p>

                <div className="row g-3 mt-4">
                  {[
                    "Produtos de Qualidade",
                    "Preço Justo",
                    "Atendimento Personalizado",
                    "Entrega Rápida",
                    "Facilidade no Pagamento"
                  ].map((item, index) => (
                    <div className="col-sm-6" key={index}>
                      <div className="about-feature-card">
                        <FaCheckCircle className="about-icon" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}