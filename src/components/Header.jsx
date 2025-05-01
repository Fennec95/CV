import { motion } from "framer-motion";

const navItems = ["Profil", "Arcanes", "Destins", "Quêtes", "centres-interet"];

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-xl border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 text-white font-crimson">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="relative text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase hover:text-emerald-300 transition duration-300"
          >
            <span className="relative z-10">{item}</span>
            <motion.span
              className="absolute bottom-0 left-0 h-[1px] w-full bg-emerald-400 opacity-0"
              whileHover={{ opacity: 1, y: 2 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        ))}
      </nav>
    </header>
  );
}
