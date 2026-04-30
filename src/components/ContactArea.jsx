import React from "react";

export default function ContactArea() {
  return (
    <section id="contact-area">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h3 className="main-title">Entre em contato conosco</h3>
          </div>

          <div className="col-md-4 contact-box">
            <i className="fas fa-phone"></i>
            <p>
              <span className="contact-tile">Ligue para:</span>{" "}
              <a href="tel:+553532941140">(35) 3294-1140</a>
            </p>
            <p>
              <span className="contact-tile">Segunda a Sexta:</span> 06:30 - 17:30
            </p>
            <p>
              <span className="contact-tile">Sábado:</span> 06:30 - 11:30
            </p>
          </div>

          <div className="col-md-4 contact-box">
            <i className="fas fa-envelope"></i>
            <p>
              <span className="contact-tile">Envie um email:</span>{" "}
              <a href="mailto:serranegramc@redenets.com.br">
                serranegramc@redenets.com.br
              </a>
            </p>
          </div>

          <div className="col-md-4 contact-box">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              <span className="contact-tile">Venha tomar um café:</span>{" "}
              <a
                href="https://www.google.com/maps/place/Serra+Negra+Materiais+para+Construção+LTDA/@-21.2582832,-46.1437887,19.5z/data=!4m6!3m5!1s0x94b5e1fe9cafee17:0xf1ce0bf7ccc2b8b!8m2!3d-21.2582096!4d-46.1438623!16s%2Fg%2F11grqrygb1?authuser=1&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Avenida da Saudade, 49, Cruzeiro, Alterosa-MG
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
