import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParticlesBackground from "./components/Particle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./sections/Profile";
import Arcanes from "./sections/Arcanes";
import JournalDeQuete from "./components/JournalDeQuete";
import ProjetDetail from "./components/ProjetDetail";
import Relique from "./components/Reliques";
import Career from "./components/Career";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <main>
        <ParticlesBackground />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Profile />
                <Arcanes />
                <Career />
                <JournalDeQuete />
                <Relique />
                <Footer />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjetDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
