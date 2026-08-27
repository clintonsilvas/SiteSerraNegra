import React, { useEffect, useState } from "react";
import { FaSmile, FaBoxes, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";
import "./DataArea.css";

const idade = new Date().getFullYear() - 1990;

const items = [
  { value: 8367, label: "Clientes Atendidos", suffix: "+", icon: <FaSmile /> },
  { value: 14523, label: "Produtos em Estoque", suffix: "+", icon: <FaBoxes /> },
  { value: 29, label: "Colaboradores", suffix: "", icon: <FaUsers /> },
  { value: idade, label: "Anos de Mercado", suffix: "+", icon: <FaCalendarAlt /> },
];

export default function DataArea({ seo = false }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [progress, setProgress] = useState(items.map(() => 0));

  useEffect(() => {
    if (inView) {
      const duration = 1800; // Duração total em ms
      const steps = 60;
      const intervalTime = duration / steps;

      const timer = setInterval(() => {
        setProgress((prev) => {
          return items.map((item, idx) => {
            const current = prev[idx];
            const increment = Math.ceil(item.value / steps);
            if (current + increment >= item.value) {
              return item.value;
            }
            return current + increment;
          });
        });
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <>
      {seo && (
        <Helmet>
          <title>
            Nossos Dados - Serra Negra Materiais para Construção Alterosa - MG
          </title>
          <meta
            name="description"
            content="Confira os números e resultados que demonstram a confiança, experiência e qualidade da Serra Negra Materiais em Alterosa-MG."
          />
          <link rel="canonical" href="https://serranegramc.com.br/dados" />
          <meta
            name="keywords"
            content="materiais de construção, loja de construção, cimento, areia, tijolo, Alterosa MG, Serra Negra Materiais"
          />
        </Helmet>
      )}

      <section id="data-area" className="py-5" ref={ref}>
        <div className="container py-4">
          <div className="row mb-5 text-center">
            <div className="col-12">
              <span className="data-subtitle">Resultados & Conquistas</span>
              <h2 className="main-title">A Serra Negra em Números</h2>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {items.map((item, idx) => (
              <div className="col-lg-3 col-sm-6" key={idx}>
                <div className="data-card text-center h-100">
                  <div className="data-icon-wrapper">
                    {item.icon}
                  </div>
                  <h3 className="data-number">
                    {progress[idx].toLocaleString("pt-BR")}
                    <span className="data-suffix">{item.suffix}</span>
                  </h3>
                  <p className="data-label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}