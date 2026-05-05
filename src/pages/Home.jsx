// src/pages/Home.jsx
import Slider from "../components/Slider";
import About from "../components/About";
import Services from "../components/Services";
import DataArea from "../components/DataArea";
import TeamArea from "../components/TeamArea";
import NewsArea from "../components/NewsArea";
import CallArea from "../components/CallArea";
import ContactArea from "../components/ContactArea";

export default function Home() {
  return (
    <>
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
