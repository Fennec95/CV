import React, { useEffect } from "react";
import "../styles/particle.css";

const ParticlesBackground = () => {
  useEffect(() => {
    const loadParticles = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 150, // Augmente le nombre pour plus de particules
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#d3cfc7", // Couleur beige clair
            },
            shape: {
              type: "circle", // Forme des particules en cercle
              stroke: {
                width: 0, // Pas de contour
              },
            },
            opacity: {
              value: 0.5, // Opacité douce
              random: true, // Opacité variable pour plus de réalisme
              anim: {
                enable: true,
                speed: 1, // Animation lente pour simuler la poussière flottante
                opacity_min: 0.1, // Particules plus translucides
                sync: false,
              },
            },
            size: {
              value: 4, // Taille moyenne des particules
              random: true, // Variation aléatoire de la taille
              anim: {
                enable: false, // Pas d'animation de taille
              },
            },
            move: {
              enable: true,
              speed: 0.3, // Vitesse lente pour un effet de flottement
              direction: "none", // Mouvement aléatoire
              random: true, // Mouvement aléatoire pour plus de réalisme
              straight: false,
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab", // Effet de grab au survol
              },
              onclick: {
                enable: false, // Pas d'effet au clic
                mode: "push",
              },
            },
          },
          line_linked: {
            enable: false, // **Désactive les lignes de connexion**
            distance: 100, // Ce paramètre n'a plus d'impact car "enable" est false
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          retina_detect: true,
        });
      }
    };

    loadParticles();

    // Cleanup function to stop particles on component unmount
    return () => {
      const particlesContainer = document.getElementById("particles-js");
      if (particlesContainer) {
        particlesContainer.innerHTML = ""; // Nettoyage des particules
      }
    };
  }, []); // Exécution une seule fois lors du montage du composant

  return (
    <div
      id="particles-js"
      className="absolute top-0 left-0 w-full h-full z-[1]"
    ></div>
  );
};

export default ParticlesBackground;
