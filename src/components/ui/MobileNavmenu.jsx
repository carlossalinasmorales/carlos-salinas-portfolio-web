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
    <>
      {/* Overlay con blur */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      <nav
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-[85vw] md:w-[60vw] bg-bone-white text-olive-black transform transition-all duration-300 ease-in-out z-40 lg:hidden overflow-hidden border-r border-sunset/20 ${
          isOpen ? 'translate-x-0 shadow-xl shadow-eerie-black/10' : '-translate-x-full'
        }`}
        aria-label="Menú móvil"
      >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-olive-black focus:outline-none hover:text-sunset transition-colors p-2 rounded-full hover:bg-sunset/10"
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


      <div className="flex flex-col px-6 pt-20 space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={onClose}
            className="text-lg font-medium text-olive-black hover:text-sunset transition-all duration-200 py-3 px-4 rounded-lg hover:bg-sunset/5 border-l-2 border-transparent hover:border-sunset"
            aria-label={`Navegar a ${item.label}`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="absolute bottom-8 px-6 space-y-4 text-sm border-t border-sunset/20 pt-6">
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-sunset" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href={`mailto:${orgData[0]?.email || 'contacto@empresa.com'}`} className="hover:text-sunset transition-colors truncate">
            {orgData[0]?.email || 'contacto@empresa.com'}
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-sunset" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href={`tel:${orgData[0]?.phone || '+123456789'}`} className="hover:text-sunset transition-colors">
            {orgData[0]?.phone || '+123456789'}
          </a>
        </div>
      </div>

    </nav>
    </>
  );
};

export default MobileNavmenu;