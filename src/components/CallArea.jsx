import React from "react";
import "./CallArea.css";

export default function CallArea() {
  return (
    <section id="call-area" className="py-5 bg-success text-white text-center">
      <div className="container">
        <p className="mb-4 fs-4 fw-semibold">
          Deseja fazer um orçamento sem compromisso?
        </p>
        <button
          className="main-btn"
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/message/MOKDM5R4TVAKK1?autoload=1&app_absent=0",
              "_blank"
            )
          }
        >
          Orçar no WhatsApp
        </button>
      </div>
    </section>
  );
}

