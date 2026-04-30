import About from "./components/About";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Services from "./components/Services";
import DataArea from "./components/DataArea";
import NewsArea from "./components/NewsArea";
import CallArea from "./components/CallArea";
import Footer from "./components/Footer";
import TeamArea from "./components/TeamArea";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Services />
      <DataArea />
      <TeamArea />
      <NewsArea />
      <CallArea />
      <Footer />
    </>
  );
}

export default App;
