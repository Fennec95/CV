import React from "react";
import { useParams } from "react-router-dom";
import journalData from "../data/journal.json";

const ProjetDetail = () => {
  const { id } = useParams();
  const projet = journalData.find((quest) => quest.id === parseInt(id));

  if (!projet) {
    return <div>Projet introuvable.</div>;
  }

  return (
    <section className="projet-detail py-16 px-6 bg-black text-white">
      <h2 className="text-3xl md:text-5xl text-center mb-12">{projet.title}</h2>
      <div className="max-w-4xl mx-auto">
        <img
          src={projet.image}
          alt={projet.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-400 mb-4">{projet.description}</p>
        <span className="text-gray-500">{projet.date}</span>
        <div className="mt-8">
          <a
            href={projet.link}
            className="text-indigo-500 hover:text-indigo-700 transition duration-300"
          >
            Voir la quête complète
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjetDetail;
