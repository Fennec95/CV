import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen pt-0 flex items-center justify-center text-center text-white bg-black overflow-hidden font-garamond"
    >
      {/* Vidéo de fond */}
      <div className="absolute top-0 left-0 w-full h-full object-cover inset-0 opacity-25">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="assets/bg/bd1-new.mp4" type="video/mp4" />
          Désolé, votre navigateur ne prend pas en charge la balise vidéo.
        </video>
      </div>

      {/* Effet animé */}
      <motion.div
        className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Contenu principal */}
      <div className="z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-uncial text-white tracking-widest drop-shadow-lg">
          MONTENOISE Charles
        </h1>
        <span className="block mt-2 text-lg sm:text-xl md:text-2xl text-white/60 font-crimson tracking-wide">
          alias Le Fennec Blanc
        </span>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl italic text-white font-cormorant font-bold max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          `` Chaque plan est une offrande, chaque effet un murmure. ''
        </p>

        {/* Bouton d'exploration */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 sm:mt-10 inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-xs sm:text-sm uppercase tracking-widest font-semibold font-crimson text-white hover:bg-white/20 transition backdrop-blur-md shadow-lg"
        >
          {/* Utilisation de Link */}
          <Link
            to="/#profil"
            className="inline-block"
            aria-label="Explorer mon monde"
          >
            Explorer mon monde
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
