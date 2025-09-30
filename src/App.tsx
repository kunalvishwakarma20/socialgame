import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import GameSection from "./components/GameSection";
import Footer from "./components/Footer";
import Prefooter from "./components/Prefooter";

// Pages
import Terms from "./components/Terms";
import Responsible from "./components/Responsible";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";
import Disclaimer from "./components/Disclaimer";

import About from "./components/About";
import Gamepage from "./components/Gamepage";
import Gamepage2 from "./components/Gamepage2";
import Gamepage3 from "./components/Gamepage3";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollToTop /> {/* <- Add this */}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <GameSection />
              <Prefooter />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/responsible" element={<Responsible />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Gamepage />} />
        <Route path="/game2" element={<Gamepage2 />} />
        <Route path="/game3" element={<Gamepage3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
