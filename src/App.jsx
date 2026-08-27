import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/ContactArea";
import DataArea from "./components/DataArea";
import TeamArea from "./components/TeamArea";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home seo={true} />} />
          <Route path="/sobre" element={<About seo={true} />} />
          <Route path="/servicos" element={<Services seo={true} />} />
          <Route path="/dados" element={<DataArea seo={true} />} />
          <Route path="/contato" element={<Contact seo={true} />} />
          <Route path="/time" element={<TeamArea seo={true} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
