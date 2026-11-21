import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faGraduationCap,
  faNetworkWired,
  faBullseye,
  faEye,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { perfilInstitucionalData } from "../../data/portafolioConfig";
import DriveDocumentCard from "../common/DriveDocumentCard";
import logoUpnfm from "../../assets/images/LogoUPN.png";
import logoVread from "../../assets/images/logo-vread.png";

const iconMap = {
  upnfm: faBuildingColumns,
  vread: faNetworkWired,
  carreras: faGraduationCap,
};

const WorkProcess = () => {
  const [selectedId, setSelectedId] = useState("upnfm");
  const currentItem =
    perfilInstitucionalData.find((item) => item.id === selectedId) ||
    perfilInstitucionalData[0];

  return (
    <div
      className="content px-2 py-12 md:py-16 lg:py-24 max-xxl:px-4"
      id="perfil-institucional"
    >
      {/* Título de Sección 3 */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-picto-primary bg-slate-200/80 px-3 py-1 rounded-full">
          Sección 3 • Identidad Universitaria
        </span>
        <h2 className="section-title mt-3 text-gray-900">
          3. Perfil Institucional
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Contextualización de la Universidad Pedagógica Nacional Francisco Morazán
          (UPNFM), la Vicerrectoría de Educación Abierta y a Distancia (VREAD) y
          las carreras atendidas en el Centro Regional Universitario Santa Bárbara
          (CRUSB).
        </p>
      </div>

      {/* Selector de las 3 Subpáginas Institucionales */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {perfilInstitucionalData.map((item) => {
          const active = item.id === selectedId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              className={`p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-4 ${
                active
                  ? "bg-picto-primary text-white border-picto-primary shadow-lg scale-[1.01]"
                  : "bg-white text-gray-800 border-gray-200 hover:border-picto-primary hover:shadow-md"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  active
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-picto-primary"
                }`}
              >
                <FontAwesomeIcon
                  icon={iconMap[item.id] || faBuildingColumns}
                  className="text-xl"
                />
              </div>
              <div>
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-picto-primary"
                  }`}
                >
                  {item.sigla}
                </span>
                <p className="font-bold text-sm sm:text-base mt-1 leading-snug">
                  {item.titulo}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Contenido de la Subpágina Institucional Seleccionada */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-gray-200 space-y-6">
        <div className="border-b border-gray-100 pb-6 flex flex-col md:flex-row items-center gap-6">
          {/* Logotipo institucional según la subpágina */}
          {currentItem.id === "upnfm" && (
            <div className="w-40 h-48 sm:w-44 sm:h-52 rounded-2xl bg-white border border-slate-200 p-3 flex items-center justify-center shrink-0 shadow-2xs">
              <img
                src={logoUpnfm}
                alt="Escudo Oficial UPNFM"
                className="w-full h-full object-contain"
              />
            </div>
          )}
          {currentItem.id === "vread" && (
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-white border border-slate-200 p-3 flex items-center justify-center shrink-0 shadow-2xs">
              <img
                src={logoVread}
                alt="Logo VREAD UPNFM"
                className="w-full h-full object-contain"
              />
            </div>
          )}

          <div>
            <span className="text-xs font-bold uppercase text-picto-primary">
              {currentItem.subtitulo}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-1">
              {currentItem.titulo}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              {currentItem.resena}
            </p>
          </div>
        </div>

        {/* Misión y Visión cuando están presentes */}
        {(currentItem.mision || currentItem.vision) && (
          <div className="grid md:grid-cols-2 gap-5">
            {currentItem.mision && (
              <div className="p-5 rounded-xl bg-soft-white border border-gray-200">
                <div className="flex items-center gap-2 text-picto-primary font-bold text-base mb-2">
                  <FontAwesomeIcon icon={faBullseye} />
                  <h4>Misión Institucional</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {currentItem.mision}
                </p>
              </div>
            )}
            {currentItem.vision && (
              <div className="p-5 rounded-xl bg-soft-white border border-gray-200">
                <div className="flex items-center gap-2 text-picto-primary font-bold text-base mb-2">
                  <FontAwesomeIcon icon={faEye} />
                  <h4>Visión Institucional</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {currentItem.vision}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Valores Institucionales (3.1 UPNFM) u Objetivos Estratégicos (3.2 VREAD) */}
        {(currentItem.valores || currentItem.objetivos) && (
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm sm:text-base font-bold text-picto-primary mb-3">
              {currentItem.valores
                ? "Valores Institucionales UPNFM"
                : "Objetivos Estratégicos de la VREAD"}
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {(currentItem.valores || currentItem.objetivos).map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-200"
                >
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-picto-primary mt-0.5 shrink-0"
                  />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Perfiles de las 2 Carreras cuando estamos en la subpágina 3.3 */}
        {currentItem.perfilesCarrera && (
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            {currentItem.perfilesCarrera.map((perf, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase text-picto-primary bg-slate-200/80 px-2.5 py-1 rounded-full">
                      Carrera UPNFM • CRUSB
                    </span>
                    {perf.grado && (
                      <span className="text-[11px] font-semibold text-gray-500">
                        {perf.grado}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mt-2">
                    {perf.nombre}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {perf.descripcion}
                  </p>

                  {perf.competencias && (
                    <div className="mt-3 space-y-1.5">
                      <p className="text-xs font-bold uppercase text-picto-primary">
                        Perfil del Egresado y Competencias:
                      </p>
                      <ul className="space-y-1.5 text-xs text-gray-700 list-disc ps-4">
                        {perf.competencias.map((comp, cIdx) => (
                          <li key={cIdx}>{comp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <DriveDocumentCard
                  titulo={`Plan de Estudios y Perfil - ${perf.nombre}`}
                  tipo="Documento Word (.docx en Drive)"
                  descripcion="Documento oficial del perfil y plan de estudios de la carrera en Google Drive."
                  driveUrl={perf.planDriveUrl}
                  nombreArchivo={perf.nombreArchivo}
                />
              </div>
            ))}
          </div>
        )}

        {/* Espacio para documento institucional desde Google Drive */}
        {currentItem.nombreArchivo && (
          <DriveDocumentCard
            titulo={`Respaldo Documental en Drive - ${currentItem.sigla}`}
            tipo="Documento Word (.docx en Drive)"
            descripcion="Información oficial o reseña institucional alojada en la carpeta PORTAFOLIO DOCENTE."
            driveUrl={currentItem.driveUrl}
            nombreArchivo={currentItem.nombreArchivo}
          />
        )}
      </div>
    </div>
  );
};

export default WorkProcess;
