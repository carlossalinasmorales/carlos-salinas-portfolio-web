import React from "react";

const clientes = [
  { nombre: "KFC", logo: "assets/images/empresas/kfc.jpg" },
  { nombre: "Wendy's", logo: "assets/images/empresas/wendys.jpg" },
  { nombre: "Burger King", logo: "assets/images/empresas/burgerking.jpg" },
  { nombre: "Tarragona", logo: "assets/images/empresas/tarragona.jpg" },
  { nombre: "Telepizza", logo: "assets/images/empresas/telepizza.jpg" },
  { nombre: "Uno Salud", logo: "assets/images/empresas/unosalud.jpg" },
  { nombre: "Chinawok", logo: "assets/images/empresas/chinawok.jpg" },
  { nombre: "Johnny Rockets", logo: "assets/images/empresas/jr.jpg" },
  { nombre: "Degasa", logo: "assets/images/empresas/degasa.jpg" },
];

export default function Clients() {
  // Duplicamos los logos para el efecto infinito
  const logos = [...clientes, ...clientes];

  return (
    <section
      id="clients"
      className="bg-white flex flex-col items-center justify-center py-4 w-full overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="w-full relative">
        <div 
          className="flex animate-scroll"
          style={{
            width: 'max-content',
            animation: 'scroll 27s linear infinite'
          }}
        >
          {logos.map((cliente, idx) => (
            <div
              className="flex items-center justify-center min-w-[140px] mx-8 flex-shrink-0"
              key={idx}
            >
              <img
                src={cliente.logo}
                alt={`Logotipo de ${cliente.nombre}`}
                className="h-[100px] w-auto filter grayscale brightness-100 opacity-90 transition-all duration-300 hover:grayscale-0 hover:opacity-100 select-none"
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx={true.toString()} >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}