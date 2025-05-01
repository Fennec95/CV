import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Permet une navigation fluide avec les ancres

import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./sections/Profile";
import Arcanes from "./sections/Arcanes";
import Career from "./components/Career";
import Relique from "./components/Reliques"; // Nom du composant modifié
import JournalDeQuete from "./components/JournalDeQuete";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        {/* Les liens de navigation avec HashLink pour un défilement fluide */}
        <nav className="absolute top-20 left-0 right-0">
          <ul className="flex justify-center space-x-4">
            <li>
              <HashLink smooth to="#profil">
                Profil
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#arcanes">
                Arcanes
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#destins">
                Destins
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#quêtes">
                Quêtes
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#centres-interet">
                Centres d'intérêt{" "}
                {/* Modification du nom pour correspondre au nouveau nom du composant */}
              </HashLink>
            </li>
          </ul>
        </nav>

        {/* Sections avec leurs ancres pour que HashLink fonctionne */}
        <div id="hero">
          <Hero />
        </div>
        <div id="profil">
          <Profile />
        </div>
        <div id="arcanes">
          <Arcanes />
        </div>
        <div id="destins">
          <Career />
        </div>
        <div id="quêtes">
          <JournalDeQuete />
        </div>
        <div id="centres-interet">
          <Relique /> {/* Utilisation du composant "Relique" */}
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </Router>
  );
}

export default App;
