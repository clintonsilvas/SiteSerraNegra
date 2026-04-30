import React from "react";
import "./NewsArea.css";

export default function NewsArea() {
  return (
    <section id="news-area" className="py-5">
      <div className="container text-center">
        <div className="row mb-4">
          <div className="col-12">
            <h3 className="main-title">Onde estamos</h3>
          </div>
        </div>
        <p className="mb-4 lead">
          Centro de Alterosa, com amplo estacionamento para melhor te atender
        </p>
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1105.4665672402161!2d-46.143608701214426!3d-21.258341918422826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b5e1fe9cafee17%3A0xf1ce0bf7ccc2b8b!2sSerra%20Negra%20Materiais%20para%20Constru%C3%A7%C3%A3o%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1714507007999!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Serra Negra"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
