import React, { useState, useEffect, useRef } from "react";
import { categories, projects } from "../components/data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mostrar todo");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const filteredProjects = selectedCategory === "Mostrar todo" 
    ? projects 
    : projects.filter(project => {
        // Si category es un array, verificar si contiene la categoría seleccionada
        if (Array.isArray(project.category)) {
          return project.category.includes(selectedCategory);
        }
        // Si category es un string, comparar directamente
        return project.category === selectedCategory;
      });

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

  // Touch handlers (mobile swipe)
  const onTouchStart = (e) => {
    if (filteredProjects.length <= 1) return;
    setIsAutoPlaying(false);
    setIsDragging(true);
    touchStartXRef.current = e.touches[0].clientX;
    setDragX(0);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    setDragX(currentX - touchStartXRef.current);
  };

  const settleAfterDrag = (finalDragX) => {
    const width = containerRef.current?.getBoundingClientRect().width || 1;
    const threshold = Math.min(60, width * 0.1);
    if (finalDragX > threshold) {
      prevSlide();
    } else if (finalDragX < -threshold) {
      nextSlide();
    }
    setIsDragging(false);
    setDragX(0);
    setTimeout(() => setIsAutoPlaying(true), 300);
  };

  const onTouchEnd = () => {
    if (!isDragging) return;
    settleAfterDrag(dragX);
  };

  const onTouchCancel = () => {
    if (!isDragging) return;
    settleAfterDrag(dragX);
  };


  return (
    <section id="projects" className="pb-12 bg-white">
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
          <div 
            ref={containerRef}
            className="overflow-hidden rounded-xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchCancel}
            style={{ touchAction: 'pan-y' }}
          >
            <div 
              ref={sliderRef}
              className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
              style={{
                transform: (() => {
                  const width = containerRef.current?.getBoundingClientRect().width || 1;
                  const basePercent = -currentSlide * 100;
                  const deltaPercent = isDragging ? (dragX / width) * 100 : 0;
                  return `translateX(calc(${basePercent}% + ${deltaPercent}%))`;
                })()
              }}
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
                          {Array.isArray(project.category) ? project.category[0] : project.category}
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
                        <a 
                          href={`/projects/${project.slug}`}
                          className="w-full sm:w-auto bg-sunset cursor-pointer py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-olive-black hover:text-white transition-colors text-sm sm:text-base text-center"
                        >
                          Ver detalles
                        </a>
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
                className="hidden cursor-pointer sm:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-2 lg:p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
              >
                <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="hidden cursor-pointer sm:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-2 lg:p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
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

      </div>
    </section>
  );
};

export default Projects;