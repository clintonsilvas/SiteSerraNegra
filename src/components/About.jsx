import React from "react";
import funcImg from "../assets/img/func.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
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
              Há mais de 34 anos no mercado da construção civil
            </h3>
            <p>
              Sempre trabalhando com ética e buscando entregar o melhor a seus
              clientes.
            </p>
            <p>
              Da base ao acabamento, garantimos qualidade e excelência em nossos
              produtos.
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
                <FaCheckCircle className="about-icon" /> Facilidade no Pagamento
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
