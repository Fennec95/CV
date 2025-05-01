import { motion } from "framer-motion";

const skills = [
  { name: "Embergen", level: 40, icon: "🔥" },
  { name: "Adobe Substance 3D", level: 30, icon: "🎨" },
  { name: "FL Studio", level: 40, icon: "🎶" },
  { name: "CapCut", level: 40, icon: "✂️" },
  { name: "Krita", level: 40, icon: "🖌️" },
  { name: "ZBrush", level: 20, icon: "🖱️" },
  { name: "Adobe Audition", level: 40, icon: "🎧" },
  { name: "Premiere Pro", level: 70, icon: "📹" },
  { name: "DaVinci Resolve", level: 65, icon: "🎬" },
  { name: "Blender", level: 50, icon: "🛠️" },
  { name: "Nuke", level: 30, icon: "⚙️" },
  { name: "After Effects", level: 75, icon: "🎥" },
  { name: "Photoshop", level: 70, icon: "🖼️" },
  { name: "Illustrator", level: 50, icon: "✏️" },
  { name: "HTML5", level: 75, icon: "🌐" },
  { name: "CSS / Tailwind", level: 50, icon: "🎨" },
  { name: "React.js", level: 30, icon: "⚛️" },
  { name: "Next.js", level: 30, icon: "➡️" },
  { name: "PHP", level: 30, icon: "🐘" },
  { name: "Visual Studio Code", level: 50, icon: "💻" },
  { name: "PyCharm", level: 40, icon: "🐍" },
  { name: "TablePlus", level: 40, icon: "📊" },
  { name: "JavaScript", level: 40, icon: "🖥️" },
  { name: "Python", level: 60, icon: "🐍" },
  { name: "Git / GitHub", level: 60, icon: "🗂️" },
  { name: "Flask", level: 50, icon: "⚡" },
  { name: "Django", level: 45, icon: "🔧" },
  { name: "Docker", level: 30, icon: "📦" },
  { name: "Kubernetes", level: 25, icon: "⚙️" },
  { name: "Power BI", level: 30, icon: "📈" },
  { name: "Analyse de données", level: 40, icon: "🔍" },
  { name: "Unreal Engine", level: 40, icon: "🎮" },
  { name: "SQL", level: 55, icon: "📊" },
  { name: "Management", level: 80, icon: "📊" },
  { name: "Culture générale", level: 80, icon: "🌍" },
  { name: "Argumentaire", level: 90, icon: "🗣️" },
  { name: "Élocution", level: 90, icon: "🎤" },
  { name: "Workflow", level: 90, icon: "🔄" },
  { name: "Estimation de charge de travail", level: 90, icon: "⚖️" },
  { name: "Celtx", level: 80, icon: "📑" },
  { name: "Notion", level: 50, icon: "📝" },
  { name: "Gestion de projet", level: 90, icon: "🗂️" },
  { name: "Travail d’équipe", level: 100, icon: "🤝" },
  { name: "Production vidéo", level: 85, icon: "🎬" },
  { name: "Post-production vidéo", level: 100, icon: "🎞️" },
  { name: "Montage vidéo", level: 75, icon: "✂️" },
  { name: "Parler en public", level: 100, icon: "🎤" },
  { name: "Négociation", level: 90, icon: "💬" },
  { name: "Persuasion", level: 90, icon: "🗣️" },
  { name: "Écriture de scénario", level: 90, icon: "✍️" },
];

function getLevelBadge(level) {
  if (level < 40)
    return { label: "Notion", color: "text-blue-300", icon: "🌀" };
  if (level < 60)
    return { label: "Opérationnel", color: "text-green-300", icon: "⚔️" };
  if (level < 75)
    return { label: "Confirmé", color: "text-yellow-300", icon: "🛡️" };
  return { label: "Maîtrisé", color: "text-purple-300", icon: "🧠" };
}

export default function Arcanes() {
  return (
    <section
      id="arcanes"
      className="bg-black relative text-white py-20 px-4 sm:px-6 lg:px-8 z-10"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full opacity-25 object-cover -z-10"
      >
        <source src="assets/bg/grain.webm" type="video/mp4" />
      </video>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-7xl mx-auto"
      >
        <h2 className="text-6xl font-uncial mb-12">Mes Arcanes</h2>

        <div className="mb-16 text-gray-300 font-cormorant text-lg">
          <p className="mb-2">
            <span className="text-blue-300">🌀 Notion</span> : bases connues, en
            apprentissage.
          </p>
          <p className="mb-2">
            <span className="text-green-300">⚔️ Opérationnel</span> : utilisé en
            projet réel.
          </p>
          <p className="mb-2">
            <span className="text-yellow-300">🛡️ Confirmé</span> : maîtrise
            confortable et approfondie.
          </p>
          <p>
            <span className="text-purple-300">🧠 Maîtrisé</span> : expertise
            solide, usage fréquent et fluide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Créativité & Art Visuel */}
          <div className="bg-black bg-opacity-80 p-6 rounded-lg shadow-xl border-2 border-white glow-effect">
            <h3 className="text-3xl font-bold font-cormorant text-white mb-6">
              Créativité & Art Visuel
            </h3>
            {skills.slice(0, 14).map((skill, index) => {
              const badge = getLevelBadge(skill.level);
              return (
                <div
                  key={index}
                  className="flex items-center justify-between mb-4"
                >
                  <span className="flex items-center text-lg font-uncial">
                    {skill.icon} {skill.name}
                  </span>
                  <span className={`ml-4 font-uncial text-lg ${badge.color}`}>
                    {badge.icon} {badge.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Développement & Code */}
          <div className="bg-black p-6 rounded-lg shadow-xl border-2 border-white glow-effect">
            <h3 className="text-3xl font-bold font-cormorant text-white mb-6">
              Développement & Code
            </h3>
            {skills.slice(14, 30).map((skill, index) => {
              const badge = getLevelBadge(skill.level);
              return (
                <div
                  key={index}
                  className="flex items-center justify-between mb-4"
                >
                  <span className="flex items-center text-lg font-uncial">
                    {skill.icon} {skill.name}
                  </span>
                  <span className={`ml-4 font-uncial text-lg ${badge.color}`}>
                    {badge.icon} {badge.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Gestion & Communication */}
          <div className="bg-black p-6 rounded-lg shadow-xl border-2 border-white glow-effect">
            <h3 className="text-3xl font-bold font-cormorant text-white mb-6">
              Gestion & Communication
            </h3>
            {skills.slice(30).map((skill, index) => {
              const badge = getLevelBadge(skill.level);
              return (
                <div
                  key={index}
                  className="flex items-center justify-between mb-4"
                >
                  <span className="flex items-center text-lg font-uncial">
                    {skill.icon} {skill.name}
                  </span>
                  <span className={`ml-4 font-uncial text-lg ${badge.color}`}>
                    {badge.icon} {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
