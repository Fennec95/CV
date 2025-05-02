import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <header className="bg-black text-white fixed top-0 w-full z-50">
      <nav className="flex justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <HashLink
            smooth
            to="/"
            className="hover:text-gray-400 flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="assets/quetes/image/fennec1.png"
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
          </HashLink>
        </div>

        {/* Menu */}
        <ul className="flex space-x-4">
          <li>
            <HashLink smooth to="#profil" className="hover:text-gray-400">
              Profil
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#arcanes" className="hover:text-gray-400">
              Arcanes
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#destins" className="hover:text-gray-400">
              Destins
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#quêtes" className="hover:text-gray-400">
              Quêtes
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#centres-interet"
              className="hover:text-gray-400"
            >
              Centres d'Intérêt
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
