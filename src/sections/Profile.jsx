import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section
      id="profil"
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      {/* Vidéo de fond avec zoom */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-bottom opacity-60 scale-150"
      >
        <source src="assets/bg/night.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-10" />

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 w-full max-w-6xl px-4 sm:px-6 lg:px-12 text-center"
      >
        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-cormorant font-bold text-gray-200 mb-6 tracking-wide pt-20">
          L'Alchimie du Visuel et du Code
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-xl font-bold leading-relaxed mb-10 font-crimson text-gray-300 text-center">
          Depuis mes 13 ans, je navigue entre les mondes de l'audiovisuel, du
          numérique et de la création. À 28 ans, mon parcours est une quête
          infinie de transformation : chaque idée qui naît dans mon esprit prend
          forme à travers des outils et des techniques variés. Le montage vidéo,
          le développement web, la création d'univers 3D… tout se fusionne pour
          donner naissance à des créations où la rigueur technique rencontre
          l’intuition créative. Un univers où chaque projet devient une
          exploration, un voyage où chaque détail compte, où chaque choix visuel
          et sonore est un acte conscient.
        </p>

        {/* Compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Montage Vidéo */}
          <div className="flex flex-col justify-between min-h-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-uncial text-emerald-400 mb-4 text-center pt-10">
              Montage Vidéo
            </h2>
            <p className="text-gray-300 leading-relaxed font-crimson text-center text-base sm:text-lg md:text-xl font-bold">
              Ma maîtrise des outils de montage vidéo tels que Premiere Pro,
              DaVinci Resolve et Avid Media Composer a façonné ma capacité à
              transformer des images en récits visuels. Je navigue entre
              l’artistique et le technique, créant des vidéos qui respirent une
              énergie propre, tout en respectant la structure et la fluidité de
              chaque histoire. Des clips aux documentaires, chaque projet est un
              terrain d’expérimentation où l’émotion se mêle à l’image.
            </p>
          </div>

          {/* Développement Web */}
          <div className="flex flex-col justify-between min-h-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-uncial text-emerald-400 mb-4 text-center">
              Développement Web et Applications
            </h2>
            <p className="text-gray-300 leading-relaxed font-crimson text-center text-base sm:text-lg md:text-xl font-bold">
              Ma pratique du développement web, de l’interface utilisateur avec
              HTML, CSS et JavaScript à l’utilisation de frameworks comme Django
              et Flask, m’a permis de créer des expériences numériques où
              l’esthétique et la fonctionnalité se rencontrent. Le web devient
              ainsi un espace de création, où chaque ligne de code est une sorte
              de runes, inscrite pour donner vie à un univers interactif.
            </p>
          </div>

          {/* Création 3D */}
          <div className="flex flex-col min-h-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-uncial text-emerald-400 mb-4 text-center">
              Création 3D et Effets Visuels
            </h2>
            <p className="text-gray-300 leading-relaxed font-crimson text-center text-base sm:text-lg md:text-xl font-bold pt-10">
              À travers des outils comme Blender, Nuke et Unreal Engine, je
              forge des mondes invisibles. La modélisation, l'animation 3D et
              les effets visuels sont pour moi des extensions de la réalité, des
              espaces où la magie de l’art et la logique du code se rencontrent.
              Chaque création devient une exploration sans fin des formes et des
              textures, une invitation à la rêverie et à l’évasion.
            </p>
          </div>

          {/* Mystique */}
          <div className="flex flex-col justify-between min-h-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-uncial text-emerald-400 mb-4 text-center">
              Une Approche Mystique
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold font-crimson text-gray-300 leading-relaxed text-center pb-20">
              Mon travail n’est pas un simple assemblage de compétences
              techniques, mais une quête intime et profonde. Chaque projet est
              une exploration des arcanes visuels et numériques, un acte créatif
              dans lequel la technique se fait art et l’art devient une forme
              d’expression pure. Dans chaque ligne de code, chaque image montée,
              chaque projet créé, je cherche à dévoiler l'invisible, à capter
              l’essence d'une idée et à la matérialiser. La création devient
              ainsi un chemin de transformation, où l’invisible devient visible,
              l’imaginaire devient réel.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
