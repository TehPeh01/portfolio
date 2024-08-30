import Navbar from "./components/navbar";
import Home from "./components/home";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
