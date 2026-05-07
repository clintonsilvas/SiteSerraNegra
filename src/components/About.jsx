import React from "react";
import funcImg from "../assets/img/func.webp";
import { FaCheckCircle } from "react-icons/fa";
import "./About.css";
import { Helmet } from "react-helmet-async";

export default function About({ seo = false }) {
  return (
    <>
      {seo && (
        <Helmet>
          <title>Sobre nós - Serra Negra Materiais</title>
          <meta
            name="description"
            content="Conheça a história da Serra Negra Materiais, empresa de Alterosa-MG dedicada a oferecer qualidade, confiança e ótimo atendimento."
          />
          <link rel="canonical" href="https://serranegramc.com.br/sobre" />
          <meta
            name="keywords"
            content="materiais de construção, loja de construção, cimento, areia, tijolo, Alterosa MG, Serra Negra Materiais"
          />
        </Helmet>
      )}

      <section id="about-area" className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h3 className="main-title">Sobre nós</h3>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                className="img-fluid rounded shadow"
                src={funcImg}
                alt="Funcionários da empresa"
              />
            </div>
            <div className="col-md-6">
              <h3 className="about-title mb-3">
                Há mais de {new Date().getFullYear() - 1990} anos no mercado da
                construção civil
              </h3>
              <p>
                Sempre trabalhando com ética e buscando entregar o melhor a seus
                clientes.
              </p>
              <p>
                Da base ao acabamento, garantimos qualidade e excelência em
                nossos produtos.
              </p>
              <p>Honrando nosso compromisso com você cliente.</p>
              <p className="mt-4">Veja outros diferenciais:</p>
              <ul id="about-list" className="list-unstyled">
                <li>
                  <FaCheckCircle className="about-icon" /> Produtos de Qualidade
                </li>
                <li>
                  <FaCheckCircle className="about-icon" /> Preço Justo
                </li>
                <li>
                  <FaCheckCircle className="about-icon" /> Atendimento
                  personalizado
                </li>
                <li>
                  <FaCheckCircle className="about-icon" /> Entrega rápida
                </li>
                <li>
                  <FaCheckCircle className="about-icon" /> Facilidade no
                  Pagamento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
