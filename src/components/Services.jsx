import React from "react";
import {
  FaIndustry,
  FaPersonDigging,
  FaFaucet,
  FaPaintRoller,
  FaTrowelBricks,
} from "react-icons/fa6";
import { BsBricks } from "react-icons/bs";
import "./Services.css";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: <FaIndustry />,
    title: "Laje Pré Moldada",
    text: "Trilhos e lajotas referências em lajes para piso e teto.",
  },
  {
    icon: <FaPersonDigging />,
    title: "Material Bruto",
    text: "Cimento, areia, brita, telha, vergalhões e mais para sua base.",
  },
  {
    icon: <FaFaucet />,
    title: "Tubos e Conexões",
    text: "Tubos, curvas, tees, registros e mais de todas as marcas.",
  },
  {
    icon: <FaPaintRoller />,
    title: "Itens de Acabamento",
    text: "Tintas, pisos, portas, decoração, iluminação, jardinagem.",
  },
  {
    icon: <FaTrowelBricks />,
    title: "Blocos de Concreto",
    text: "Blocos, canaletas, moirões com qualidade e durabilidade.",
  },
  {
    icon: <BsBricks />,
    title: "Muros Montados",
    text: "Muros prontos em poucas horas com praticidade.",
  },
];

export default function Services({ seo = false }) {
  return (
    <>
      {seo && (
        <Helmet>
          <title>
            Nossos serviços - Serra Negra Materiais para Construção Alterosa -
            MG
          </title>
          <meta
            name="description"
            content="Conheça nossos produtos e serviços com qualidade, confiança e ótimo atendimento. Trabalhamos com materiais, soluções completas e atendimento especializado para melhor atender"
          />
          <link rel="canonical" href="https://serranegramc.com.br/servicos" />
          <meta
            name="keywords"
            content="materiais de construção, loja de construção, cimento, areia, tijolo, Alterosa MG, Serra Negra Materiais"
          />
        </Helmet>
      )}

      <section id="services-area" className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h3 className="main-title">Nossos Produtos</h3>
            </div>
          </div>
          <div className="row">
            {services.map((item, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="service-box text-center p-4 shadow-sm h-100">
                  <div className="service-icon mb-3">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
