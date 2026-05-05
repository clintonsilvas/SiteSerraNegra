import React from "react";
import { teamMembers } from "../data/teamImages";
import "./TeamArea.css";
import { Helmet } from "react-helmet-async";

function TeamArea() {
  return (
    <>
      <Helmet>
        <title>Nosso time - Serra Negra Materiais</title>
        <meta name="description" content="time de vendedores" />
      </Helmet>

      <section id="team-area" className="py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col-12">
              <h3 className="main-title">Nosso time</h3>
            </div>
          </div>

          <div className="row">
            {teamMembers.map((membro, idx) => (
              <div
                className="col-md-3 col-sm-6 mb-4 d-flex justify-content-center"
                key={idx}
              >
                <div className="card team-card">
                  <img
                    src={membro.img}
                    className="card-img-top"
                    alt={membro.nome}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{membro.nome}</h5>
                    <p className="card-text">{membro.cargo}</p>
                    <button
                      className="main-btn"
                      onClick={() =>
                        window.open(`https://wa.me/55${membro.fone}`, "_blank")
                      }
                    >
                      Conversar
                    </button>
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
export default TeamArea;
