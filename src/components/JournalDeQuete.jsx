import React, { useState, useEffect } from "react";
import journalData from "../data/journal.json";
import { BsFillCameraFill } from "react-icons/bs";
import { AiFillVideoCamera } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

const JournalDeQuete = () => {
  const [photoQuests, setPhotoQuests] = useState([]);
  const [videoQuests, setVideoQuests] = useState([]);
  const [codeQuests, setCodeQuests] = useState([]);
  const [view, setView] = useState(null);
  const [selectedQuest, setSelectedQuest] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const photoData = journalData.filter((q) => q.category === "Photo");
    const videoData = journalData.filter((q) => q.category === "Vidéo");
    const codeData = journalData.filter((q) => q.category === "Code");
    setPhotoQuests(photoData);
    setVideoQuests(videoData);
    setCodeQuests(codeData);
  }, []);

  const handleOpenQuest = (quest, index) => {
    setSelectedQuest(quest);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedQuest(null);
    setCurrentIndex(null);
  };

  const handleNextContent = () => {
    if (view === "video" && currentIndex < videoQuests.length - 1) {
      setSelectedQuest(videoQuests[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    } else if (view === "photo" && currentIndex < photoQuests.length - 1) {
      setSelectedQuest(photoQuests[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    } else if (view === "code" && currentIndex < codeQuests.length - 1) {
      setSelectedQuest(codeQuests[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevContent = () => {
    if (view === "video" && currentIndex > 0) {
      setSelectedQuest(videoQuests[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    } else if (view === "photo" && currentIndex > 0) {
      setSelectedQuest(photoQuests[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    } else if (view === "code" && currentIndex > 0) {
      setSelectedQuest(codeQuests[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleVideoLink = (link) => {
    const fileId = link.split("/d/")[1].split("/")[0];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  return (
    <section
      id="quêtes"
      className="relative py-24 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 text-white bg-black overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 -z-9"
      >
        <source src="/src/assets/bg/bgnebula.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-12 sm:mb-16 font-uncial font-bold">
          Journal de Quête
        </h2>

        <div className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-20">
          <button
            onClick={() => setView("photo")}
            aria-label="Afficher les photos"
            className={`relative group p-4 border-2 rounded-xl shadow-lg transition duration-300 ${
              view === "photo" ? "border-emerald-400" : "border-white"
            } text-emerald-300 text-lg flex items-center justify-center py-2 px-6`}
          >
            <BsFillCameraFill size={28} className="text-white" />
            <p className="mt-2 font-uncial text-sm">Toiles</p>
          </button>

          <button
            onClick={() => setView("video")}
            aria-label="Afficher les vidéos"
            className={`relative group p-4 border-2 rounded-xl shadow-lg transition duration-300 ${
              view === "video" ? "border-emerald-400" : "border-white"
            } text-emerald-300 text-lg flex items-center justify-center py-2 px-6`}
          >
            <AiFillVideoCamera size={28} className="text-white" />
            <p className="mt-2 font-uncial text-sm">Vision</p>
          </button>

          <button
            onClick={() => setView("code")}
            aria-label="Afficher les projets code"
            className={`relative group p-4 border-2 rounded-xl shadow-lg transition duration-300 ${
              view === "code" ? "border-emerald-400" : "border-white"
            } text-emerald-300 text-lg flex items-center justify-center py-2 px-6`}
          >
            <FaGithub size={28} className="text-white" />
            <p className="mt-2 font-uncial text-sm">Code</p>
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-2 sm:px-4">
          {(view === "photo"
            ? photoQuests
            : view === "video"
            ? videoQuests
            : view === "code"
            ? codeQuests
            : []
          ).map((quest, index) => (
            <div
              key={quest.id}
              className="bg-black border border-white rounded-xl overflow-hidden shadow-lg cursor-pointer group hover:scale-105 transition-transform duration-300 relative"
              onClick={() => handleOpenQuest(quest, index)}
            >
              <img
                src={quest.image}
                alt={quest.title}
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition duration-300" />
              <div className="p-4">
                <h4 className="font-semibold text-lg font-uncial">
                  {quest.title}
                </h4>
                <p className="text-sm text-gray-400 italic">
                  {quest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedQuest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md p-6">
          <div className="relative max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl w-full bg-[#111] border border-white rounded-xl overflow-hidden">
            <button
              onClick={handleCloseModal}
              aria-label="Fermer la modal"
              className="absolute top-4 left-4 text-white text-2xl hover:text-red-400 z-20"
            >
              <FaArrowLeft />
            </button>

            <div className="relative">
              {view === "video" ? (
                <iframe
                  src={handleVideoLink(selectedQuest.link)}
                  className="w-full h-auto max-h-[70vh] aspect-video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  title={selectedQuest.title}
                  allowFullScreen
                />
              ) : view === "code" ? (
                <div className="flex items-center justify-center h-[70vh]">
                  <a
                    href={selectedQuest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:underline text-xl font-semibold"
                  >
                    Voir le code sur GitHub
                  </a>
                </div>
              ) : (
                <img
                  src={selectedQuest.link}
                  alt={selectedQuest.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              )}

              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
                <button
                  onClick={handlePrevContent}
                  aria-label="Précédent"
                  className="bg-black text-white rounded-full p-2 shadow-lg hover:bg-emerald-400"
                >
                  <FaArrowLeft />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
                <button
                  onClick={handleNextContent}
                  aria-label="Suivant"
                  className="bg-black text-white rounded-full p-2 shadow-lg hover:bg-emerald-400"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-2xl font-bold font-uncial text-white mb-2">
                {selectedQuest.title}
              </h4>
              <p className="text-gray-300 italic">
                {selectedQuest.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JournalDeQuete;
