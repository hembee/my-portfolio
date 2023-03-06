import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills/>
    </div>
  );
}

export default App;
