  export const categories = [
    "Mostrar todo",
    "Ciencia de datos",
    "Desarrollo web", 
    "App web",
  ];

  export const projects = [
    {
      id: 1,
      title: "Types of Data Professionals",
      description: "Análisis completo de los diferentes tipos de profesionales en el campo de datos, incluyendo competencias, rangos salariales y tendencias de popularidad en el mercado laboral.",
      category: "Desarrollo web",
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