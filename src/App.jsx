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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/dados" element={<DataArea />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/time" element={<TeamArea />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
