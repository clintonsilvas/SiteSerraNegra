import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaDirections
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import "./ContactArea.css";

export default function ContactArea({ seo = false }) {
  const mapsUrl =
    "https://www.google.com/maps/place/Serra+Negra+Materiais+para+Constru%C3%A7%C3%A3o+LTDA/@-21.2582832,-46.1437887,19.5z";

  return (
    <>
      {seo && (
        <Helmet>
          <title>
            Contato e Localização - Serra Negra Materiais para Construção
          </title>
          <meta
            name="description"
            content="Entre em contato com a Serra Negra Materiais em Alterosa-MG. Confira telefone, endereço, horário de funcionamento e veja como chegar com o mapa integrado."
          />
          <link rel="canonical" href="https://serranegramc.com.br/contato" />
          <meta
            name="keywords"
            content="materiais de construção, loja de construção, cimento, areia, tijolo, Alterosa MG, Serra Negra Materiais"
          />
        </Helmet>
      )}

      <section id="contact-area" className="py-5">
        <div className="container py-4">
          {/* Cabeçalho */}
          <div className="row mb-5 text-center">
            <div className="col-12">
              <span className="contact-subtitle">Fale Conosco & Visite-nos</span>
              <h2 className="main-title">Onde Estamos & Contato</h2>
              <p className="contact-description mx-auto">
                Estamos no centro de Alterosa-MG com amplo estacionamento próprio para melhor te atender.
              </p>
            </div>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Coluna Esquerda: Informações e Cards de Contato */}
            <div className="col-lg-5">
              <div className="contact-info-wrapper h-100">
                {/* Telefone e Horários */}
                <div className="contact-card mb-3">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="contact-details">
                    <h6>Telefone & Atendimento</h6>
                    <a href="tel:+553532941140" className="contact-link">
                      (35) 3294-1140
                    </a>
                    <div className="hours-badge mt-2">
                      <p className="mb-1">
                        <FaClock className="me-1" /> <strong>Seg. a Sex.:</strong> 06:30 às 17:30
                      </p>
                      <p className="mb-0">
                        <FaClock className="me-1" /> <strong>Sábado:</strong> 06:30 às 11:30
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-card mb-3">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h6>E-mail</h6>
                    <a href="mailto:serranegramc@gmail.com" className="contact-link">
                      serranegramc@gmail.com
                    </a>
                  </div>
                </div>

                {/* Endereço */}
                <div className="contact-card">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h6>Venha tomar um café</h6>
                    <p className="address-text">
                      Avenida da Saudade, 49 - Cruzeiro
                      <br />
                      Alterosa - MG
                    </p>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-directions"
                    >
                      <FaDirections className="me-2" /> Como Chegar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Mapa Interativo */}
            <div className="col-lg-7">
              <div className="map-wrapper h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1105.4665672402161!2d-46.143608701214426!3d-21.258341918422826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b5e1fe9cafee17%3A0xf1ce0bf7ccc2b8b!2sSerra%20Negra%20Materiais%20para%20Constru%C3%A7%C3%A3o%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1714507007999!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Serra Negra Materiais"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}