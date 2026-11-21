// ============================================================================
// CONFIGURACIÓN CENTRAL DEL PORTAFOLIO DOCENTE UPNFM
// Lic. Abdel Alberto Trochez Rios
// ============================================================================
// Todos los documentos están enlazados directamente a su carpeta pública en Google Drive:
// https://drive.google.com/drive/folders/1kdiLz3gC7X-v5oLhQ8tD6oIdmscj-RJl?usp=sharing
// ============================================================================

export const getDrivePreviewUrl = (url) => {
  if (!url || url === "#!" || url.trim() === "") return null;
  // Si es enlace de carpeta de Google Drive, mostrar vista embebida de carpeta
  const folderMatch = url.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch && folderMatch[1]) {
    return `https://drive.google.com/embeddedfolderview?id=${folderMatch[1]}#list`;
  }
  // Convertir enlace de vista de archivo de Google Drive a enlace de incrustación (/preview)
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch && fileMatch[1]) {
    return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  }
  const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1] && !url.includes("/folders/")) {
    return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
  }
  // Si es enlace de YouTube
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}`;
  }
  return url;
};

export const docenteInfo = {
  nombreCompleto: "Abdel Alberto Trochez Rios",
  nombreCorto: "Lic. Abdel Trochez",
  gradoAcademico:
    "Profesor en Informática Educativa en el grado de Licenciatura (Lic.)",
  institucion: "Universidad Pedagógica Nacional Francisco Morazán (UPNFM)",
  sedePrincipal: "CRUSB - Centro Regional Universitario Santa Bárbara",
  correo: "atrochez@upnfm.edu.hn",
  telefono: "+504 9627-0599",
  telefonoLimpio: "50496270599",
  carpetaDriveRaiz:
    "https://drive.google.com/drive/folders/1kdiLz3gC7X-v5oLhQ8tD6oIdmscj-RJl?usp=sharing",
  carreras: [
    {
      id: "contaduria-vread",
      nombre: "Profesorado en Contaduría y Gestión Empresarial",
      unidad: "Vicerrectoría de Educación Abierta y a Distancia (VREAD)",
      modalidad: "Modalidad Distancia (VREAD)",
    },
    {
      id: "prebasica-presencial",
      nombre: "Profesorado en Educación Prebásica",
      unidad: "Vicerrectoría Académica",
      modalidad: "Modalidad Presencial",
    },
  ],
  bienvenida:
    "Bienvenidos a mi Portafolio Docente Digital institucional. En este espacio académico se sistematiza la planificación didáctica, los recursos tecnológicos de aprendizaje, las actividades en la plataforma virtual Moodle y las evidencias de acompañamiento pedagógico desarrolladas en el Centro Regional Universitario Santa Bárbara (CRUSB) de la UPNFM.",
  estadisticas: [
    {
      id: 1,
      title: "Modalidades",
      description: "2",
      subtitle: "Distancia y Presencial",
    },
    {
      id: 2,
      title: "Carreras UPNFM",
      description: "2",
      subtitle: "Contaduría y Prebásica",
    },
    {
      id: 3,
      title: "Periodo Activo",
      description: "III-2026",
      subtitle: "CRUSB Santa Bárbara",
    },
  ],
};

// ============================================================================
// SECCIÓN 2: PERFIL DOCENTE (Hoja de vida, Filosofía de enseñanza, FODA)
// ============================================================================
export const perfilDocenteData = {
  hojaDeVida: {
    titulo: "2.1. Hoja de Vida (Currículum Vitae)",
    descripcion:
      "Síntesis de formación académica universitaria, experiencia docente en educación superior, competencias tecnológicas y actualización profesional continua.",
    driveUrl:
      "https://drive.google.com/file/d/1JulqWuwKiIb57mnFWXZeNznjbsC5qtG9/view?usp=sharing",
    nombreArchivo: "Hoja de Vida UPN - Abdel Alberto Trochez Rios.pdf",
    resumenCurricular: [
      {
        categoria: "Título Universitario",
        detalle:
          "Profesor en Informática Educativa en el grado de Licenciatura (UPNFM)",
      },
      {
        categoria: "Centro Regional",
        detalle:
          "Centro Regional Universitario Santa Bárbara (CRUSB - UPNFM)",
      },
      {
        categoria: "Carreras que Atiende",
        detalle:
          "Profesorado en Contaduría y Gestión Empresarial (VREAD) y Profesorado en Educación Prebásica (Presencial)",
      },
      {
        categoria: "Especialidad Académica",
        detalle:
          "Informática Educativa, Informática Aplicada a la Gestión Empresarial, Entornos Virtuales de Aprendizaje (Moodle) y Tecnología Educativa",
      },
    ],
  },
  filosofiaEnsenanza: {
    titulo: "2.2. Filosofía de Enseñanza",
    descripcion:
      "Concepción pedagógica, valores éticos y metodología aplicada en la formación de futuros profesionales de la educación.",
    driveUrl:
      "https://drive.google.com/file/d/1ldinEtREYs35wuhopwN0RxOKCRTfAA1v/view?usp=sharing",
    nombreArchivo: "Filosofía de Enseñanza - Abdel Trochez.pdf",
    citaDestacada:
      "«La tecnología educativa no sustituye la vocación docente; la potencia cuando se integra con sentido humano, crítico y didáctico para transformar el aprendizaje.»",
    pilares: [
      {
        titulo: "Aprendizaje Activo y Práctico con TIC",
        texto:
          "Concibo la enseñanza de la Informática Educativa y Aplicada como un proceso eminentemente práctico y reflexivo, donde cada estudiante construye competencias digitales reales resolviendo problemas propios de su especialidad docente.",
      },
      {
        titulo: "Mediación Pedagógica y Acompañamiento",
        texto:
          "Tanto en la modalidad Presencial como en Educación Abierta y a Distancia (VREAD), el rol docente trasciende la transmisión técnica para convertirse en un acompañamiento cercano, estructurado y empático que guía la autonomía del estudiante.",
      },
      {
        titulo: "Ética, Innovación e Inclusión Digital",
        texto:
          "Promuevo el uso ético de las herramientas tecnológicas, los entornos virtuales (Moodle) y los recursos colaborativos en la nube, preparando a los futuros docentes para innovar en diversos contextos educativos de Honduras.",
      },
    ],
  },
  fodaPersonal: {
    titulo: "2.3. FODA Personal Docente",
    descripcion:
      "Autoevaluación estratégica de Fortalezas, Oportunidades, Debilidades y Amenazas en el ejercicio de la docencia universitaria.",
    driveUrl:
      "https://drive.google.com/file/d/16jeUXhG3CcUeFdBjLrI1ZrEm4xO_Hecc/view?usp=sharing",
    nombreArchivo: "FODA_Personal_Abdel_Trochez.png",
    matriz: {
      fortalezas: [
        "Dominio especializado en Informática Educativa, software de gestión, ofimática avanzada y plataformas LMS (Moodle).",
        "Capacidad para adaptar estrategias didácticas tanto a la modalidad Presencial como a la modalidad a Distancia (VREAD).",
        "Diseño de recursos digitales interactivos, videotutoriales y guías prácticas paso a paso.",
        "Compromiso institucional y disposición permanente para el acompañamiento académico en el CRUSB.",
      ],
      oportunidades: [
        "Integración de herramientas de Inteligencia Artificial, ecosistema Google Workspace y recursos en la nube en la docencia superior.",
        "Programas de formación continua y actualización metodológica impulsados por la UPNFM y la VREAD.",
        "Fortalecimiento de competencias digitales en futuros docentes de Educación Prebásica y Contaduría.",
        "Sistematización digital del trabajo docente mediante portafolios web interactivos.",
      ],
      debilidades: [
        "Alta inversión de tiempo en la producción artesanal de materiales audiovisuales y revisión individualizada de prácticas digitales.",
        "Necesidad de ampliar la publicación de investigaciones formales sobre el impacto de las TIC en el aula regional.",
      ],
      amenazas: [
        "Brechas de conectividad a internet y disponibilidad de equipo de cómputo en algunas zonas rurales de procedencia estudiantil.",
        "Fallas eventuales en el suministro eléctrico o servicios de red durante sesiones sincrónicas o prácticas de laboratorio.",
      ],
    },
  },
};

// ============================================================================
// SECCIÓN 3: PERFIL INSTITUCIONAL (UPNFM, VREAD, Carreras y CRUSB)
// ============================================================================
export const perfilInstitucionalData = [
  {
    id: "upnfm",
    sigla: "UPNFM",
    titulo: "3.1. Universidad Pedagógica Nacional Francisco Morazán",
    subtitulo: "Alma Máter de la Formación Docente en Honduras - Sede CRUSB",
    resena:
      "Fundada el 16 de marzo de 1956 como la Escuela Superior del Profesorado Francisco Morazán (ESPFM) y elevada a rango universitario el 14 de diciembre de 1989 mediante la Ley de Educación Superior, la UPNFM es la única institución estatal en Honduras dedicada exclusivamente a la formación, perfeccionamiento y especialización de docentes para todos los niveles educativos. A través del Centro Regional Universitario Santa Bárbara (CRUSB), descentraliza la educación superior de calidad, la investigación educativa y la vinculación social en el occidente del país.",
    mision:
      "Somos una institución de educación superior acreditada en la formación de profesionales con estándares de calidad, para contribuir en la transformación de la educación hondureña y en el desarrollo del país, al integrar las funciones de docencia con la investigación, extensión y vinculación con la sociedad.",
    vision:
      "Ser una institución de educación superior acreditada y certificada que promueva los procesos de gestión de la calidad, internacionalización, investigación, innovación y emprendimiento; comprometida en la transformación integral del país y un referente en la formación de profesionales con valores éticos, competencias docentes, científicas, humanísticas, investigativas, tecnológicas e innovadoras.",
    valores: [
      "Ética, integridad y transparencia académica",
      "Calidad, excelencia e innovación pedagógica y tecnológica",
      "Inclusión, equidad y compromiso con la transformación social",
      "Identidad nacional, humanismo y responsabilidad ciudadana",
    ],
    nombreArchivo: "Perfil_Institucional_UPNFM_y_CRUSB.pdf",
    driveUrl:
      "https://drive.google.com/file/d/19u3vtm54rUS4JM74_ssQZB7IMbgMEEIT/view?usp=sharing",
    portalWeb: "https://www.upnfm.edu.hn",
  },
  {
    id: "vread",
    sigla: "VREAD",
    titulo: "3.2. Vicerrectoría de Educación Abierta y a Distancia (VREAD)",
    subtitulo: "Cobertura, Innovación y Acompañamiento Pedagógico Nacional",
    resena:
      "La Vicerrectoría de Educación Abierta y a Distancia (VREAD) gestiona, coordina y expande la oferta académica de la UPNFM bajo modalidades abiertas, virtuales y a distancia. Opera de forma descentralizada en los Centros Regionales Universitarios y sedes del país (incluyendo el CRUSB en Santa Bárbara, Tegucigalpa, San Pedro Sula, La Ceiba, Danlí, Choluteca, Juticalpa, Nacaome y Santa Rosa de Copán), combinando Encuentros de Acompañamiento pedagógico con el aprendizaje autónomo mediado por la plataforma virtual Moodle.",
    mision:
      "Formar y perfeccionar profesionales de la educación con estándares de calidad bajo modalidades abiertas, flexibles y a distancia, democratizando el acceso equitativo a la educación superior universitaria e integrando la docencia mediada por tecnologías con la investigación y la vinculación social en todas las regiones de Honduras.",
    vision:
      "Ser la instancia líder y referente nacional y regional en la gestión de programas de educación superior abierta y a distancia acreditados, promoviendo la innovación tecnológica, la mediación pedagógica y el aprendizaje autónomo para la transformación educativa del país.",
    objetivos: [
      "Democratizar y ampliar la cobertura de la educación superior pedagógica en todo el territorio nacional.",
      "Desarrollar procesos de enseñanza-aprendizaje bimodales y a distancia mediante Encuentros de Acompañamiento y el entorno virtual Moodle.",
      "Articular la formación docente con proyectos de investigación y vinculación social adaptados a las comunidades regionales.",
    ],
    nombreArchivo: "Perfil_VREAD_UPNFM.pdf",
    driveUrl:
      "https://drive.google.com/file/d/1uVrb0-Cg0d12m-W3YCaQqCqtR0OmUV9h/view?usp=sharing",
    portalWeb: "https://www.upnfm.edu.hn",
  },
  {
    id: "carreras",
    sigla: "CARRERAS",
    titulo:
      "3.3. Profesorado en Contaduría y Gestión Empresarial / Educación Prebásica",
    subtitulo: "Perfiles Profesionales Atendidos en el CRUSB",
    resena:
      "El quehacer docente se desarrolla de forma articulada en dos programas estratégicos del Centro Regional Universitario Santa Bárbara (CRUSB): el Profesorado en Contaduría y Gestión Empresarial (VREAD - Educación Comercial) y el Profesorado en Educación Prebásica (Modalidad Presencial), fortaleciendo las competencias tecnológicas aplicadas tanto a la gestión contable-financiera como a la innovación didáctica infantil.",
    perfilesCarrera: [
      {
        nombre: "Profesorado en Contaduría y Gestión Empresarial (VREAD)",
        grado: "Grado de Licenciatura (12 Periodos Académicos)",
        descripcion:
          "Forma profesionales integrales de la docencia técnica con sólido dominio científico, pedagógico y tecnológico en ciencias contables, financieras, administrativas, tributarias y de gestión empresarial.",
        competencias: [
          "Ejerce la docencia especializada en educación media técnica y superior en las áreas contable, financiera y administrativa.",
          "Aplica software contable, hojas de cálculo financieras avanzadas e Informática Aplicada en la toma de decisiones y gestión de proyectos empresariales.",
          "Diseña, emprende y evalúa proyectos educativos, comunitarios y de desarrollo empresarial con sentido ético.",
        ],
        nombreArchivo:
          "Perfil_Profesorado_Contaduria_y_Gestion_Empresarial_VREAD.pdf",
        planDriveUrl:
          "https://drive.google.com/file/d/1ImiTBocYhG5GrBJQdg1yxYpplJUgloBv/view?usp=sharing",
      },
      {
        nombre: "Profesorado en Educación Prebásica (Presencial)",
        grado: "Grado de Licenciatura",
        descripcion:
          "Forma profesionales de la educación con preparación ética, humanística, científica y tecnológica para garantizar una atención educativa integral y de calidad a la niñez en su primera infancia.",
        competencias: [
          "Domina las etapas del desarrollo evolutivo, cognitivo, socioafectivo y psicomotor del niño en edad prebásica.",
          "Diseña y aplica experiencias de aprendizaje lúdicas, cuentos interactivos y recursos de Informática Educativa apropiados para el nivel preescolar.",
          "Gestiona el currículo de Educación Prebásica e integra activamente a la familia y la comunidad en el desarrollo infantil.",
        ],
        nombreArchivo: "Perfil_Profesorado_Educacion_Prebasica_Presencial.pdf",
        planDriveUrl:
          "https://drive.google.com/file/d/1NmKnvcwIu2H9qK6qTa6plSDuAf_hoQac/view?usp=sharing",
      },
    ],
    driveUrl: "",
  },
];

// ============================================================================
// FECHAS OFICIALES DE ENCUENTROS DE ACOMPAÑAMIENTO - III PERIODO 2026
// ============================================================================
export const encuentrosIIIPeriodo2026 = [
  {
    numero: 1,
    tituloOficial:
      "PRIMER ENCUENTRO DE ACOMPAÑAMIENTO - 11 AL 13 DE SEPTIEMBRE DE 2026",
    fechaCorta: "11-13 Septiembre 2026",
  },
  {
    numero: 2,
    tituloOficial:
      "SEGUNDO ENCUENTRO DE ACOMPAÑAMIENTO - 27 DE SEPTIEMBRE DE 2026",
    fechaCorta: "27 Septiembre 2026",
  },
  {
    numero: 3,
    tituloOficial:
      "TERCER ENCUENTRO DE ACOMPAÑAMIENTO - 23 AL 25 DE OCTUBRE DE 2026",
    fechaCorta: "23-25 Octubre 2026",
  },
  {
    numero: 4,
    tituloOficial:
      "CUARTO ENCUENTRO DE ACOMPAÑAMIENTO - 06 AL 08 DE NOVIEMBRE DE 2026",
    fechaCorta: "06-08 Noviembre 2026",
  },
  {
    numero: 5,
    tituloOficial:
      "QUINTO ENCUENTRO DE ACOMPAÑAMIENTO - 20 AL 22 DE NOVIEMBRE DE 2026",
    fechaCorta: "20-22 Noviembre 2026",
  },
];

// ============================================================================
// ESPACIO FORMATIVO 1: INFORMÁTICA APLICADA (VREAD - III PERIODO 2026)
// Con todos los enlaces reales extraídos de Google Drive
// ============================================================================
const claseInformaticaAplicada2026_3 = {
  id: "informatica-aplicada-2026-3",
  nombre: "Informática Aplicada",
  carrera: "Profesorado en Contaduría y Gestión Empresarial",
  modalidad: "Modalidad Distancia (VREAD)",
  sede: "CRUSB (Santa Bárbara)",
  periodoLabel: "III Periodo 2026",
  // 5.1. Subpágina: Diseño Didáctico (Los 3 documentos subidos a 5.1_Diseno)
  disenoDidactico: {
    titulo: "Diseño Didáctico, Plan de Tutorías y Sílabo - Informática Aplicada I",
    descripcion:
      "Planificación académica oficial del espacio formativo Informática Aplicada I (III PAC 2026 - VREAD): Plan de Tutorías, Guía Docente a Distancia y Sílabo de la asignatura.",
    documentos: [
      {
        id: "diseno-plan-tutorias-inf-apl",
        titulo:
          "2026 - III PAC - Plan de Tutorías - Informática Aplicada I - Abdel Trochez",
        tipo: "Documento PDF (Plan de Tutorías)",
        descripcion:
          "Jornalización y programación oficial de los Encuentros de Acompañamiento del III Periodo Académico 2026.",
        nombreArchivo:
          "2026 - III PAC - Plan de Tutorías - Informática Aplicada I - Abdel Trochez.pdf",
        driveUrl:
          "https://drive.google.com/file/d/1sxYyAhvwaYSZS9AvsvXzfdUTAz5_dRG9/view?usp=sharing",
      },
      {
        id: "diseno-guia-docente-inf-apl",
        titulo: "Guía Docente Distancia - Informática Aplicada I",
        tipo: "Documento PDF (Guía Metodológica VREAD)",
        descripcion:
          "Guía metodológica oficial de estudio y acompañamiento para la Modalidad a Distancia (VREAD).",
        nombreArchivo: "Guía Docente Distancia - Informática Aplicada I.pdf",
        driveUrl:
          "https://drive.google.com/file/d/1sCSB77LWtPl7_CbU6yRNKuTDRtvmNpyM/view?usp=sharing",
      },
      {
        id: "diseno-silabo-inf-apl",
        titulo: "Sílabo Informática Aplicada I",
        tipo: "Documento PDF (Sílabo Oficial)",
        descripcion:
          "Descripción curricular del espacio pedagógico, competencias genéricas y específicas, unidades temáticas y referencias bibliográficas.",
        nombreArchivo: "Sílabo Informática aplicada I.pdf",
        driveUrl:
          "https://drive.google.com/file/d/19hGlq2H_YEjqEtMLkqjlue5MC5ZUWKE_/view?usp=sharing",
      },
    ],
  },
  // 5.2. Recursos Generales de la Clase en Drive
  recursosGenerales: [
    {
      id: "rec-gen-pptx-u1-u2",
      titulo: "Presentación: Informática Aplicada I - Unidades 1 y 2 - VREAD",
      tipo: "Presentación PowerPoint (.pptx)",
      descripcion:
        "Diapositivas magistrales de desarrollo de las Unidades 1 y 2 de Informática Aplicada I.",
      nombreArchivo: "Informática Aplicada I - Unidades 1 y 2 - VREAD.pptx",
      driveUrl:
        "https://drive.google.com/file/d/1bm2eDGAqa9Hm0Msa55a8Svi5HKiCl0Rp/view?usp=sharing",
    },
    {
      id: "rec-gen-infografia-ppt",
      titulo: "Infografía: Buenas y malas prácticas al crear presentaciones",
      tipo: "Infografía PNG",
      descripcion:
        "Recurso visual didáctico sobre criterios de diseño efectivo de presentaciones multimedia.",
      nombreArchivo: "Buenas y malas prácticas al crear presentaciones.png",
      driveUrl:
        "https://drive.google.com/file/d/1VyT2IYIRIFRT_azFt-eukM7OXdO9UDy9/view?usp=sharing",
    },
    {
      id: "rec-gen-infografia-excel",
      titulo: "Infografía de funciones CONTAR en Excel",
      tipo: "Infografía PNG",
      descripcion:
        "Guía visual de sintaxis y aplicación de funciones estadísticas y contables de la familia CONTAR en Microsoft Excel.",
      nombreArchivo: "Infografía de funciones CONTAR en Excel.png",
      driveUrl:
        "https://drive.google.com/file/d/1KyjO-E_GnflKjOrwunlNxsE959LW0Pud/view?usp=sharing",
    },
  ],
  // 5.5. Lista de Asistencia General de la Clase en Drive
  asistenciaGeneral: [
    {
      id: "asist-gen-inf-aplicada",
      titulo:
        "Listado Oficial de Asistencia - Informática Aplicada (III Periodo 2026)",
      tipo: "Carpeta Google Drive (5.5_Asistencia)",
      descripcion:
        "Control general de asistencia de los estudiantes de Informática Aplicada en el Centro Regional Universitario Santa Bárbara (CRUSB).",
      driveUrl:
        "https://drive.google.com/drive/folders/1A6BWbKCGzs32NQHeyEbcVwi81wBLpP7P",
    },
  ],
  // 5 Encuentros de Acompañamiento con todos los archivos de Drive conectados
  encuentros: [
    // ==================== ENCUENTRO 1 (11-13 SEPTIEMBRE) ====================
    {
      numero: 1,
      tituloOficial:
        "PRIMER ENCUENTRO DE ACOMPAÑAMIENTO - 11 AL 13 DE SEPTIEMBRE DE 2026",
      fechaCorta: "11-13 Septiembre 2026",
      temaUnidad:
        "Unidad I: Historia de la Computación, Arquitectura y Componentes del Computador",
      recursos: [
        {
          id: "inf-apl-e1-rec-1",
          titulo: "Informática Aplicada I - Unidades 1 y 2 - VREAD.pptx",
          tipo: "Presentación PowerPoint (.pptx)",
          descripcion:
            "Presentación didáctica utilizada en el Primer Encuentro de Acompañamiento.",
          nombreArchivo: "Informática Aplicada I - Unidades 1 y 2 - VREAD.pptx",
          driveUrl:
            "https://drive.google.com/file/d/1bm2eDGAqa9Hm0Msa55a8Svi5HKiCl0Rp/view?usp=sharing",
        },
      ],
      actividades: [
        {
          id: "inf-apl-e1-act-1",
          titulo: "Actividad Práctica 1 - Tema: Historia de la Computación",
          tipo: "Documento Word (.docx)",
          descripcion:
            "Asignación práctica y guía de trabajo evaluada en el Primer Encuentro de Acompañamiento.",
          nombreArchivo:
            "Actividad Práctica - 1 - Tema Historia de la Computación.docx",
          driveUrl:
            "https://drive.google.com/file/d/1wx5I6uUarvRKQVsjH2YEw_ohM6fBzQ2v/view?usp=sharing",
        },
        {
          id: "inf-apl-e1-act-2",
          titulo: "Actividad Práctica 2 - Tema: Componentes del Computador",
          tipo: "Documento Word (.docx)",
          descripcion:
            "Guía de actividad práctica sobre identificación y análisis de hardware y componentes internos.",
          nombreArchivo:
            "Actividad Práctica - 2 - Tema Componentes del Computador.docx",
          driveUrl:
            "https://drive.google.com/file/d/1kPn3mVpGp5c279oHlwQfcwZt3Ocmwttd/view?usp=sharing",
        },
      ],
      evidenciasFotograficas: [
        {
          id: "inf-apl-e1-foto-1",
          titulo: "Evidencia Fotográfica 1 - Primer Encuentro (11-13 Septiembre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Desarrollo de tutoría presencial/sincrónica de Informática Aplicada en el CRUSB.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.44 PM (5).jpeg",
          driveUrl:
            "https://drive.google.com/file/d/12dLkRZv6pAnd0e2dotxkFL3uElYqBab1/view?usp=sharing",
        },
        {
          id: "inf-apl-e1-foto-2",
          titulo: "Evidencia Fotográfica 2 - Primer Encuentro (11-13 Septiembre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Participación estudiantil y práctica guiada durante el Primer Encuentro de Acompañamiento.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.44 PM (6).jpeg",
          driveUrl:
            "https://drive.google.com/file/d/1Qrm3plR_VCJeeY8f9rFjdsyfOKPOuOxk/view?usp=sharing",
        },
        {
          id: "inf-apl-e1-foto-3",
          titulo: "Evidencia Fotográfica 3 - Primer Encuentro (11-13 Septiembre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Acompañamiento docente en laboratorio de cómputo - Primer Encuentro.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.44 PM (7).jpeg",
          driveUrl:
            "https://drive.google.com/file/d/1kW2I_557iI_zKdaUgf2Nu-B5zFA_8qab/view?usp=sharing",
        },
      ],
      asistencia: [
        {
          id: "inf-apl-e1-asist-1",
          titulo:
            "Carpeta de Asistencia - Primer Encuentro (11-13 Septiembre 2026)",
          tipo: "Carpeta Google Drive",
          descripcion:
            "Registro de asistencia correspondiente al Primer Encuentro de Acompañamiento.",
          driveUrl:
            "https://drive.google.com/drive/folders/1o2LTJKLEUgyvsaAAk2vnVwSYjcXBRzsw",
        },
      ],
    },

    // ==================== ENCUENTRO 2 (27 SEPTIEMBRE) ====================
    {
      numero: 2,
      tituloOficial:
        "SEGUNDO ENCUENTRO DE ACOMPAÑAMIENTO - 27 DE SEPTIEMBRE DE 2026",
      fechaCorta: "27 Septiembre 2026",
      temaUnidad:
        "Unidad I y II: Sistemas Operativos, Evolución de Navegadores Web y Seguridad Informática",
      recursos: [
        {
          id: "inf-apl-e2-rec-1",
          titulo: "Informática Aplicada I - Unidades 1 y 2 - VREAD.pptx",
          tipo: "Presentación PowerPoint (.pptx)",
          descripcion:
            "Presentación de apoyo sobre Sistemas Operativos, Navegadores y Seguridad Informática.",
          nombreArchivo: "Informática Aplicada I - Unidades 1 y 2 - VREAD.pptx",
          driveUrl:
            "https://drive.google.com/file/d/1bm2eDGAqa9Hm0Msa55a8Svi5HKiCl0Rp/view?usp=sharing",
        },
      ],
      actividades: [
        {
          id: "inf-apl-e2-act-4",
          titulo:
            "Actividad Práctica 4 - Tema: Sistemas Operativos en la Actualidad",
          tipo: "Documento Word (.docx)",
          descripcion:
            "Guía de actividad evaluada sobre características y funciones de los Sistemas Operativos modernos.",
          nombreArchivo:
            "Actividad Práctica - 4 - Tema Sistemas Operativos en la Actualidad.docx",
          driveUrl:
            "https://drive.google.com/file/d/1hSw1Pdqj0RZZsLh0k8wFna-hNTrcuwQq/view?usp=sharing",
        },
        {
          id: "inf-apl-e2-act-5",
          titulo:
            "Actividad Práctica 5 - Tema: Evolución de Navegadores Web",
          tipo: "Documento Word (.docx)",
          descripcion:
            "Asignación práctica sobre tecnologías web, navegadores y herramientas de búsqueda académica.",
          nombreArchivo:
            "Actividad Práctica - 5 - Tema Evolución de Navegadores Web.docx",
          driveUrl:
            "https://drive.google.com/file/d/1zeTL8nb7iVFl2xat-BQqKb4IAPWrV9Ho/view?usp=sharing",
        },
        {
          id: "inf-apl-e2-act-6",
          titulo:
            "Actividad Práctica 6 - Tema: Antivirus y Seguridad Informática",
          tipo: "Documento Word (.docx)",
          descripcion:
            "Actividad práctica sobre protección de datos, prevención de malware y seguridad digital.",
          nombreArchivo:
            "Actividad Práctica - 6 - Tema Antivirus y Seguridad Informática.docx",
          driveUrl:
            "https://drive.google.com/file/d/1Dg2_b2gzPsIYQSXQzDkfDJQ4WX2WBOGX/view?usp=sharing",
        },
      ],
      evidenciasFotograficas: [
        {
          id: "inf-apl-e2-foto-1",
          titulo: "Evidencia Fotográfica 1 - Segundo Encuentro (27 Septiembre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Desarrollo de la jornada de acompañamiento del 27 de septiembre en el CRUSB.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.43 PM.jpeg",
          driveUrl:
            "https://drive.google.com/file/d/1babKNhhqNCCAmrzk5eUA6x-UJzFh8_X9/view?usp=sharing",
        },
        {
          id: "inf-apl-e2-foto-2",
          titulo: "Evidencia Fotográfica 2 - Segundo Encuentro (27 Septiembre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Trabajo práctico de los estudiantes durante el Segundo Encuentro de Acompañamiento.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.44 PM (2).jpeg",
          driveUrl:
            "https://drive.google.com/file/d/1tg7irnaMPOAjrlUEPVZ6naz-5m3E7nHy/view?usp=sharing",
        },
        {
          id: "inf-apl-e2-foto-3",
          titulo: "Evidencia Fotográfica 3 - Segundo Encuentro (27 Septiembre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Resolución de ejercicios y acompañamiento personalizado en laboratorio.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.44 PM (3).jpeg",
          driveUrl:
            "https://drive.google.com/file/d/1J1fL22s2yaa9gSeyi8nGNJWvhW7SAy_I/view?usp=sharing",
        },
        {
          id: "inf-apl-e2-foto-4",
          titulo: "Evidencia Fotográfica 4 - Segundo Encuentro (27 Septiembre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Socialización de temáticas de sistemas operativos y seguridad informática.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.44 PM (4).jpeg",
          driveUrl:
            "https://drive.google.com/file/d/1qn8mNg3wXOhSkG4Pqw6i-CyO8KHurbma/view?usp=sharing",
        },
      ],
      asistencia: [
        {
          id: "inf-apl-e2-asist-1",
          titulo: "Carpeta de Asistencia - Segundo Encuentro (27 Septiembre 2026)",
          tipo: "Carpeta Google Drive",
          descripcion:
            "Registro de asistencia correspondiente al Segundo Encuentro de Acompañamiento.",
          driveUrl:
            "https://drive.google.com/drive/folders/1yZvwasw_sS2fa08WYtGQi290dfQs7srg",
        },
      ],
    },

    // ==================== ENCUENTRO 3 (23-25 OCTUBRE) ====================
    {
      numero: 3,
      tituloOficial:
        "TERCER ENCUENTRO DE ACOMPAÑAMIENTO - 23 AL 25 DE OCTUBRE DE 2026",
      fechaCorta: "23-25 Octubre 2026",
      temaUnidad:
        "Edición Avanzada de Documentos Académicos en Word (Normas APA 7) y Presentaciones en PowerPoint",
      recursos: [
        {
          id: "inf-apl-e3-rec-1",
          titulo:
            "Infografía: Buenas y malas prácticas al crear presentaciones",
          tipo: "Infografía PNG",
          descripcion:
            "Material didáctico visual utilizado para el diseño profesional de diapositivas en PowerPoint.",
          nombreArchivo: "Buenas y malas prácticas al crear presentaciones.png",
          driveUrl:
            "https://drive.google.com/file/d/1VyT2IYIRIFRT_azFt-eukM7OXdO9UDy9/view?usp=sharing",
        },
      ],
      actividades: [
        {
          id: "inf-apl-e3-act-1",
          titulo:
            "Actividad Práctica 1 - Tema: Edición de Documentos en Word con Normas APA 7",
          tipo: "Documento PDF (Evidencia Moodle / Guía)",
          descripcion:
            "Lineamientos y evidencia de actividad sobre formato de documentos académicos bajo estándar APA 7ma edición.",
          nombreArchivo:
            "Actividad Práctica - 1 - Tema Edición de Documentos en Word con Normas APA 7.pdf",
          driveUrl:
            "https://drive.google.com/file/d/1vTCVQTP7fASqzET__rv2OpnNCz_VHOEl/view?usp=sharing",
        },
        {
          id: "inf-apl-e3-act-2",
          titulo:
            "Actividad Práctica 2 - Tema: Prueba de Configuración Word APA 7",
          tipo: "Documento PDF (Evidencia Moodle / Guía)",
          descripcion:
            "Evaluación práctica de configuración de estilos, márgenes, citas, referencias y tablas automáticas en Word.",
          nombreArchivo:
            "Actividad Práctica - 2 - Tema Prueba de Configuración Word APA 7.pdf",
          driveUrl:
            "https://drive.google.com/file/d/1hSavBMD04sJefggZh3lsmqUKFfEm3eQj/view?usp=sharing",
        },
        {
          id: "inf-apl-e3-act-3",
          titulo:
            "Actividad Práctica 3 - Tema: Presentación de Diapositivas en PowerPoint",
          tipo: "Documento PDF (Evidencia Moodle / Guía)",
          descripcion:
            "Actividad de diseño de presentaciones ejecutivas con animaciones, patrones e identidad visual.",
          nombreArchivo:
            "Actividad Práctica - 3 - Tema Presentación de Diapositivas en PowerPoint.pdf",
          driveUrl:
            "https://drive.google.com/file/d/1Nu-YsFjZtD8z9pPruKQslk96CTKzuEle/view?usp=sharing",
        },
        {
          id: "inf-apl-e3-act-4",
          titulo:
            "Actividad Práctica 4 - Tema: Diapositivas en PowerPoint desde Word",
          tipo: "Documento PDF (Evidencia Moodle / Guía)",
          descripcion:
            "Práctica de integración ofimática para generar presentaciones estructuradas a partir de esquemas de Word.",
          nombreArchivo:
            "Actividad Práctica - 4 - Tema Diapositivas en PowerPoint desde Word.pdf",
          driveUrl:
            "https://drive.google.com/file/d/18p3f9iO9FsJ_MubGayQcSauRsQ510Hee/view?usp=sharing",
        },
      ],
      evidenciasFotograficas: [
        {
          id: "inf-apl-e3-foto-1",
          titulo: "Evidencia Fotográfica 1 - Tercer Encuentro (23-25 Octubre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Práctica de laboratorio sobre Word con Normas APA 7 y PowerPoint en el CRUSB.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.44 PM (1).jpeg",
          driveUrl:
            "https://drive.google.com/file/d/1N-gER5HLvgL6G5k-H5Ximsh_plSLVQj3/view?usp=sharing",
        },
        {
          id: "inf-apl-e3-foto-2",
          titulo: "Evidencia Fotográfica 2 - Tercer Encuentro (23-25 Octubre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Desarrollo de sesión presencial de acompañamiento durante el Tercer Encuentro.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.44 PM.jpeg",
          driveUrl:
            "https://drive.google.com/file/d/1yHHWUKWpMUO2l02ILXnH6YIkM8AtD1_u/view?usp=sharing",
        },
      ],
      asistencia: [
        {
          id: "inf-apl-e3-asist-1",
          titulo: "Carpeta de Asistencia - Tercer Encuentro (23-25 Octubre 2026)",
          tipo: "Carpeta Google Drive",
          descripcion:
            "Registro de asistencia correspondiente al Tercer Encuentro de Acompañamiento.",
          driveUrl:
            "https://drive.google.com/drive/folders/1P4v1gNJA8DZlIoVDo3_FSyDYjIWC2wDo",
        },
      ],
    },

    // ==================== ENCUENTRO 4 (06-08 NOVIEMBRE) ====================
    {
      numero: 4,
      tituloOficial:
        "CUARTO ENCUENTRO DE ACOMPAÑAMIENTO - 06 AL 08 DE NOVIEMBRE DE 2026",
      fechaCorta: "06-08 Noviembre 2026",
      temaUnidad:
        "Hojas de Cálculo en Microsoft Excel: Funciones Aritméticas, Contables, Estadísticas y Gráficos Financieros",
      recursos: [
        {
          id: "inf-apl-e4-rec-1",
          titulo: "Infografía de funciones CONTAR en Excel",
          tipo: "Infografía PNG",
          descripcion:
            "Material visual de referencia para las prácticas de funciones estadísticas y contables en Excel.",
          nombreArchivo: "Infografía de funciones CONTAR en Excel.png",
          driveUrl:
            "https://drive.google.com/file/d/1KyjO-E_GnflKjOrwunlNxsE959LW0Pud/view?usp=sharing",
        },
      ],
      actividades: [
        {
          id: "inf-apl-e4-act-1",
          titulo:
            "Actividad Práctica 1 - Tema: Hoja de Cálculo Creada con Contraseña",
          tipo: "Documento PDF (Evidencia Moodle / Guía)",
          descripcion:
            "Práctica sobre seguridad, protección de libros, celdas y hojas contables en Microsoft Excel.",
          nombreArchivo:
            "Actividad Práctica - 1 - Tema Hoja de Cálculo Creada con Contraseña.pdf",
          driveUrl:
            "https://drive.google.com/file/d/15L9vvNiTiCRSWIfZ-FQcc3gFLi--PvjJ/view?usp=sharing",
        },
        {
          id: "inf-apl-e4-act-2",
          titulo:
            "Actividad Práctica 2 - Tema: Guía de Ejercicios con Funciones Aritméticas y Estadísticas",
          tipo: "Documento PDF (Evidencia Moodle / Guía)",
          descripcion:
            "Resolución de problemas prácticos utilizando fórmulas aritméticas y funciones estadísticas en Excel.",
          nombreArchivo:
            "Actividad Práctica - 2 - Tema Guía de Ejercicios con Funciones Aritméticas y Estadísticas.pdf",
          driveUrl:
            "https://drive.google.com/file/d/13i0IsUAfDnpZU4bhe1eK4WbngXxb2cP4/view?usp=sharing",
        },
        {
          id: "inf-apl-e4-act-3",
          titulo:
            "Actividad Práctica 3 - Tema: Funciones Aritméticas, Contables y Estadísticas en Excel",
          tipo: "Documento PDF (Evidencia Moodle / Guía)",
          descripcion:
            "Laboratorio aplicado a modelos contables y financieros para estudiantes de Contaduría y Gestión Empresarial.",
          nombreArchivo:
            "Actividad Práctica - 3 - Tema Funciones Aritméticas, Contables y Estadísticas en Excel.pdf",
          driveUrl:
            "https://drive.google.com/file/d/1DZECnci9k1i-D8kYRVQSgTYxJ-gNEoGg/view?usp=sharing",
        },
        {
          id: "inf-apl-e4-act-4",
          titulo:
            "Actividad Práctica 4 - Tema: Diseño de Tablas y Formato Condicional en Excel",
          tipo: "Documento PDF (Evidencia Moodle / Guía)",
          descripcion:
            "Automatización visual de reportes empresariales mediante tablas dinámicas y reglas de formato condicional.",
          nombreArchivo:
            "Actividad Práctica - 4 - Tema Diseño de Tablas y Formato Condicional en Excel.pdf",
          driveUrl:
            "https://drive.google.com/file/d/1tayN70m3ecw_CfD1SgwqRDTyJvUXsoKD/view?usp=sharing",
        },
        {
          id: "inf-apl-e4-act-5",
          titulo:
            "Actividad Práctica 5 - Tema: Gráficos Estadísticos y Financieros en Excel",
          tipo: "Documento PDF (Evidencia Moodle / Guía)",
          descripcion:
            "Construcción e interpretación de gráficos ejecutivos para el análisis de indicadores financieros.",
          nombreArchivo:
            "Actividad Práctica - 5 - Tema Gráficos Estadísticos y Financieros en Excel.pdf",
          driveUrl:
            "https://drive.google.com/file/d/1k_piFcPP3Z4EKa4uKJVqp6dxKgtoOGli/view?usp=sharing",
        },
      ],
      evidenciasFotograficas: [
        {
          id: "inf-apl-e4-foto-1",
          titulo: "Evidencia Fotográfica 1 - Cuarto Encuentro (06-08 Noviembre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Desarrollo de laboratorios de Microsoft Excel aplicado a la contabilidad en el CRUSB.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.58 PM (1).jpeg",
          driveUrl:
            "https://drive.google.com/file/d/16SgBzNnXRB4IwlhYiKVgobJpMAL0kJLZ/view?usp=sharing",
        },
        {
          id: "inf-apl-e4-foto-2",
          titulo: "Evidencia Fotográfica 2 - Cuarto Encuentro (06-08 Noviembre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Estudiantes resolviendo la guía de funciones contables y gráficos financieros.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.58 PM (2).jpeg",
          driveUrl:
            "https://drive.google.com/file/d/1GdaOmW9T_Wi3QKv8VdR-l_7hNKTC4pnI/view?usp=sharing",
        },
        {
          id: "inf-apl-e4-foto-3",
          titulo: "Evidencia Fotográfica 3 - Cuarto Encuentro (06-08 Noviembre)",
          tipo: "Fotografía JPEG",
          descripcion:
            "Acompañamiento docente durante el Cuarto Encuentro en el Centro Regional Universitario Santa Bárbara.",
          nombreArchivo: "WhatsApp Image 2026-11-20 at 6.25.58 PM.jpeg",
          driveUrl:
            "https://drive.google.com/file/d/1KfXjCm9Zhh_i6Ud7PzU14cHs-3DfEyiz/view?usp=sharing",
        },
      ],
      asistencia: [
        {
          id: "inf-apl-e4-asist-1",
          titulo: "Carpeta de Asistencia - Cuarto Encuentro (06-08 Noviembre 2026)",
          tipo: "Carpeta Google Drive",
          descripcion:
            "Registro de asistencia correspondiente al Cuarto Encuentro de Acompañamiento.",
          driveUrl:
            "https://drive.google.com/drive/folders/1Arr6eRDT5lR5Sa1hk8tErWikGaCYxWI6",
        },
      ],
    },

    // ==================== ENCUENTRO 5 (20-22 NOVIEMBRE) ====================
    {
      numero: 5,
      tituloOficial:
        "QUINTO ENCUENTRO DE ACOMPAÑAMIENTO - 20 AL 22 DE NOVIEMBRE DE 2026",
      fechaCorta: "20-22 Noviembre 2026",
      temaUnidad:
        "Integración Ofimática Empresarial, Evaluación Final y Socialización de Resultados",
      recursos: [
        {
          id: "inf-apl-e5-rec-1",
          titulo: "Carpeta de Recursos - Quinto Encuentro (20-22 Noviembre 2026)",
          tipo: "Carpeta Google Drive",
          descripcion:
            "Repositorio de materiales correspondientes al cierre del III Periodo Académico 2026.",
          driveUrl:
            "https://drive.google.com/drive/folders/1ALm692olTGdL2ZYHK24y6NATWvEGaqw-",
        },
      ],
      actividades: [
        {
          id: "inf-apl-e5-act-1",
          titulo:
            "Carpeta de Actividades - Quinto Encuentro (20-22 Noviembre 2026)",
          tipo: "Carpeta Google Drive",
          descripcion:
            "Espacio en Drive conectado para las actividades finales del Quinto Encuentro (20-22 de noviembre).",
          driveUrl:
            "https://drive.google.com/drive/folders/1JbvROFSl5lSSxwC_uHrPfz1Pa7cah36I",
        },
      ],
      evidenciasFotograficas: [
        {
          id: "inf-apl-e5-foto-1",
          titulo:
            "Carpeta de Evidencia Fotográfica - Quinto Encuentro (20-22 Noviembre 2026)",
          tipo: "Carpeta Google Drive",
          descripcion:
            "Espacio en Drive conectado para las fotografías del Quinto Encuentro (20-22 de noviembre).",
          driveUrl:
            "https://drive.google.com/drive/folders/120TMeqa3ekn8zsiX1ELWkdeZgjYC3Ut0",
        },
      ],
      asistencia: [
        {
          id: "inf-apl-e5-asist-1",
          titulo: "Carpeta de Asistencia - Quinto Encuentro (20-22 Noviembre 2026)",
          tipo: "Carpeta Google Drive",
          descripcion:
            "Registro de asistencia correspondiente al Quinto Encuentro de Acompañamiento.",
          driveUrl:
            "https://drive.google.com/drive/folders/1FYE1Of_GnGxz0x5P0DVmHAzAs1DUKQ5W",
        },
      ],
    },
  ],
};

// ============================================================================
// ESPACIO FORMATIVO 2: INFORMÁTICA EDUCATIVA PARA EDUCACIÓN PREBÁSICA
// Con todas sus subcarpetas de Google Drive conectadas
// ============================================================================
const carpetasPrebasica = {
  diseno: "https://drive.google.com/drive/folders/1GSrndivOAv1fgasH9Yvg6SqPXWXprM6t",
  recursos: [
    "https://drive.google.com/drive/folders/17UvUjAHdgXlqWjO-cIDs37KmDf3LNc0d",
    "https://drive.google.com/drive/folders/1Bhrha0qxXApQEtkLV4Hyd96MGQ8vJbKB",
    "https://drive.google.com/drive/folders/1btKoTyidg963yNMy79Oo3zU1rP43GmN_",
    "https://drive.google.com/drive/folders/1FcJNIs8O9xpSiZuqiE2Y87EizCcu_0EK",
    "https://drive.google.com/drive/folders/1VfvzfS7cDyYqjfCIo_aGZ_YJ7831aHCt",
  ],
  actividades: [
    "https://drive.google.com/drive/folders/1TG5wX-zpCr650PJeDc4mVVxtQ6GTETx8",
    "https://drive.google.com/drive/folders/15oeBYBucW8mko-bDsOzTjBO-hAfUvF62",
    "https://drive.google.com/drive/folders/1iIgtcO3KjEr4GlFrQY24mIHLkGlfv65p",
    "https://drive.google.com/drive/folders/1kRdop2SRwnunDVSFN6XMkROvBedlZEJl",
    "https://drive.google.com/drive/folders/1sctpNsUWnREXVcRj0LpGKoDIMYJU4_tb",
  ],
  fotos: [
    "https://drive.google.com/drive/folders/1gDrYAhsUMJ5TkjYFJUJSbg3_ZtPKBMuX",
    "https://drive.google.com/drive/folders/1gMH8MZgkoJViTj1NoVUkzCqN7ss6qxi_",
    "https://drive.google.com/drive/folders/1SqLTnQjr5S6n77zH9ggMrj9OjPWnik6c",
    "https://drive.google.com/drive/folders/1jiK2OzKiPtF5Lr5GKrO_Yk6gOC9YXqSx",
    "https://drive.google.com/drive/folders/1Ey9oZwtkykBHBHbi0jH96kq8FihC33nj",
  ],
  asistencia: [
    "https://drive.google.com/drive/folders/1PQTwE5YvNMzy2Y4n-sd2d0bHzOquAERS",
    "https://drive.google.com/drive/folders/1SLv2wumpIyOOnBLzUidQIP9UQTMAGXN3",
    "https://drive.google.com/drive/folders/1rKA2BnQLD0Y6uIOJDK-9Ik9OmMjo8bo-",
    "https://drive.google.com/drive/folders/1EsU_c0jgbrTfQjWJsk97pQNk1mz9RKkg",
    "https://drive.google.com/drive/folders/14domy3T30ifR9mQabqTfAF39kiZv8iew",
  ],
};

const temasPrebasica = [
  "Fundamentos de la Informática Educativa en la Primera Infancia y Mediación Digital",
  "Diseño de Materiales Didácticos Visuales e Interactivos para el Nivel Prebásico",
  "Gamificación, Cuentos Digitales y Recursos Multimedia para el Aprendizaje Infantil",
  "Software Educativo, Aplicaciones Lúdicas y Uso Pedagógico Seguro de Pantallas",
  "Socialización y Evaluación del Portafolio de Recursos Digitales para Prebásica",
];

const claseInformaticaPrebasica2026_3 = {
  id: "informatica-prebasica-2026-3",
  nombre: "Informática Educativa para Educación Prebásica",
  carrera: "Profesorado en Educación Prebásica",
  modalidad: "Modalidad Presencial",
  sede: "CRUSB (Santa Bárbara)",
  periodoLabel: "III Periodo 2026",
  disenoDidactico: {
    titulo:
      "Diseño Didáctico - Informática Educativa para Educación Prebásica",
    descripcion:
      "Carpeta conectada a Google Drive para el Diseño Didáctico, Sílabo y Jornalización del espacio formativo.",
    documentos: [
      {
        id: "diseno-prebasica-folder",
        titulo:
          "Diseño Didáctico y Planificación - Informática Educativa para Educación Prebásica",
        tipo: "Carpeta Google Drive (5.1_Diseno)",
        descripcion:
          "Todo archivo que suba a la carpeta 5.1_Diseno de Prebásica en Google Drive se mostrará automáticamente aquí.",
        driveUrl: carpetasPrebasica.diseno,
      },
    ],
  },
  recursosGenerales: [
    {
      id: "rec-gen-prebasica-folder",
      titulo:
        "Recursos de Aprendizaje - Informática Educativa para Educación Prebásica",
      tipo: "Carpeta Google Drive (5.2_Recursos)",
      descripcion:
        "Carpeta conectada a Google Drive con todos los recursos didácticos, presentaciones y materiales del espacio formativo.",
      driveUrl:
        "https://drive.google.com/drive/folders/1pu6dvnAYuHwEA8iBlg-AMzoakmOPq5rW",
    },
  ],
  asistenciaGeneral: [
    {
      id: "asist-gen-prebasica-folder",
      titulo:
        "Listado Oficial de Asistencia - Informática Educativa para Educación Prebásica",
      tipo: "Carpeta Google Drive (5.5_Asistencia)",
      descripcion:
        "Control general de asistencia del espacio formativo en el Centro Regional Universitario Santa Bárbara (CRUSB).",
      driveUrl:
        "https://drive.google.com/drive/folders/17KOQ16U3uP7w_INQnXOFUZHwP3fDC_d7",
    },
  ],
  encuentros: encuentrosIIIPeriodo2026.map((enc, idx) => ({
    numero: enc.numero,
    tituloOficial: enc.tituloOficial,
    fechaCorta: enc.fechaCorta,
    temaUnidad: temasPrebasica[idx],
    recursos: [
      {
        id: `preb-rec-${enc.numero}`,
        titulo: `Recursos de Aprendizaje - Encuentro ${enc.numero} (${enc.fechaCorta})`,
        tipo: "Carpeta Google Drive (5.2_Recursos)",
        descripcion:
          "Carpeta enlazada en tiempo real con Google Drive para presentaciones, guías y materiales del encuentro.",
        driveUrl: carpetasPrebasica.recursos[idx],
      },
    ],
    actividades: [
      {
        id: `preb-act-${enc.numero}`,
        titulo: `Actividades de Aprendizaje y Moodle - Encuentro ${enc.numero} (${enc.fechaCorta})`,
        tipo: "Carpeta Google Drive (5.3_Actividades)",
        descripcion:
          "Carpeta enlazada en tiempo real con Google Drive para evidencias de Moodle, guías y rúbricas del encuentro.",
        driveUrl: carpetasPrebasica.actividades[idx],
      },
    ],
    evidenciasFotograficas: [
      {
        id: `preb-foto-${enc.numero}`,
        titulo: `Evidencia Fotográfica - Encuentro ${enc.numero} (${enc.fechaCorta})`,
        tipo: "Carpeta Google Drive (5.4_Fotos)",
        descripcion:
          "Carpeta enlazada en tiempo real con Google Drive para el registro fotográfico de las sesiones.",
        driveUrl: carpetasPrebasica.fotos[idx],
      },
    ],
    asistencia: [
      {
        id: `preb-asist-${enc.numero}`,
        titulo: `Lista de Asistencia - Encuentro ${enc.numero} (${enc.fechaCorta})`,
        tipo: "Carpeta Google Drive (5.5_Asistencia)",
        descripcion:
          "Carpeta enlazada en tiempo real con Google Drive para los listados de asistencia del encuentro.",
        driveUrl: carpetasPrebasica.asistencia[idx],
      },
    ],
  })),
};

// ============================================================================
// SECCIÓN 4 Y 5: ESTRUCTURA JERÁRQUICA OFICIAL (III PERIODO 2026)
// ============================================================================
export const periodosAcademicosData = [
  {
    id: "2026-III",
    anio: "2026",
    periodo: "III Periodo 2026",
    estado: "Periodo Actual",
    destacado: true,
    sede: "CRUSB - Centro Regional Universitario Santa Bárbara",
    clases: [claseInformaticaAplicada2026_3, claseInformaticaPrebasica2026_3],
  },
];
