import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


function App() {
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };
  return (
    <div className="App">
      <NavBar />
      <Hero modal={modal} openModal={openModal} closeModal={closeModal} />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
