  export const categories = [
    "Mostrar todo",
    "Ciencia de datos",
    "Desarrollo web", 
    "App web",
  ];

  export const projects = [
    {
      id: 1,
      slug: "lung-cancer-risk-prediction",
      title: "Predicción de Riesgo de Cáncer de Pulmón",
      shortDescription: "App en Streamlit que estima el riesgo de cáncer de pulmón con un modelo de ML y visualizaciones simples.",
      description: `
        <p>Este proyecto utiliza aprendizaje automático (machine learning) para predecir la probabilidad de que una persona desarrolle cáncer de pulmón, basándose en factores como edad, género, exposición a agentes de riesgo y antecedentes médicos.</p>
        <img src="/assets/images/projects/lung-cancer-risk-prediction/portada.png" alt="Portada del proyecto cáncer de pulmón" />
        <p>Incluye una aplicación interactiva construida con Streamlit y un modelo entrenado con scikit-learn, además de visualizaciones que ayudan a interpretar el riesgo estimado.</p>
      `,
      category: [
        "Ciencia de datos",
      ],
      image: "/assets/images/projects/lung-cancer-risk-prediction/portada.png",
      details: {
        overview: "Este proyecto analiza la evolución de los roles en ciencia de datos y las competencias requeridas para cada posición.",
        technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Numpy", "Scikit-learn"],
        features: [
          "Interfaz intuitiva: Aplicación web fácil de usar construida con Streamlit",
          "Predicción en tiempo real: Resultados instantáneos basados en los datos ingresados",
          "Visualizaciones: Gráficos informativos sobre la probabilidad de riesgo",
          "Modelo robusto: Random Forest optimizado con validación cruzada",
          "Preprocesamiento automático: Manejo inteligente de variables categóricas y numéricas"
        ],
        links: [
          { name: "Ver en github", url: "https://github.com/carlossalinasmorales/lung-cancer-risk-prediction" },
          { name: "Demo en vivo", url: "https://data-professionals-demo.com" }
        ]
      }
    },
 

  ];