import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      year: "2020",
      title: "Ingeniería Comercial",
      institution: "Universidad Diego Portales",
    },
    {
      year: "2022",
      title: "Diplomado en Marketing Digital & eBusiness",
      institution: "Universidad de Chile",
    },
    {
      year: "2024",
      title: "Master en Gestión de Negocios Digitales",
      institution: "Universidad Diego Portales",
    },
    {
      year: "2025",
      title: "Especialidad Ciencia de Datos",
      institution: "SENCE, Talento Digital",
    },
  ];

  // Función para dividir texto largo en múltiples líneas
  const wrapText = (text, x, y, maxWidth, lineHeight) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      if (currentLine.length + words[i].length < maxWidth) {
        currentLine += " " + words[i];
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }
    lines.push(currentLine);

    // Calcular la posición inicial para mantener distancia fija del punto
    const totalHeight = lines.length * lineHeight;
    const distanceFromPoint = 20; // Distancia fija del punto
    const startY = y - totalHeight - distanceFromPoint;

    return lines.map((line, index) => (
      <text
        key={index}
        x={x}
        y={startY + index * lineHeight}
        textAnchor="middle"
        className="text-sm font-medium fill-olive-black"
      >
        {line}
      </text>
    ));
  };

  return (
    <div className="w-full px-8">
      {/* Vista Desktop */}
      <div className="hidden md:block max-w-5xl mx-auto">
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Línea simple */}
          <line
            x1="100"
            y1="100"
            x2="900"
            y2="100"
            stroke="#EAC396"
            strokeWidth="2"
          />

          {timelineData.map((item, index) => {
            const x = 100 + index * (800 / (timelineData.length - 1));
            return (
              <g key={index}>
                {/* Círculo simple */}
                <circle
                  cx={x}
                  cy="100"
                  r="6"
                  fill="#403D39"
                />
                
                {/* Año */}
                <text
                  x={x}
                  y="130"
                  textAnchor="middle"
                  className="text-sm font-medium fill-gray-600"
                >
                  {item.year}
                </text>
                
                {/* Título */}
                {wrapText(item.title, x, 100, 20, 18)}
                
                {/* Institución */}
                <text
                  x={x}
                  y="150"
                  textAnchor="middle"
                  className="text-xs fill-gray-500"
                >
                  {item.institution}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Vista Mobile Vertical */}
      <div className="md:hidden">
        <div className="relative pl-4 space-y-8">
          {/* Línea vertical simple */}
          <div className="absolute left-4 top-4 bottom-6 w-0.5 bg-sunset"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className="relative">
              {/* Círculo simple */}
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-olive-black"></div>
              
              {/* Contenido */}
              <div className="pl-6">
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    {item.year}
                  </span>
                </div>
                
                <h3 className="font-medium text-gray-900 mb-1">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-500">
                  {item.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
