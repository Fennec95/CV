import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/CV/" className="hover:text-gray-400">
            Charles MONTENOISE
          </Link>
        </div>

        {/* Liens de navigation */}
        <ul className="hidden sm:flex space-x-6 text-lg">
          <li>
            <a href="#profil" className="hover:text-gray-400">
              Profil
            </a>
          </li>
          <li>
            <a href="#arcanes" className="hover:text-gray-400">
              Arcanes
            </a>
          </li>
          <li>
            <a href="#destins" className="hover:text-gray-400">
              Destins
            </a>
          </li>
          <li>
            <a href="#quêtes" className="hover:text-gray-400">
              Quêtes
            </a>
          </li>
          <li>
            <a href="#centres-interet" className="hover:text-gray-400">
              Centres d'Intérêt
            </a>
          </li>
        </ul>

        {/* Menu hamburger pour les petits écrans */}
        <div className="sm:hidden">
          <button className="text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
