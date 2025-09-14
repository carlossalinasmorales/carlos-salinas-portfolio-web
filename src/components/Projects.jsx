import React, { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mostrar todo");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const categories = [
    "Mostrar todo",
    "Minería de datos",
    "Visualización de datos", 
    "Artículo científico",
    "Panel",
    "Brillante",
    "D3.js"
  ];

  const projects = [
    {
      id: 1,
      title: "Types of Data Professionals",
      description: "Análisis completo de los diferentes tipos de profesionales en el campo de datos, incluyendo competencias, rangos salariales y tendencias de popularidad en el mercado laboral.",
      category: "Visualización de datos",
      image: "/assets/images/projects/data-professionals.jpg",
      tags: ["Data Engineer", "ML Engineer", "Data Scientist", "Data Analyst"],
      details: {
        overview: "Este proyecto analiza la evolución de los roles en ciencia de datos y las competencias requeridas para cada posición.",
        technologies: ["Python", "D3.js", "Pandas", "Matplotlib"],
        features: [
          "Visualización interactiva de competencias",
          "Análisis de tendencias salariales",
          "Comparación de roles por industria",
          "Dashboard interactivo"
        ],
        links: [
          { name: "Ver proyecto", url: "https://github.com/carlos/data-professionals" },
          { name: "Demo en vivo", url: "https://data-professionals-demo.com" }
        ]
      }
    },
    {
      id: 2,
      title: "Curve Analysis",
      description: "Análisis estadístico avanzado de curvas de datos con técnicas de regresión lineal y detección de outliers para optimizar modelos predictivos.",
      category: "Minería de datos",
      image: "/assets/images/projects/curve-analysis.jpg",
      tags: ["Curve", "Bad repartition", "Linear", "Outlier"],
      metrics: { r2: 0.859, correlation: 0.927 },
      details: {
        overview: "Sistema de análisis de curvas que implementa algoritmos avanzados para detectar patrones y anomalías en datasets complejos.",
        technologies: ["R", "Shiny", "ggplot2", "caret"],
        features: [
          "Detección automática de outliers",
          "Análisis de correlación avanzado",
          "Visualización interactiva de curvas",
          "Reportes automatizados"
        ],
        links: [
          { name: "Código fuente", url: "https://github.com/carlos/curve-analysis" },
          { name: "Documentación", url: "https://curve-analysis-docs.com" }
        ]
      }
    },
    {
      id: 3,
      title: "Document Formatting Options",
      description: "Sistema completo de formateo de documentos con múltiples opciones de personalización, generación automática de contenido y exportación a diferentes formatos.",
      category: "Panel",
      image: "/assets/images/projects/document-formatting.jpg",
      tags: ["Text formatting", "Table of content", "Horizontal line separator", "Title numbering"],
      details: {
        overview: "Plataforma web para formateo avanzado de documentos con interfaz intuitiva y múltiples opciones de exportación.",
        technologies: ["React", "Node.js", "MongoDB", "PDF.js"],
        features: [
          "Formateo automático de texto",
          "Generación de índices",
          "Exportación a PDF/Word",
          "Plantillas personalizables"
        ],
        links: [
          { name: "Aplicación web", url: "https://document-formatter.com" },
          { name: "API docs", url: "https://docs.document-formatter.com" }
        ]
      }
    },
    {
      id: 4,
      title: "Bubble Chart / Categorization",
      description: "Visualización interactiva de datos complejos mediante gráficos de burbujas categorizados, permitiendo análisis multidimensional de grandes volúmenes de información.",
      category: "D3.js",
      image: "/assets/images/projects/bubble-chart.jpg",
      tags: ["Interactive", "Ticks and tick labels", "Axes position", "Drawing"],
      details: {
        overview: "Biblioteca de visualización avanzada que permite crear gráficos de burbujas interactivos con capacidades de zoom y filtrado.",
        technologies: ["D3.js", "JavaScript", "SVG", "Canvas"],
        features: [
          "Zoom y pan interactivo",
          "Filtrado dinámico por categorías",
          "Animaciones fluidas",
          "Exportación de imágenes"
        ],
        links: [
          { name: "Demo interactivo", url: "https://bubble-chart-demo.com" },
          { name: "NPM Package", url: "https://npmjs.com/package/bubble-chart-lib" }
        ]
      }
    }
  ];

  const filteredProjects = selectedCategory === "Mostrar todo" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Slider functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isHovered && filteredProjects.length > 1) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isHovered, filteredProjects.length]);

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedCategory]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-black mb-4">
            CARTERA
          </h2>
          <p className="text-lg text-olive-black/70 max-w-2xl mx-auto">
            Un vistazo a los proyectos en los que he estado trabajando
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-sunset text-white shadow-lg"
                  : "bg-white text-sunset border-2 border-sunset hover:bg-sunset/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Container */}
          <div className="overflow-hidden rounded-xl">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Project Image */}
                    <div 
                      className="h-80 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden rounded-xl"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 lg:p-8">
                      <h3 className="text-2xl lg:text-3xl font-bold text-olive-black mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-olive-black/70 mb-6 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 4).map((tag, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              index === 0
                                ? "bg-sunset/20 text-sunset"
                                : "bg-gray-100 text-olive-black"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metrics (if available) */}
                      {project.metrics && (
                        <div className="flex gap-6 text-sm text-olive-black mb-6">
                          <span className="bg-gray-100 px-3 py-1 rounded-full">
                            R² → {project.metrics.r2}
                          </span>
                          <span className="bg-gray-100 px-3 py-1 rounded-full">
                            Correlation → {project.metrics.correlation}
                          </span>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="flex gap-4">
                        <button 
                          onClick={() => openModal(project)}
                          className="bg-sunset text-white py-3 px-6 rounded-lg font-medium hover:bg-sunset/90 transition-colors"
                        >
                          Ver detalles
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {filteredProjects.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {filteredProjects.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-sunset w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-olive-black mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className="bg-sunset/20 text-sunset px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Project Image */}
                <div 
                  className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6"
                  style={{
                    backgroundImage: `url(${selectedProject.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-olive-black mb-2">Descripción</h4>
                    <p className="text-olive-black/70 leading-relaxed">
                      {selectedProject.details.overview}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-olive-black mb-2">Tecnologías</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-olive-black px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-olive-black mb-2">Características</h4>
                    <ul className="list-disc list-inside text-olive-black/70 space-y-1">
                      {selectedProject.details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-olive-black mb-2">Enlaces</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.details.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-sunset text-white px-4 py-2 rounded-lg hover:bg-sunset/90 transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
