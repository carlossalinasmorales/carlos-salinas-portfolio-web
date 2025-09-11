import React, { useState, useEffect } from "react";
import DesktopNavmenu from "../ui/DesktopNavmenu.jsx";
import MobileNavmenu from "../ui/MobileNavmenu.jsx";
import { menuItems } from "../data/menu";



const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Solo ocultar en pantallas grandes
      if (window.innerWidth >= 1024) {
        setVisible(currentScrollPos < prevScrollPos || currentScrollPos === 0);
      }

      // Detectar si se ha hecho scroll para cambiar el fondo
      setIsScrolled(currentScrollPos > 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out text-secondary items-center lg:justify-items-center
      ${visible ? "lg:translate-y-0" : "lg:-translate-y-full"}
      ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
      role="banner"
    >
      <div className="flex lg:w-[70%] justify-between py-2 mx-6 lg:mx-12 items-center">
        {/* Logo solo visible en móvil */}
        <a
          href="/"
          className="text-xl font-bold lg:hidden"
          aria-label="Inicio, logo de Empresa Salinas"
        >
          
        </a>

        {/* Enlaces centrados en desktop */}
        <div className="hidden lg:flex lg:justify-center lg:w-full">
          <DesktopNavmenu menuItems={menuItems} />
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label="Abrir menú de navegación"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <MobileNavmenu isOpen={menuOpen} onClose={closeMenu} menuItems={menuItems} />
    </header>
  );
};

export default Header;
