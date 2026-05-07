// src/pages/Home.jsx
import Slider from "../components/Slider";
import About from "../components/About";
import Services from "../components/Services";
import DataArea from "../components/DataArea";
import TeamArea from "../components/TeamArea";
import NewsArea from "../components/NewsArea";
import CallArea from "../components/CallArea";
import ContactArea from "../components/ContactArea";
import { Helmet } from "react-helmet-async";

export default function Home({ seo = false }) {
  return (
    <>
      {seo && (
        <Helmet>
          <title>Serra Negra Materiais para Construção</title>
          <meta
            name="description"
            content="A Serra Negra Materiais para Construção é referência em materiais para construção em Alterosa-MG, oferecendo produtos de qualidade, ótimo atendimento, preços justos e entrega rápida. Trabalhamos com cimento, areia, tijolos, ferramentas, acabamentos, materiais hidráulicos, elétricos e muito mais para sua obra, reforma ou construção. Atendimento especializado, confiança, variedade de produtos e condições facilitadas de pagamento para melhor atender nossos clientes."
          />
          <link rel="canonical" href="https://serranegramc.com.br/" />
          <meta
            name="keywords"
            content="materiais de construção, loja de construção, cimento, areia, tijolo, Alterosa MG, Serra Negra Materiais"
          />
        </Helmet>
      )}

      <Slider />
      <About />
      <Services />
      <DataArea />
      <TeamArea />
      <NewsArea />
      <CallArea />
      <ContactArea />
    </>
  );
}
