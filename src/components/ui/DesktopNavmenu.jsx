import React from "react";

const DesktopNavmenu = ({ menuItems }) => {
  return (
    <nav className="hidden lg:flex items-center space-x-2 text-lg hover:cursor-pointer font-medium text-olive-black " aria-label="Menú principal">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="menu-link px-3 py-2 hover:bg-tertiary hover:cursor-pointer hover:bg-sunset/40 rounded-md transition-all"
          aria-label={`Navegar a ${item.label}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default DesktopNavmenu;