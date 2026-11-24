// functions/index.js
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");

// Senha de app do Gmail, guardada no Secret Manager (nunca no código/GitHub)
const SMTP_PASS = defineSecret("SMTP_PASS");

const EMAIL_EMPRESA = "serranegramc@gmail.com";
const ASSUNTOS = ["Orçamento", "Dúvida sobre produto", "Entrega", "Trabalhe conosco", "Outro"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Remove quebras de linha (evita injeção em cabeçalho) e corta o tamanho
const limpa = (v, max) => String(v || "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

exports.contato = onRequest(
  { region: "us-central1", secrets: [SMTP_PASS], maxInstances: 2 },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).json({ erro: "Método não permitido." });

    const body = req.body || {};

    // Honeypot: se o campo oculto veio preenchido, é bot. Finge sucesso e descarta.
    if (body.site) return res.status(200).json({ ok: true });

    const nome = limpa(body.nome, 100);
    const email = limpa(body.email, 120);
    const telefone = limpa(body.telefone, 20);
    const assunto = ASSUNTOS.includes(body.assunto) ? body.assunto : "Outro";
    const mensagem = String(body.mensagem || "").trim().slice(0, 2000);

    if (!nome || !mensagem || !EMAIL_REGEX.test(email)) {
      return res.status(400).json({ erro: "Preencha nome, e-mail válido e mensagem." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_EMPRESA, pass: SMTP_PASS.value() }
    });

    try {
      await transporter.sendMail({
        from: `"Site Serra Negra" <${EMAIL_EMPRESA}>`,
        to: EMAIL_EMPRESA,
        replyTo: `"${nome}" <${email}>`, // clicar em "Responder" no Gmail responde o cliente
        subject: `[Site] ${assunto} - ${nome}`,
        text:
          `Nova mensagem pelo site serranegramc.com.br\n\n` +
          `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone || "-"}\nAssunto: ${assunto}\n\n` +
          `Mensagem:\n${mensagem}\n`
      });

      logger.info("Contato enviado", { assunto });
      return res.status(200).json({ ok: true });
    } catch (err) {
      logger.error("Falha ao enviar e-mail", err);
      return res.status(500).json({ erro: "Erro ao enviar a mensagem." });
    }
  }
);