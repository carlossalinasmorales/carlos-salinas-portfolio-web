import React from "react";

const tools = [
  { nombre: "Adobe Illustrator", logo: "assets/images/tools/ailogo.webp" },
  { nombre: "Astro", logo: "assets/images/tools/astrologo.webp" },
  { nombre: "CSS", logo: "assets/images/tools/csslogo.webp" },
  { nombre: "Docker", logo: "assets/images/tools/dockerlogo.webp" },
  { nombre: "Excel", logo: "assets/images/tools/excellogo.webp" },
  { nombre: "FastAPI", logo: "assets/images/tools/fastapilogo.webp" },
  { nombre: "Figma", logo: "assets/images/tools/figmalogo.webp" },
  { nombre: "Git", logo: "assets/images/tools/gitlogo.webp" },
  { nombre: "HTML", logo: "assets/images/tools/htmllogo.webp" },
  { nombre: "JavaScript", logo: "assets/images/tools/jslogo.webp" },
  { nombre: "MySQL", logo: "assets/images/tools/mysqllogo.webp" },
  { nombre: "n8n", logo: "assets/images/tools/n8nlogo.webp" },
  { nombre: "Nginx", logo: "assets/images/tools/nginxlogo.webp" },
  { nombre: "PostgreSQL", logo: "assets/images/tools/postgrelogo.webp" },
  { nombre: "Postman", logo: "assets/images/tools/postmanlogo.webp" },
  { nombre: "Power BI", logo: "assets/images/tools/powerbilogo.webp" },
  { nombre: "Adobe Photoshop", logo: "assets/images/tools/pslogo.webp" },
  { nombre: "Python", logo: "assets/images/tools/pythonlogo.webp" },
  { nombre: "React", logo: "assets/images/tools/reactlogo.webp" },
  { nombre: "Shopify", logo: "assets/images/tools/shopifylogo.webp" },
  { nombre: "SQLite", logo: "assets/images/tools/sqlitelogo.webp" },
  { nombre: "Tailwind CSS", logo: "assets/images/tools/tailwindlogo.webp" },
  { nombre: "WordPress", logo: "assets/images/tools/wplogo.webp" },
];

export default function Tools() {
  // Duplicamos los logos para el efecto infinito
  const logos = [...tools, ...tools];

  return (
    <section
      id="tools"
      className="bg-white flex flex-col items-center justify-center py-4 w-full overflow-hidden"
      aria-labelledby="tools-heading"
    >
      <div className="w-full relative">
        <div 
          className="flex animate-scroll"
          style={{
            width: 'max-content',
            animation: 'scroll 27s linear infinite'
          }}
        >
          {logos.map((tool, idx) => (
            <div
              className="flex items-center justify-center min-w-[140px] mx-8 flex-shrink-0"
              key={idx}
            >
              <img
                src={tool.logo}
                alt={`Logotipo de ${tool.nombre}`}
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