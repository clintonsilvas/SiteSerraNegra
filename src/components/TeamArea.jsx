import React, { useState, useEffect } from "react";
import { teamMembers } from "../data/teamImages";
import { FaWhatsapp, FaUserCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import "./TeamArea.css";

export default function TeamArea({ seo = false }) {
  const [activeMember, setActiveMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se a tela é mobile para fallback responsivo
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ângulos pré-calculados para distribuir os colaboradores em círculo/órbita
  const total = teamMembers.length;
  const radiusPercent = 38; // Raio de afastamento do centro (%)

  return (
    <>
      {seo && (
        <Helmet>
          <title>
            Nosso Time - Serra Negra Materiais para Construção Alterosa - MG
          </title>
          <meta
            name="description"
            content="Conheça nossa equipe de vendedores e profissionais preparados para oferecer atendimento de qualidade e ajudar em sua construção."
          />
          <link rel="canonical" href="https://serranegramc.com.br/time" />
          <meta
            name="keywords"
            content="materiais de construção, loja de construção, cimento, areia, tijolo, Alterosa MG, Serra Negra Materiais"
          />
        </Helmet>
      )}

      <section id="team-area" className="py-5">
        <div className="container py-4">
          <div className="row text-center mb-4">
            <div className="col-12">
              <span className="team-subtitle">Quem Faz Acontecer</span>
              <h2 className="main-title">Nossa Equipe</h2>
              <p className="team-description mx-auto">
                {isMobile
                  ? "Toque nos membros da equipe para entrar em contato diretamente."
                  : "Passe o mouse pelos colaboradores para explorar nosso time interativo."}
              </p>
            </div>
          </div>

          {/* MODO GRAFO / REDE FLUTUANTE (Desktop e Telas Médias/Grandes) */}
          {!isMobile ? (
            <div className="team-graph-container">
              {/* SVG para desenhar os galhos/linhas entre a Logo e os Membros */}
              <svg className="team-connections-svg">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#27ae60" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#81c784" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="lineGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#27ae60" stopOpacity="1" />
                    <stop offset="100%" stopColor="#2ecc71" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {teamMembers.map((membro, idx) => {
                  const angle = (idx * (360 / total) - 90) * (Math.PI / 180);
                  const x2 = 50 + radiusPercent * Math.cos(angle);
                  const y2 = 50 + radiusPercent * Math.sin(angle);
                  const isActive = activeMember === idx;

                  return (
                    <line
                      key={idx}
                      x1="50%"
                      y1="50%"
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      className={`graph-branch ${isActive ? "active" : ""}`}
                      stroke={isActive ? "url(#lineGradActive)" : "url(#lineGrad)"}
                    />
                  );
                })}
              </svg>

              {/* NÓ CENTRAL: LOGO */}
              <div className="central-node floating-node">
                <div className="central-logo-wrapper">
                  <img src="/logo.svg" alt="Serra Negra" className="central-logo" />
                </div>
                <span className="central-pulse"></span>
              </div>

              {/* NÓS PERIFÉRICOS: COLABORADORES */}
              {teamMembers.map((membro, idx) => {
                const angle = (idx * (360 / total) - 90) * (Math.PI / 180);
                const x = 50 + radiusPercent * Math.cos(angle);
                const y = 50 + radiusPercent * Math.sin(angle);
                const isActive = activeMember === idx;

                // Animação levemente descompassada por nó
                const animDelay = `${(idx * 0.4).toFixed(1)}s`;

                return (
                  <div
                    key={idx}
                    className={`member-node ${isActive ? "active" : ""}`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      animationDelay: animDelay,
                    }}
                    onMouseEnter={() => setActiveMember(idx)}
                    onMouseLeave={() => setActiveMember(null)}
                  >
                    <div className="member-avatar-wrapper">
                      <img
                        src={membro.img}
                        alt={membro.nome}
                        className="member-avatar"
                      />
                    </div>

                    {/* POPUP / TOOLTIP COM DETALHES AO PASSAR O MOUSE */}
                    <div className="member-popover">
                      <h5 className="member-name">{membro.nome}</h5>
                      <span className="member-role">{membro.cargo}</span>
                      <button
                        className="member-whatsapp-btn"
                        onClick={() =>
                          window.open(
                            `https://wa.me/55${membro.fone}?text=Olá,%20gostaria%20de%20falar%20com%20${encodeURIComponent(membro.nome)}`,
                            "_blank"
                          )
                        }
                      >
                        <FaWhatsapp size={16} /> Conversar no WhatsApp
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* MODO GRID RESPONSIVO (TELAS PEQUENAS / MOBILE) */
            <div className="row g-4 justify-content-center">
              {teamMembers.map((membro, idx) => (
                <div className="col-sm-6 col-12" key={idx}>
                  <div className="mobile-team-card text-center p-3">
                    <img
                      src={membro.img}
                      alt={membro.nome}
                      className="mobile-avatar mb-3"
                    />
                    <h5>{membro.nome}</h5>
                    <p className="text-muted small mb-3">{membro.cargo}</p>
                    <button
                      className="btn btn-success btn-sm w-100 rounded-pill"
                      onClick={() =>
                        window.open(
                          `https://wa.me/55${membro.fone}?text=Olá,%20gostaria%20de%20falar%20com%20${encodeURIComponent(membro.nome)}`,
                          "_blank"
                        )
                      }
                    >
                      <FaWhatsapp className="me-1" /> Conversar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}