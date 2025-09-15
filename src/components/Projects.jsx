import React, { useState, useEffect, useRef } from "react";
import { categories, projects } from "../components/data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mostrar todo");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

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
      }, 4000);
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
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    // Restaurar scroll del body
    document.body.style.overflow = 'unset';
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section id="projects" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl  font-bold text-olive-black mb-2 sm:mb-4">
            Proyectos
          </h2>
          {/* <p className="text-base sm:text-lg text-olive-black/70 max-w-2xl mx-auto px-4">
            Un vistazo a los proyectos en los que he estado trabajando
          </p> */}
        </div>

        {/* Filter Bar - Mejorado para móvil */}
        <div className="mb-6 sm:mb-8">
          {/* Vista móvil: Dropdown */}
          <div className="sm:hidden">
            <select id="categoryselect"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-olive-black  font-medium "
            >
              {categories.map((category) => (
                <option className="py-2 px-4 hover:bg-gray-100 cursor-pointer font-medium text-olive-black/80" key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          
          {/* Vista desktop: Botones */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 md:px-6 py-2 md:py-2.5 rounded-lg font-medium transition-all duration-300 text-sm md:text-base cursor-pointer ${
                  selectedCategory === category
                    ? "bg-olive-black text-white  shadow-lg"
                    : "  border-2 border-olive-black hover:bg-olive-black hover:text-white hover:shadow-md text-olive-black/80 hover:border-transparent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
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
                  {/* Layout responsivo mejorado */}
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start lg:items-center">
                    {/* Project Image */}
                    <div 
                      className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden rounded-xl order-1 lg:order-none"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6">
                        <span className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 sm:p-6 lg:p-8 order-2 lg:order-none">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-olive-black mb-3 sm:mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-olive-black/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                        {project.description}
                      </p>

                      {/* Tags - Mejorado para móvil */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {project.tags.slice(0, 4).map((tag, index) => (
                          <span
                            key={index}
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                              index === 0
                                ? "bg-sunset/20 text-sunset"
                                : "bg-gray-100 text-olive-black"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metrics (if available) - Responsivo */}
                      {project.metrics && (
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-olive-black mb-4 sm:mb-6">
                          <span className="bg-gray-100 px-2 sm:px-3 py-1 rounded-full text-center sm:text-left">
                            R² → {project.metrics.r2}
                          </span>
                          <span className="bg-gray-100 px-2 sm:px-3 py-1 rounded-full text-center sm:text-left">
                            Correlation → {project.metrics.correlation}
                          </span>
                        </div>
                      )}

                      {/* Action Button - Responsivo */}
                      <div className="flex">
                        <button 
                          onClick={() => openModal(project)}
                          className="w-full sm:w-auto bg-sunset cursor-pointer py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-olive-black hover:text-white transition-colors text-sm sm:text-base"
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

          {/* Navigation Arrows - Ocultos en móvil */}
          {filteredProjects.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="hidden sm:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-2 lg:p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
              >
                <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="hidden sm:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-2 lg:p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
              >
                <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {filteredProjects.length > 1 && (
            <div className="flex justify-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-sunset w-6 sm:w-8"
                      : "bg-gray-300 hover:bg-gray-400 w-2.5 sm:w-3"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal - Completamente responsivo */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-start sm:items-center justify-center p-0 sm:p-4 z-50 overflow-y-auto">
            <div className="bg-white w-full h-full sm:h-auto sm:rounded-xl sm:max-w-4xl sm:w-full sm:max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-olive-black mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className="bg-sunset/20 text-sunset px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl sm:text-3xl flex-shrink-0 w-8 h-8 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>

                {/* Project Image */}
                <div 
                  className="h-48 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 sm:mb-6"
                  style={{
                    backgroundImage: `url(${selectedProject.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>

                {/* Project Details */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-olive-black mb-2">Descripción</h4>
                    <p className="text-olive-black/70 leading-relaxed text-sm sm:text-base">
                      {selectedProject.details.overview}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-olive-black mb-2">Tecnologías</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedProject.details.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-olive-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-olive-black mb-2">Características</h4>
                    <ul className="list-disc list-inside text-olive-black/70 space-y-1 text-sm sm:text-base">
                      {selectedProject.details.features.map((feature, index) => (
                        <li key={index} className="leading-relaxed">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-olive-black mb-2">Enlaces</h4>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                      {selectedProject.details.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-sunset text-white px-4 py-2.5 rounded-lg hover:bg-sunset/90 transition-colors text-center text-sm sm:text-base font-medium"
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