import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaCalculator, FaTruck, FaPercentage } from "react-icons/fa";
import "./CallArea.css";

// Frases padrão que vão alternar automaticamente
const defaultPhrases = [
  {
    text: "Deseja fazer um orçamento sem compromisso?",
    icon: <FaCalculator />,
    highlight: "Resposta rápida no WhatsApp"
  },
  {
    text: "Vai construir ou reformar?",
    icon: <FaTruck />,
    highlight: "Entregamos direto na sua obra"
  },
  {
    text: "As melhores condições de pagamento de Alterosa e região",
    icon: <FaPercentage />,
    highlight: "Preço justo do alicerce ao acabamento"
  }
];

export default function CallArea({
  phrases = defaultPhrases,
  whatsappLink = "https://api.whatsapp.com/message/MOKDM5R4TVAKK1?autoload=1&app_absent=0",
  buttonText = "Orçar no WhatsApp"
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Alterna a frase a cada 4.5 segundos com efeito de fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 300); // Tempo para a animação de saída
    }, 4500);

    return () => clearInterval(interval);
  }, [phrases.length]);

  const currentPhrase = phrases[currentIndex];

  return (
    <section id="call-area" className="py-4">
      <div className="container">
        <div className="call-banner-wrapper">
          {/* Lado Esquerdo: Frase com Ícone e Transição */}
          <div className={`call-content ${fade ? "fade-in" : "fade-out"}`}>
            <div className="call-icon-badge">
              {currentPhrase.icon}
            </div>
            <div className="call-text-group">
              <span className="call-highlight">{currentPhrase.highlight}</span>
              <h3 className="call-title">{currentPhrase.text}</h3>
            </div>
          </div>

          {/* Lado Direito: Botão Interativo com Efeito Glow */}
          <div className="call-action">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="call-whatsapp-btn"
            >
              <FaWhatsapp className="whatsapp-icon" />
              <span>{buttonText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}