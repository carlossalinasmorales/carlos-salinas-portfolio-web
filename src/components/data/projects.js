export const categories = [
  "Mostrar todo",
  "Ciencia de datos",
  "Backend",
  "Frontend",
  "Automatización",
  "Diseño"
];

export const projects = [
  {
    id: 1,
    slug: "lung-cancer-risk-prediction",
    title: "Predicción de Riesgo de Cáncer de Pulmón",
    shortDescription: "Aplicación web en Streamlit que predice el riesgo de cáncer de pulmón usando un modelo de machine learning. Permite ingresar datos personales y médicos para obtener una probabilidad estimada en tiempo real, con fines exclusivamente educativos y demostrativos.",
    description: `

  <p>
    Este proyecto presenta una aplicación interactiva de <strong>predicción de riesgo de cáncer de pulmón</strong>
    desarrollada con <strong>Streamlit</strong> y un modelo de <strong>aprendizaje automático (Random Forest)</strong>.
    La herramienta permite ingresar información clave —como edad, género, historial de tabaquismo, exposición a
    contaminantes y antecedentes médicos— para estimar de inmediato una <strong>probabilidad de riesgo</strong>.
  </p>
  <br>
  <p>
    El pipeline incluye <em>preprocesamiento</em> de variables numéricas y categóricas, <em>balanceo de clases</em> con
    técnicas específicas durante la validación y <em>optimización por GridSearchCV</em>, lo que se traduce en un desempeño
    consistente (métrica principal <strong>ROC-AUC = 0.77</strong>). La interfaz expone resultados de forma clara y accesible,
    e incorpora visualizaciones que ayudan a interpretar la salida del modelo en tiempo real.
  </p>
  <br>
  <p>
    Entre las variables consideradas se incluyen, entre otras: historial de fumador, exposición a contaminación del aire,
    contacto con polvo y químicos, antecedentes genéticos, comorbilidades respiratorias, dieta, hábitos y síntomas
    relevantes (p. ej., tos crónica, disnea, fatiga, pérdida de peso y dolor torácico).
  </p>
  <br>
  <p>
    Este trabajo busca demostrar cómo el <strong>machine learning aplicado a la salud</strong> puede apoyar procesos de
    evaluación y análisis de riesgo desde una perspectiva técnica y reproducible, abarcando desde la exploración de datos
    y el entrenamiento del modelo hasta el despliegue de una app funcional para usuarios no técnicos.
  </p>
  <br>
  <p>
    <strong>Disclaimer:</strong> Esta aplicación tiene fines <strong>exclusivamente educativos y demostrativos</strong>.
    No debe utilizarse para diagnóstico, tratamiento ni toma de decisiones clínicas. Ante cualquier duda de salud,
    consulta siempre con profesionales médicos calificados.
  </p>
      `,
    category: [
      "Ciencia de datos",
    ],
    image: "/assets/images/projects/lung-cancer-risk-prediction/portada.webp",
    details: {
      technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Numpy", "Scikit-learn"],
      links: [
        { name: "Ver en github", url: "https://github.com/carlossalinasmorales/lung-cancer-risk-prediction" },
      ]
    }
  },

  {
    id: 2,
    slug: "telco-churn-prediction",
    title: "Telco Customer Churn Prediction",
    shortDescription: "Aplicación web en Streamlit que predice la probabilidad de abandono de clientes en telecomunicaciones utilizando un modelo de machine learning entrenado con el dataset Telco Customer Churn.",
    description: `
        <p>
          Este proyecto implementa un modelo de <strong>Machine Learning</strong> para predecir la <strong>probabilidad de abandono de clientes (churn)</strong>
          en una empresa de telecomunicaciones, utilizando el dataset público <em>Telco Customer Churn</em>.
        </p>
        <br>
        <p>
          El pipeline incluye <em>preprocesamiento</em> de variables, <em>escalado</em> de datos y entrenamiento de un modelo de <strong>Regresión Logística</strong>,
          seleccionado por su buen rendimiento y facilidad de interpretación. El modelo final alcanzó un <strong>ROC-AUC de ~84%</strong>, balanceando precisión y recall,
          y ofreciendo resultados consistentes y eficientes para predicciones en tiempo real.
        </p>
        <br>
        <p>
          La solución incorpora una aplicación web construida con <strong>Streamlit</strong> que permite ingresar la información de un cliente (datos demográficos,
          servicios contratados, información contractual y financiera) y obtener inmediatamente una <strong>probabilidad de churn</strong>. La interfaz está diseñada para
          ser clara, amigable y accesible, incluso para usuarios no técnicos.
        </p>
        <br>
        <p>
          Este proyecto tiene fines educativos y demostrativos, mostrando cómo aplicar <strong>ciencia de datos y machine learning</strong> para resolver problemas de negocio
          en la industria de telecomunicaciones. Además, sienta las bases para futuras mejoras como la integración de algoritmos más complejos, dashboards de métricas y
          explicabilidad de modelos (SHAP/LIME).
        </p>
    `,
    category: [
      "Ciencia de datos",
    ],
    image: "/assets/images/projects/telco-churn-prediction/portada.webp",
    details: {
      technologies: ["Python", "Streamlit", "Pandas", "Numpy", "Scikit-learn", "Joblib"],
      links: [
        { name: "Ver en github", url: "https://github.com/carlossalinasmorales/telco-churn-prediction" },
      ]
    }
  },

    {
    id: 3,
    slug: "vehicle-price-prediction",
    title: "Predicción de Precios de Vehículos",
    shortDescription: "Aplicación web en Streamlit que estima el precio de mercado de vehículos usados a partir de sus características técnicas y comerciales, utilizando un modelo de redes neuronales entrenado con más de un millón de registros.",
    description: `
      <section>
        <h2>Predicción de Precios de Vehículos Usados</h2>
        <p>
          Este proyecto implementa un sistema de <strong>machine learning</strong> para predecir el <strong>precio de mercado de vehículos usados</strong> 
          a partir de sus características técnicas y comerciales. Utiliza un <strong>modelo de redes neuronales artificiales</strong> desarrollado con TensorFlow/Keras 
          y un dataset de más de <strong>1 millón de registros</strong>.
        </p>
        <br>
        <p>
          El pipeline incluye <em>preprocesamiento automático</em> de datos con scikit-learn, ingeniería de características relevantes (edad, kilometraje, historial del vehículo)
          y un modelo entrenado para generar estimaciones confiables de precios. El sistema logra un buen balance entre rendimiento y capacidad de generalización, evaluado con métricas como 
          <strong>MSE</strong> y <strong>MAE</strong>.
        </p>
        <br>
        <p>
          La solución incorpora una <strong>aplicación web interactiva con Streamlit</strong>, que permite a los usuarios ingresar las características de un vehículo
          —marca, modelo, año, kilometraje, potencia, transmisión, combustible, entre otras— y obtener una <strong>estimación de su precio en tiempo real</strong>.
          La interfaz es simple, intuitiva y accesible para cualquier usuario.
        </p>
        <br>
        <p>
          Además, el proyecto incluye análisis exploratorio de datos mediante Jupyter Notebooks con visualizaciones y estadísticas descriptivas, lo que facilita la 
          comprensión de las variables más influyentes en el precio de los vehículos.
        </p>
        <br>
        <p>
          <strong>Nota:</strong> Este proyecto tiene fines <strong>educativos y demostrativos</strong>. Los precios generados son estimaciones y no deben considerarse
          como valores definitivos en transacciones reales.
        </p>
      </section>
    `,
    category: [
      "Ciencia de datos",
    ],
    image: "/assets/images/projects/vehicle-price-prediction/portada.webp",
    details: {
      technologies: ["Python", "Streamlit", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
      links: [
        { name: "Ver en github", url: "https://github.com/carlossalinasmorales/vehicle-price-prediction" },
      ]
    }
  },



];