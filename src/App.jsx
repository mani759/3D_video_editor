import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import FrameScrollAnimation from "./components/FrameScrollAnimation";
import About from "./components/About";
import Services from "./components/Services/Services.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="app min-h-screen bg-[#080808] text-[#F5F3EF]">
      <Navbar />

      <main className="w-full bg-[#080808]">
        <Hero />

        <FrameScrollAnimation />

        <About />

        <Work />
        <Services />

        <Contact />
      </main>

      <Footer />

      <Loader />
    </div>
  );
}

export default App;
