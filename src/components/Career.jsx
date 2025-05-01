import { useState } from "react";
import { motion } from "framer-motion";

const roles = [
  {
    id: "video",
    title: "🎬 Audiovisuel / Vidéo",
    reasons: [
      "Bonne gestion de la gamme Adobe & Logiciels de Post-Production (Premiere, After, Photoshop, Illustrator, Avid Media Composer...)",
      "Expérience en clips, interviews, corporate, storytelling",
      "Sens du rythme, de la narration, et de la post-prod",
    ],
    timeline: [
      { year: "2015", label: "Formation EMC - Montage audiovisuel" },
      {
        year: "2017-2023",
        label: "Prestation vidéo (reportage, clip, TV, YouTube)",
      },
      { year: "2024", label: "Transition vers DaVinci / Resolve / After" },
    ],
    jobs: [
      { title: "Monteur vidéo", salary: "24k – 32k €" },
      { title: "Motion Designer", salary: "26k – 38k €" },
      { title: "Assistant réalisateur", salary: "23k – 30k €" },
      { title: "Post-producteur YouTube / Télé", salary: "25k – 36k €" },
      { title: "Responsable contenu audiovisuel", salary: "30k – 42k €" },
    ],
  },
  {
    id: "dev",
    title: "💻 Web / Développement Front-End",
    reasons: [
      "Profil Python avec Flask & Django",
      "Expérience professionnelle (ISOLUTIONWEB)",
      "Bon œil design pour collaborer UI / Créa",
    ],
    timeline: [
      { year: "2022", label: "Bachelor Dev Python - Studi" },
      { year: "2023", label: "Stage / Mission chez ISOLUTIONWEB" },
      { year: "2025", label: "CV interactif / Dev front créatif" },
    ],
    jobs: [
      { title: "Développeur front-end", salary: "32k – 42k €" },
      { title: "Web designer technique", salary: "28k – 38k €" },
      { title: "Développeur créatif (portfolios)", salary: "30k – 40k €" },
    ],
  },
  {
    id: "design",
    title: "🎨 Design & Graphisme",
    reasons: [
      "Bonne sensibilité graphique et storytelling visuel",
      "Utilisation CapCut, Krita, Illustrator, Photoshop",
      "Culture pop / internet adaptée aux contenus jeunes",
    ],
    timeline: [
      { year: "2016", label: "Premiers travaux graphiques / réseaux" },
      { year: "2020", label: "Création de visuels miniatures / YouTube" },
      { year: "2024", label: "Exploration approfondie de Krita et CapCut" },
    ],
    jobs: [
      { title: "Motion Designer", salary: "26k – 38k €" },
      { title: "Créateur contenu visuel", salary: "24k – 34k €" },
      { title: "Graphic Designer junior", salary: "24k – 32k €" },
      { title: "Illustrateur numérique", salary: "25k – 35k €" },
    ],
  },
  {
    id: "comm",
    title: "🧠 Communication / Digital",
    reasons: [
      "Profil hybride contenu + tech",
      "Bon argumentaire, élocution, organisation (Notion, Gantt)",
      "Expérience en gestion / coordination projet",
    ],
    timeline: [
      { year: "2018", label: "Responsabilités administratives / logistiques" },
      { year: "2023", label: "Gestion de production vidéo / dev" },
      { year: "2025", label: "Polyvalence créative-tech à son pic" },
    ],
    jobs: [
      { title: "Chargé de communication digitale", salary: "28k – 36k €" },
      { title: "Assistant chef de projet créatif", salary: "30k – 40k €" },
      { title: "Community manager / Multimédia", salary: "26k – 34k €" },
      { title: "Responsable contenus multimédias", salary: "32k – 45k €" },
    ],
  },
  {
    id: "3d",
    title: "👾 3D / VFX / Jeux Vidéo",
    reasons: [
      "Compétences Blender / Unreal / ZBrush",
      "Notion en Nuke, VFX et compositing",
      "Mindset rapide d'apprentissage et sens artistique",
    ],
    timeline: [
      { year: "2021", label: "Débuts sur Blender / Unreal Engine" },
      { year: "2023", label: "Expérimentations VFX avec Embergen / Nuke" },
      { year: "2025", label: "Objectif junior generalist 3D" },
    ],
    jobs: [
      { title: "Assistant VFX", salary: "26k – 34k €" },
      { title: "Junior compositing artist", salary: "28k – 38k €" },
      { title: "Assistant level designer", salary: "27k – 35k €" },
      { title: "Junior generalist 3D", salary: "28k – 40k €" },
    ],
  },
  {
    id: "transverse",
    title: "🌐 Expériences Transversales",
    reasons: [
      "Culture générale, cinéma, musique très élevée",
      "Compétences en logistique, rigueur et autonomie",
      "Bonnes pratiques en SEO, marketing, IA, Notion, Obsidian",
      "Adaptabilité forte dans des contextes variés",
    ],
    timeline: [
      { year: "2013", label: "Premiers pas en audiovisuel à 13 ans" },
      { year: "2020", label: "Formation SEO, IA et outils de productivité" },
      { year: "2025", label: "Convergence des savoirs transverses" },
    ],
    jobs: [
      { title: "Consultant créatif polyvalent", salary: "30k – 45k €" },
      { title: "Formateur / Coach outils digitaux", salary: "28k – 38k €" },
      { title: "Chef de projet transversal", salary: "32k – 44k €" },
      { title: "Créatif hybride", salary: "35k – 48k €" },
    ],
  },
];

export default function DestinsPossibles() {
  const [selected, setSelected] = useState("video");
  const current = roles.find((r) => r.id === selected);

  return (
    <section id="destins" className="relative py-36 px-6 text-white bg-black">
      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full opacity-30 object-cover -z-9"
      >
        <source src="assets/bg/forest.webm" type="video/webm" />
      </video>

      {/* Contenu principal au-dessus de la vidéo */}
      <div className="relative z-10">
        <h2 className="text-5xl text-center font-uncial mb-16 text-white">
          Destins Possibles
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelected(role.id)}
              className={`px-6 py-3 border-2 font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black ${
                selected === role.id
                  ? "bg-white text-black border-white"
                  : "border-white text-white"
              }`}
            >
              {role.title}
            </button>
          ))}
        </div>

        <div className="bg-black border-2 border-white p-8 rounded-xl max-w-6xl mx-auto shadow-xl">
          <h3 className="text-3xl text-white font-uncial mb-6">
            Pourquoi ce rôle ?
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            {current.reasons.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-uncial mt-10 mb-4 text-white">
            Postes envisageables :
          </h3>
          <ul className="list-disc ml-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {current.jobs.map((job, idx) => (
              <li key={idx} className="flex justify-between pr-2">
                <span>{job.title}</span>
                <span className="text-gray-400 text-sm italic">
                  {job.salary}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-uncial mt-10 mb-4 text-white">
            Frise Chronologique
          </h3>
          <div className="overflow-x-auto">
            <div className="flex gap-8 items-start">
              {current.timeline.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center min-w-[180px] text-center animate-pulse"
                >
                  <div className="w-3 h-3 bg-white rounded-full mb-2" />
                  <div className="text-white font-bold text-lg">
                    {step.year}
                  </div>
                  <div className="text-sm text-gray-300">{step.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
