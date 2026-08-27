import React from "react";
import {
  FaIndustry,
  FaPersonDigging,
  FaFaucet,
  FaPaintRoller,
  FaTrowelBricks,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa6";
import { BsBricks } from "react-icons/bs";
import "./Services.css";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: <FaIndustry />,
    title: "Lajes Pré-Moldadas",
    text: "Trilhos e lajotas com padrão de engenharia para pisos e forros com máxima segurança.",
    badge: "Fabricação Própria"
  },
  {
    icon: <FaPersonDigging />,
    title: "Material Bruto",
    text: "Cimento, areia, brita, telhas, tijolos e vergalhões para garantir o alicerce firme da sua obra.",
    badge: "Atacado & Varejo"
  },
  {
    icon: <FaFaucet />,
    title: "Tubos e Conexões",
    text: "Sistemas hidráulicos e sanitários completos, tubos, conexões e registros de alta durabilidade.",
    badge: "Principais Marcas"
  },
  {
    icon: <FaPaintRoller />,
    title: "Itens de Acabamento",
    text: "Tintas, acessórios, revestimentos, iluminação e louças para dar o toque final dos seus sonhos.",
    badge: "Variedade"
  },
  {
    icon: <FaTrowelBricks />,
    title: "Artefatos de Cimento",
    text: "Blocos estruturais, canaletas, postes e moirões com teste de resistência garantido.",
    badge: "Alta Resistência"
  },
  {
    icon: <BsBricks />,
    title: "Muros Pré-Moldados",
    text: "Fechamento de lotes e terrenos com muros montados com agilidade, limpeza e economia.",
    badge: "Instalação Rápida"
  },
];

export default function Services({ seo = false }) {
  return (
    <>
      {seo && (
        <Helmet>
          <title>
            Nossos Produtos - Serra Negra Materiais para Construção Alterosa - MG
          </title>
          <meta
            name="description"
            content="Conheça a linha completa de materiais de construção e artefatos de cimento da Serra Negra em Alterosa-MG. Qualidade, pronta entrega e preço justo."
          />
          <link rel="canonical" href="https://serranegramc.com.br/servicos" />
          <meta
            name="keywords"
            content="materiais de construção, lajes, blocos de concreto, cimento, areia, tubos, tijolos, Alterosa MG, Serra Negra Materiais"
          />
        </Helmet>
      )}

      <section id="services-area" className="py-5">
        <div className="container py-4">
          {/* Cabeçalho da Seção */}
          <div className="row mb-5 text-center">
            <div className="col-12">
              <span className="services-subtitle">Soluções para sua Obra</span>
              <h2 className="main-title">Catálogo de Produtos</h2>
              <p className="services-description mx-auto">
                Oferecemos uma linha completa de materiais da base ao acabamento com garantia de qualidade e entrega eficiente.
              </p>
            </div>
          </div>

          {/* Grid de Cards */}
          <div className="row g-4">
            {services.map((item, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="service-card h-100">
                  <div className="service-header">
                    <div className="service-icon-wrapper">
                      {item.icon}
                    </div>
                    <span className="service-tag">{item.badge}</span>
                  </div>

                  <div className="service-body">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>

                  <div className="service-footer">
                    <a
                      href={`https://wa.me/+553532941140?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20de%20${encodeURIComponent(item.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-btn"
                    >
                      <FaWhatsapp size={16} /> Cotar Item <FaArrowRight size={12} className="ms-auto" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}