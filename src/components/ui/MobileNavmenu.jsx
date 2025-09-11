import React, { useEffect, useRef } from "react";
import { orgData } from "../data/contactdata";

const MobileNavmenu = ({ isOpen, onClose, menuItems }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);


  return (
    


    <nav
      id="mobile-menu"
      ref={menuRef}
      className={`fixed top-0 left-0 h-full w-[80vw] md:w-[50vh] bg-white text-secondary transform transition-transform duration-300 ease-in-out z-40 lg:hidden overflow-hidden ${
        isOpen ? 'translate-x-0 shadow-md shadow-white/50' : '-translate-x-full'
      }`}
      aria-label="Menú móvil"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-secondary focus:outline-none hover:text-secondary transition-colors p-2"
        aria-label="Cerrar menú de navegación"
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
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>


      <div className="flex flex-col px-6 pt-16 space-y-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={onClose}
            className="text-lg font-medium hover:text-secondary transition-colors duration-200 border-b border-secondary/50 pb-3"
            aria-label={`Navegar a ${item.label}`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="absolute bottom-8 px-6 space-y-3 text-sm ">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href={`mailto:${orgData[0]?.email || 'contacto@empresa.com'}`} className="hover:text-secondary truncate">
            {orgData[0]?.email || 'contacto@empresa.com'}
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href={`tel:${orgData[0]?.phone || '+123456789'}`} className="hover:text-secondary">
            {orgData[0]?.phone || '+123456789'}
          </a>
        </div>
      </div>

    </nav>
  );
};

export default MobileNavmenu;