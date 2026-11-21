import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCalendarDays,
  faCamera,
  faChalkboard,
  faClipboardCheck,
  faFolderTree,
  faLaptopCode,
  faLayerGroup,
  faLocationDot,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { periodosAcademicosData } from "../../data/portafolioConfig";
import DriveDocumentCard from "../common/DriveDocumentCard";

const subpaginasClase = [
  {
    id: "diseno-didactico",
    label: "5.1. Diseño Didáctico",
    icon: faBook,
    badge: "Guía Metodológica",
  },
  {
    id: "recursos",
    label: "5.2. Recursos de Aprendizaje",
    icon: faLayerGroup,
    badge: "Material Didáctico",
  },
  {
    id: "actividades",
    label: "5.3. Actividades de Aprendizaje",
    icon: faTasks,
    badge: "Moodle + Rúbricas",
  },
  {
    id: "evidencias",
    label: "5.4. Evidencia Fotográfica",
    icon: faCamera,
    badge: "Fotos / Sesiones",
  },
  {
    id: "asistencia",
    label: "5.5. Lista de Asistencia",
    icon: faClipboardCheck,
    badge: "Control Oficial",
  },
];

const modalidadesFiltro = [
  { id: "TODAS", label: "Ambas Modalidades (Distancia y Presencial)" },
  { id: "Modalidad Distancia (VREAD)", label: "Modalidad Distancia (VREAD)" },
  { id: "Modalidad Presencial", label: "Modalidad Presencial" },
];

const Portfolio = () => {
  const [selectedModalidad, setSelectedModalidad] = useState("TODAS");
  const [selectedPeriodoId, setSelectedPeriodoId] = useState("2026-III");
  const [selectedClaseIdx, setSelectedClaseIdx] = useState(0);
  const [activeSubpagina, setActiveSubpagina] = useState("diseno-didactico");
  const [selectedEncuentroNum, setSelectedEncuentroNum] = useState("TODOS");

  const periodoActual =
    periodosAcademicosData.find((p) => p.id === selectedPeriodoId) ||
    periodosAcademicosData[0];

  const clasesFiltradas =
    selectedModalidad === "TODAS"
      ? periodoActual.clases
      : periodoActual.clases.filter((c) => c.modalidad === selectedModalidad);

  const claseActiva =
    clasesFiltradas[selectedClaseIdx] || clasesFiltradas[0] || periodoActual.clases[0];

  const encuentrosParaMostrar =
    selectedEncuentroNum === "TODOS"
      ? claseActiva.encuentros
      : claseActiva.encuentros.filter(
          (e) => e.numero === Number(selectedEncuentroNum)
        );

  const handleModalidadChange = (modId) => {
    setSelectedModalidad(modId);
    setSelectedClaseIdx(0);
  };

  const handlePeriodoChange = (perId) => {
    setSelectedPeriodoId(perId);
    setSelectedClaseIdx(0);
  };

  return (
    <div
      className="content mt-10 md:mt-16 xl:mt-20 mb-14 md:mb-24 max-xxl:p-2"
      id="modalidades-clases"
    >
      {/* Encabezado de Sección 4 y 5 */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-picto-primary bg-slate-200/80 px-3 py-1 rounded-full">
          Secciones 4 y 5 • Estructura Jerárquica Oficial
        </span>
        <h2 className="section-title mt-3 text-gray-900">
          4. Modalidades, Periodos y Espacios Formativos
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Navegue siguiendo la ruta oficial:{" "}
          <span className="font-semibold text-gray-800">
            Modalidad → Año / Periodo → Sede (CRUSB) → Espacio Formativo →
            Subpáginas y Encuentros de Acompañamiento
          </span>
          .
        </p>
      </div>

      {/* PANEL JERÁRQUICO DE NAVEGACIÓN (PASOS 1, 2, 3 y 4) */}
      <div className="bg-soft-white p-3.5 xs:p-5 sm:p-7 rounded-2xl border border-gray-200 shadow-sm space-y-5 sm:space-y-6 mb-6 sm:mb-8">
        {/* NIVEL 1: MODALIDAD */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2 mb-2.5">
            <FontAwesomeIcon icon={faChalkboard} className="text-picto-primary" />
            1. Seleccione la Modalidad:
          </label>
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 sm:gap-2.5">
            {modalidadesFiltro.map((mod) => {
              const active = selectedModalidad === mod.id;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => handleModalidadChange(mod.id)}
                  className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer text-left sm:text-center ${
                    active
                      ? "bg-picto-primary text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-picto-primary"
                  }`}
                >
                  {mod.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* NIVEL 2: PERIODO ACADÉMICO ACTIVO (III PERIODO 2026) */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2 mb-2.5">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-picto-primary"
            />
            2. Periodo Académico:
          </label>
          <div className="flex flex-wrap gap-2.5">
            {periodosAcademicosData.map((per) => {
              const active = per.id === selectedPeriodoId;
              return (
                <button
                  key={per.id}
                  type="button"
                  onClick={() => handlePeriodoChange(per.id)}
                  className={`px-5 py-3 rounded-xl text-left border transition-all cursor-pointer flex items-center gap-3 ${
                    active
                      ? "bg-picto-primary-dark text-white border-picto-primary-dark shadow-md"
                      : "bg-white text-gray-800 border-gray-200 hover:border-picto-primary"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <p className="font-bold text-sm sm:text-base leading-tight">
                      {per.periodo}
                    </p>
                    <p
                      className={`text-[11px] ${
                        active ? "text-blue-200" : "text-gray-500"
                      }`}
                    >
                      {per.estado} • {per.sede}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* NIVEL 3: SEDE REGIONAL Y NIVEL 4: ESPACIO FORMATIVO (CLASE) */}
        <div className="pt-2 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="text-picto-primary"
              />
              3. Sede y 4. Espacio Formativo (Clase):
            </label>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-picto-primary bg-slate-200/80 px-3 py-1 rounded-full">
              <FontAwesomeIcon icon={faLocationDot} />
              Sede: {periodoActual.sede}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {clasesFiltradas.map((clase, idx) => {
              const active = clase.id === claseActiva.id;
              return (
                <button
                  key={clase.id}
                  type="button"
                  onClick={() => setSelectedClaseIdx(idx)}
                  className={`p-5 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    active
                      ? "bg-white border-picto-primary shadow-lg"
                      : "bg-white/70 border-gray-200 hover:border-slate-400"
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-picto-primary">
                        {clase.modalidad}
                      </span>
                      <span className="text-xs font-semibold text-gray-500">
                        {clase.periodoLabel} • {clase.sede}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-2">
                      Clase: {clase.nombre}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Carrera: <strong className="text-gray-800">{clase.carrera}</strong>
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                    <span className="text-picto-primary text-[11px] sm:text-xs">
                      5 Subpáginas • 5 Encuentros
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] sm:text-xs ${
                        active
                          ? "bg-picto-primary text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {active ? "Clase Seleccionada" : "Seleccionar"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* VISOR DE LA CLASE SELECCIONADA Y SUS 5 SUBPÁGINAS */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        {/* Barra de ruta / Breadcrumb de la Clase Activa */}
        <div className="bg-picto-primary-dark text-white p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-blue-200 font-medium">
              <FontAwesomeIcon icon={faFolderTree} />
              <span>{claseActiva.modalidad}</span>
              <span>/</span>
              <span>{claseActiva.periodoLabel}</span>
              <span>/</span>
              <span>{claseActiva.sede}</span>
              <span>/</span>
              <span className="text-white font-semibold">
                {claseActiva.carrera}
              </span>
            </div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mt-1">
              Espacio Formativo: {claseActiva.nombre}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] sm:text-xs bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg">
              Docente: <strong>Lic. Abdel Alberto Trochez Rios</strong>
            </span>
          </div>
        </div>

        {/* Menú de las 5 Subpáginas de la Clase */}
        <div className="bg-soft-white px-2.5 sm:px-4 pt-3 sm:pt-4 pb-2 sm:pb-0 border-b border-gray-200 grid grid-cols-1 xs:grid-cols-2 md:flex md:flex-wrap gap-1.5 sm:gap-2">
          {subpaginasClase.map((sub) => {
            const active = activeSubpagina === sub.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => setActiveSubpagina(sub.id)}
                className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl md:rounded-b-none md:rounded-t-xl font-semibold text-xs sm:text-sm flex items-center justify-center md:justify-start gap-2 transition-all cursor-pointer border md:border-b-0 ${
                  active
                    ? "bg-picto-primary md:bg-white text-white md:text-picto-primary border-picto-primary md:border-gray-200 shadow-2xs md:-mb-px"
                    : "bg-white/80 md:bg-gray-100/80 text-gray-700 md:text-gray-600 border-gray-200 md:border-transparent hover:bg-white hover:text-gray-900"
                }`}
              >
                <FontAwesomeIcon icon={sub.icon} />
                <span className="truncate">{sub.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full hidden xl:inline ${
                    active
                      ? "bg-slate-100 text-picto-primary"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {sub.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Contenido Interno de la Subpágina Activa */}
        <div className="p-3.5 xs:p-5 sm:p-8">
          {/* SUBPÁGINA 5.1: DISEÑO DIDÁCTICO */}
          {activeSubpagina === "diseno-didactico" && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-bold uppercase text-picto-primary">
                  Subpágina 5.1 • Planificación Académica Oficial
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                  {claseActiva.disenoDidactico.titulo}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {claseActiva.disenoDidactico.descripcion}
                </p>
              </div>

              {claseActiva.disenoDidactico.documentos ? (
                <div className="space-y-4">
                  {claseActiva.disenoDidactico.documentos.map((doc, dIdx) => (
                    <DriveDocumentCard
                      key={doc.id}
                      titulo={doc.titulo}
                      tipo={doc.tipo}
                      descripcion={doc.descripcion}
                      driveUrl={doc.driveUrl}
                      nombreArchivo={doc.nombreArchivo}
                      defaultExpanded={dIdx === 0}
                    />
                  ))}
                </div>
              ) : (
                <DriveDocumentCard
                  titulo={claseActiva.disenoDidactico.titulo}
                  tipo={claseActiva.disenoDidactico.tipoArchivo}
                  descripcion={claseActiva.disenoDidactico.descripcion}
                  driveUrl={claseActiva.disenoDidactico.driveUrl}
                  nombreArchivo={claseActiva.disenoDidactico.nombreArchivo}
                  defaultExpanded={true}
                />
              )}

              {/* Resumen de Jornalización por los 5 Encuentros */}
              <div className="bg-soft-white p-5 rounded-xl border border-gray-200">
                <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-3">
                  Cronograma Oficial de Encuentros de Acompañamiento ({claseActiva.periodoLabel})
                </h5>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {claseActiva.encuentros.map((enc) => (
                    <div
                      key={enc.numero}
                      className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-2xs"
                    >
                      <span className="text-[11px] font-bold text-picto-primary uppercase">
                        Encuentro #{enc.numero}
                      </span>
                      <p className="text-xs font-bold text-gray-900 mt-1">
                        {enc.fechaCorta}
                      </p>
                      <p className="text-[11px] text-gray-600 mt-1 line-clamp-3">
                        {enc.temaUnidad}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SUBPÁGINA 5.2: RECURSOS DE APRENDIZAJE (TODOS JUNTOS SIN SEPARAR POR ENCUENTRO) */}
          {activeSubpagina === "recursos" && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-bold uppercase text-picto-primary">
                  Subpágina 5.2 • Materiales y Recursos Didácticos
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                  Recursos de Aprendizaje - {claseActiva.nombre}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Presentaciones multimedia, infografías, guías y materiales de
                  apoyo utilizados en el espacio formativo.
                </p>
              </div>

              <div className="space-y-4">
                {(claseActiva.recursosGenerales || []).map((doc, idx) => (
                  <DriveDocumentCard
                    key={doc.id}
                    titulo={doc.titulo}
                    tipo={doc.tipo}
                    descripcion={doc.descripcion}
                    driveUrl={doc.driveUrl}
                    nombreArchivo={doc.nombreArchivo}
                    defaultExpanded={idx === 0}
                  />
                ))}
              </div>
            </div>
          )}

          {/* SUBPÁGINA 5.5: LISTA DE ASISTENCIA (TODA JUNTA SIN SEPARAR POR ENCUENTRO) */}
          {activeSubpagina === "asistencia" && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-xs font-bold uppercase text-picto-primary">
                  Subpágina 5.5 • Control Oficial de Asistencia
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                  Lista de Asistencia - {claseActiva.nombre}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Registro general y consolidado de asistencia estudiantil del
                  espacio formativo ({claseActiva.periodoLabel}).
                </p>
              </div>

              <div className="space-y-4">
                {(claseActiva.asistenciaGeneral || []).map((doc, idx) => (
                  <DriveDocumentCard
                    key={doc.id}
                    titulo={doc.titulo}
                    tipo={doc.tipo}
                    descripcion={doc.descripcion}
                    driveUrl={doc.driveUrl}
                    nombreArchivo={doc.nombreArchivo}
                    defaultExpanded={idx === 0}
                  />
                ))}
              </div>
            </div>
          )}

          {/* SUBPÁGINAS 5.3 y 5.4 (ORGANIZADAS POR ENCUENTRO DE ACOMPAÑAMIENTO) */}
          {activeSubpagina !== "diseno-didactico" &&
            activeSubpagina !== "recursos" &&
            activeSubpagina !== "asistencia" && (
            <div className="space-y-8">
              {/* Filtro rápido por fecha de Encuentro de Acompañamiento */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-100/80 p-4 rounded-xl border border-slate-200">
                <div>
                  <p className="text-xs font-bold uppercase text-picto-primary">
                    Organización Cronológica Obligatoria VREAD / UPNFM
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 mt-0.5">
                    Documentos divididos por{" "}
                    <strong>Encuentro de Acompañamiento</strong> (11-13 Sep, 27
                    Sep, 23-25 Oct, 06-08 Nov, 20-22 Nov).
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedEncuentroNum("TODOS")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                      selectedEncuentroNum === "TODOS"
                        ? "bg-picto-primary text-white"
                        : "bg-white text-gray-700 border border-gray-200"
                    }`}
                  >
                    Ver los 5 Encuentros
                  </button>
                  {claseActiva.encuentros.map((enc) => (
                    <button
                      key={enc.numero}
                      type="button"
                      onClick={() => setSelectedEncuentroNum(String(enc.numero))}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                        Number(selectedEncuentroNum) === enc.numero
                          ? "bg-picto-primary text-white"
                          : "bg-white text-gray-700 border border-gray-200 hover:border-picto-primary"
                      }`}
                    >
                      #{enc.numero} ({enc.fechaCorta.split(" ")[0]})
                    </button>
                  ))}
                </div>
              </div>

              {/* Listado de Bloques por Encuentro de Acompañamiento */}
              {encuentrosParaMostrar.map((enc) => {
                let items = [];
                if (activeSubpagina === "recursos") items = enc.recursos;
                if (activeSubpagina === "actividades") items = enc.actividades;
                if (activeSubpagina === "evidencias")
                  items = enc.evidenciasFotograficas;
                if (activeSubpagina === "asistencia") items = enc.asistencia;

                return (
                  <div
                    key={enc.numero}
                    className="space-y-4 border border-gray-200 rounded-2xl p-4 sm:p-6 bg-soft-white/40"
                  >
                    {/* SEPARADOR OFICIAL DE EXTREMO A EXTREMO (REQUISITO CAPACITACIÓN VREAD) */}
                    <div className="w-full bg-gradient-to-r from-[#03356B] via-[#04488E] to-[#04488E] text-white py-3.5 px-5 rounded-xl shadow-sm text-center border-b-4 border-[#E94E1A] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FFED00]" />
                      <p className="text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase">
                        {enc.tituloOficial}
                      </p>
                      <p className="text-[11px] sm:text-xs text-blue-100 mt-0.5">
                        Unidad / Eje Temático: {enc.temaUnidad}
                      </p>
                    </div>

                    {/* Tarjetas de documentos enlazados a Google Drive para este encuentro */}
                    <div className="space-y-3 pt-1">
                      {items.map((doc) => (
                        <DriveDocumentCard
                          key={doc.id}
                          titulo={doc.titulo}
                          tipo={doc.tipo}
                          descripcion={doc.descripcion}
                          driveUrl={doc.driveUrl}
                          nombreArchivo={doc.nombreArchivo}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
