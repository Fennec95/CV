import React from "react";
import interetsData from "../data/reliques.json";

export default function CentresInteret() {
  return (
    <section
      id="centres-interet"
      className="relative px-6 py-24 bg-black text-white font-cormorant overflow-hidden"
    >
      {/* Fond vidéo avec overlay sombre */}
      <div className="absolute inset-0 -z-9">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-70"
        >
          <source src="/src/assets/bg/VHS.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      <h2 className="text-center text-5xl md:text-6xl font-bold tracking-wider mb-16 uppercase text-white relative before:content-['✦'] after:content-['✦'] before:mx-4 after:mx-4 font-uncial">
        Centres d'intérêt
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {interetsData.map((interet) => (
          <div
            key={interet.id}
            className="group relative rounded-2xl overflow-hidden p-6 border border-white bg-black shadow-[0_0_40px_#ffffff11] hover:shadow-[0_0_60px_#ffffff33] transition-all duration-500 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-white opacity-0 transition duration-500 pointer-events-none rounded-2xl" />

            <h3 className="text-2xl font-semibold text-white mb-1 tracking-wide group-hover:text-white">
              {interet.title}
            </h3>
            <p className="text-sm text-gray-400 italic mb-2">{interet.type}</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {interet.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
