import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-uncial text-white mb-6">
          Suivez l'Alchimiste
        </h2>

        <div className="flex justify-center gap-6 sm:gap-8 md:gap-10 text-3xl sm:text-4xl md:text-5xl mb-6">
          <a
            href="https://www.instagram.com/lefennecblanc/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/charles-montenoise-b18270142/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Fennec95"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>

        {/* Email et Téléphone (version sans lien) */}
        <div className="text-xl sm:text-2xl md:text-3xl font-cormorant text-white space-y-1 mb-6">
          <p className="tracking-wide">✉️ lefennecblanc.pro@gmail.com</p>
          <p className="tracking-wide">📞 +33 6 47 08 98</p>
        </div>

        <p className="text-xs sm:text-sm md:text-base text-gray-500">
          © {new Date().getFullYear()} Le Fennec Blanc. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
