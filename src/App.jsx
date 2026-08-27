import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import FrameScrollAnimation from "./components/FrameScrollAnimation";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="app min-h-screen bg-[#080808] text-[#F5F3EF]">
      <Navbar />
      <main className="space-y-24 bg-[#080808] px-4 py-8 md:px-8">
        <Hero />
        <FrameScrollAnimation />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Loader />
    </div>
  );
}

export default App;
