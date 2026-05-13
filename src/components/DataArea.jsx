import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./DataArea.css";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

const idade = new Date().getFullYear() - 1990;

const items = [
  { value: 8367, label: "Clientes felizes" },
  { value: 14523, label: "Produtos cadastrados" },
  { value: 29, label: "Colaboradores" },
  { value: idade, label: "Anos de mercado" },
];

export default function DataArea({ seo = false }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [progress, setProgress] = useState(items.map(() => 0));

  useEffect(() => {
    if (inView) {
      const durations = items.map(() => 1500); // duração de cada animação (ms)
      items.forEach((item, idx) => {
        let start = 0;
        const step = Math.ceil(item.value / (durations[idx] / 20)); // incremento por frame (~50fps)
        const interval = setInterval(() => {
          start += step;
          if (start >= item.value) {
            start = item.value;
            clearInterval(interval);
          }
          setProgress((prev) => {
            const copy = [...prev];
            copy[idx] = start;
            return copy;
          });
        }, 20);
      });
    }
  }, [inView]);

  return (
    <>
      {seo && (
        <Helmet>
          <title>
            Nossos dados - Serra Negra Materiais para Construção Alterosa - MG
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
        <div className="container">
          <div className="col-12 text-center mb-4">
            <h3 className="main-title">Nossos dados</h3>
          </div>
          <div className="row justify-content-center">
            {items.map((item, idx) => (
              <div
                className="col-md-3 col-sm-6 mb-4 d-flex justify-content-center"
                key={idx}
              >
                <div className="circle-box text-center">
                  <CircularProgressbar
                    value={(progress[idx] / item.value) * 100}
                    text={`${progress[idx]}`}
                    styles={buildStyles({
                      pathColor: "#00a447",
                      textColor: "#333",
                      trailColor: "#eee",
                      textSize: "18px",
                      pathTransitionDuration: 0.5,
                    })}
                  />
                  <p className="mt-3">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
