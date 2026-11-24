// src/pages/Home.jsx
import Slider from "../components/Slider";
import About from "../components/About";
import Services from "../components/Services";
import DataArea from "../components/DataArea";
import TeamArea from "../components/TeamArea";
import CallArea from "../components/CallArea";
import ContactArea from "../components/ContactArea";
import Email from "../components/EmailPage";
import { Helmet } from "react-helmet-async";
import { FaIndustry } from "react-icons/fa";

export default function Home({ seo = true }) {
  return (
    <>
      {seo && (
        <Helmet>
          <title>Serra Negra Materiais para Construção Alterosa - MG</title>
          <meta
            name="description"
            content="A Serra Negra Materiais para Construção é referência em materiais para construção em Alterosa-MG, oferecendo produtos de qualidade, ótimo atendimento"
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
      <CallArea
        buttonText="Falar com Atendente"
        phrases={[
          {
            text: "Precisa de lajes ou blocos de cimento?",
            icon: <FaIndustry />,
            highlight: "Direto da Fábrica",
          },
        ]}
      />
      <DataArea />
      <TeamArea />
      <CallArea />
      <Email />
      <ContactArea />
    </>
  );
}
