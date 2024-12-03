import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Navbar />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
