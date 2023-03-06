import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
