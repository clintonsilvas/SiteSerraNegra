import React, { useState } from "react";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle,
  FaClock,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import "./EmailPage.css";

const ESTADO_INICIAL = {
  nome: "",
  email: "",
  telefone: "",
  assunto: "Orçamento",
  mensagem: "",
  site: "", // honeypot: campo invisível, só bot preenche
};

export default function EmailPage() {
  const [form, setForm] = useState(ESTADO_INICIAL);
  const [status, setStatus] = useState("idle"); // idle | enviando | ok | erro
  const [erroMsg, setErroMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("enviando");
    setErroMsg("");

    try {
      const resp = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await resp.json().catch(() => ({}));

      if (!resp.ok) throw new Error(data.erro || "Não foi possível enviar.");

      setStatus("ok");
      setForm(ESTADO_INICIAL);
    } catch (err) {
      setStatus("erro");
      setErroMsg(err.message);
    }
  }

  return (
    <>
      <Helmet>
        <title>
          Envie uma Mensagem - Serra Negra Materiais para Construção
        </title>
        <meta
          name="description"
          content="Envie sua mensagem, pedido de orçamento ou dúvida para a Serra Negra Materiais em Alterosa-MG. Respondemos o mais rápido possível."
        />
        <link rel="canonical" href="https://serranegramc.com.br/email" />
      </Helmet>

      <section id="email-area" className="py-5">
        <div className="container py-4">
          {/* Cabeçalho */}
          <div className="row mb-5 text-center">
            <div className="col-12">
              <span className="email-subtitle">Fale Conosco</span>
              <h2 className="main-title">Envie sua Mensagem</h2>
              <p className="email-description mx-auto">
                Peça um orçamento, tire dúvidas ou deixe sua sugestão. Nossa
                equipe responde pelo e-mail ou telefone informado.
              </p>
            </div>
          </div>

          <div className="row g-4 align-items-stretch justify-content-center">
            {/* Coluna Esquerda: atalhos */}
            <div className="col-lg-4">
              <div className="email-info-wrapper h-100">
                <div className="email-card mb-3">
                  <div className="email-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="email-details">
                    <h6>Prefere ligar?</h6>
                    <a href="tel:+553532941140" className="email-link">
                      (35) 3294-1140
                    </a>
                  </div>
                </div>

                <div className="email-card mb-3">
                  <div className="email-icon">
                    <FaEnvelope />
                  </div>
                  <div className="email-details">
                    <h6>E-mail direto</h6>
                    <a
                      href="mailto:serranegramc@gmail.com"
                      className="email-link"
                    >
                      serranegramc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="email-card">
                  <div className="email-icon">
                    <FaClock />
                  </div>
                  <div className="email-details">
                    <h6>Prazo de resposta</h6>
                    <p className="email-text mb-0">
                      Respondemos em horário comercial, normalmente no mesmo dia
                      útil.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita: formulário */}
            <div className="col-lg-7">
              <div className="form-wrapper h-100">
                {status === "ok" ? (
                  <div className="form-feedback sucesso">
                    <FaCheckCircle className="feedback-icon" />
                    <h4>Mensagem enviada!</h4>
                    <p>Obrigado pelo contato. Em breve retornaremos.</p>
                    <button
                      className="btn-enviar"
                      onClick={() => setStatus("idle")}
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate={false}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="nome">
                          Nome *
                        </label>
                        <div className="input-icon-group">
                          <FaUser className="input-icon" />
                          <input
                            id="nome"
                            name="nome"
                            type="text"
                            required
                            maxLength={100}
                            className="form-control"
                            placeholder="Seu nome"
                            value={form.nome}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label" htmlFor="telefone">
                          Telefone / WhatsApp
                        </label>
                        <div className="input-icon-group">
                          <FaWhatsapp className="input-icon" />
                          <input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            maxLength={20}
                            className="form-control"
                            placeholder="(35) 9 0000-0000"
                            value={form.telefone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-7">
                        <label className="form-label" htmlFor="email">
                          E-mail *
                        </label>
                        <div className="input-icon-group">
                          <FaEnvelope className="input-icon" />
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            maxLength={120}
                            className="form-control"
                            placeholder="voce@email.com"
                            value={form.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-5">
                        <label className="form-label" htmlFor="assunto">
                          Assunto
                        </label>
                        <select
                          id="assunto"
                          name="assunto"
                          className="form-select"
                          value={form.assunto}
                          onChange={handleChange}
                        >
                          <option>Orçamento</option>
                          <option>Dúvida sobre produto</option>
                          <option>Entrega</option>
                          <option>Trabalhe conosco</option>
                          <option>Outro</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label className="form-label" htmlFor="mensagem">
                          Mensagem *
                        </label>
                        <textarea
                          id="mensagem"
                          name="mensagem"
                          required
                          rows={6}
                          maxLength={2000}
                          className="form-control"
                          placeholder="Escreva aqui o que você precisa..."
                          value={form.mensagem}
                          onChange={handleChange}
                        />
                        <small className="contador">
                          {form.mensagem.length}/2000
                        </small>
                      </div>

                      {/* Honeypot: escondido para humanos */}
                      <div className="campo-oculto" aria-hidden="true">
                        <label htmlFor="site">Não preencha</label>
                        <input
                          id="site"
                          name="site"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={form.site}
                          onChange={handleChange}
                        />
                      </div>

                      {status === "erro" && (
                        <div className="col-12">
                          <div className="form-feedback-inline erro">
                            <FaExclamationCircle className="me-2" />
                            {erroMsg} Tente novamente ou ligue para (35)
                            3294-1140.
                          </div>
                        </div>
                      )}

                      <div className="col-12 d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn-enviar"
                          disabled={status === "enviando"}
                        >
                          {status === "enviando" ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                              />
                              Enviando...
                            </>
                          ) : (
                            <>
                              <FaPaperPlane className="me-2" /> Enviar mensagem
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
