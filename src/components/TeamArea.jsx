import React from "react";
import { teamMembers } from "../data/teamImages";
import "./TeamArea.css";

function TeamArea() {
  return (
    <section id="team-area" className="py-5">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h3 className="main-title">Nosso time</h3>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((membro, idx) => (
            <div className="col-md-3 col-sm-6 mb-4 d-flex justify-content-center" key={idx}>
              <div className="card team-card">
                <img src={membro.img} className="card-img-top" alt={membro.nome} />
                <div className="card-body text-center">
                  <h5 className="card-title">{membro.nome}</h5>
                  <p className="card-text">{membro.cargo}</p>
                  <button
                    className="main-btn"
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/message/MOKDM5R4TVAKK1?autoload=1&app_absent=0"
                      )
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
  );
}
export default TeamArea;