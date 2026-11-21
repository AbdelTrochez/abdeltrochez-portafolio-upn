import { useState } from "react";
import picProfile from "../../assets/images/pic-profiles.jpg";
import fodaImage from "../../assets/images/FODA_Personal_Abdel_Trochez.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faChalkboardUser,
  faCheckCircle,
  faExclamationTriangle,
  faFileLines,
  faLightbulb,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { docenteInfo, perfilDocenteData } from "../../data/portafolioConfig";
import DriveDocumentCard from "../common/DriveDocumentCard";

const tabs = [
  {
    id: "hoja-de-vida",
    label: "2.1. Hoja de Vida",
    icon: faFileLines,
  },
  {
    id: "filosofia",
    label: "2.2. Filosofía de Enseñanza",
    icon: faChalkboardUser,
  },
  {
    id: "foda",
    label: "2.3. FODA Personal",
    icon: faChartPie,
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("hoja-de-vida");
  const { hojaDeVida, filosofiaEnsenanza, fodaPersonal } = perfilDocenteData;

  return (
    <div
      className="relative mx-2 sm:mx-4 xxl:mx-0.5 -bottom-10 sm:-bottom-16 lg:-bottom-24 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-16 lg:p-12 md:p-10 sm:p-8 p-3.5 xs:p-4 border border-gray-100"
      id="perfil-docente"
    >
      {/* Encabezado de Sección 2 */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-picto-primary bg-slate-100 px-3 py-1 rounded-full">
          Sección 2 • Estructura Oficial UPNFM
        </span>
        <h2 className="section-title mt-3 text-gray-900">2. Perfil Docente</h2>
        <p className="text-xs sm:text-base text-gray-500 mt-2">
          Documentación profesional, reflexión pedagógica y autoevaluación docente del{" "}
          <span className="font-semibold text-gray-800">
            {docenteInfo.nombreCompleto}
          </span>
          .
        </p>
      </div>

      {/* Subpáginas / Pestañas de Perfil Docente */}
      <div className="grid grid-cols-1 xs:grid-cols-3 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 border-b border-gray-200 pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? "bg-picto-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-slate-200 hover:text-picto-primary"
              }`}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* CONTENIDO 2.1: HOJA DE VIDA */}
      {activeTab === "hoja-de-vida" && (
        <div className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6 items-center bg-soft-white/60 p-5 sm:p-6 rounded-2xl border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 overflow-hidden rounded-2xl shadow-md border-4 border-white bg-slate-900">
                <img
                  className="w-full h-full object-cover object-center"
                  src={picProfile}
                  alt={docenteInfo.nombreCompleto}
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mt-3">
                {docenteInfo.nombreCompleto}
              </h3>
              <p className="text-xs text-picto-primary font-medium mt-0.5">
                {docenteInfo.gradoAcademico}
              </p>
              <p className="text-xs text-gray-500 mt-1">{docenteInfo.correo}</p>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {hojaDeVida.titulo}
              </h3>
              <p className="text-sm text-gray-600">{hojaDeVida.descripcion}</p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {hojaDeVida.resumenCurricular.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs"
                  >
                    <p className="text-xs font-bold uppercase text-picto-primary">
                      {item.categoria}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-800 font-medium mt-1">
                      {item.detalle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DriveDocumentCard
            titulo="Currículum Vitae Actualizado (Hoja de Vida Completa)"
            tipo="Documento PDF / Word (Drive)"
            descripcion="Documento oficial de Hoja de Vida incrustado desde la carpeta PORTAFOLIO DOCENTE en Google Drive."
            driveUrl={hojaDeVida.driveUrl}
            nombreArchivo={hojaDeVida.nombreArchivo}
            defaultExpanded={true}
          />
        </div>
      )}

      {/* CONTENIDO 2.2: FILOSOFÍA DE ENSEÑANZA */}
      {activeTab === "filosofia" && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-200 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {filosofiaEnsenanza.titulo}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {filosofiaEnsenanza.descripcion}
            </p>
            <blockquote className="mt-5 text-base sm:text-lg italic font-medium text-picto-primary max-w-3xl mx-auto">
              {filosofiaEnsenanza.citaDestacada}
            </blockquote>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {filosofiaEnsenanza.pilares.map((pilar, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-picto-primary transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-picto-primary font-bold flex items-center justify-center mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-2">
                  {pilar.titulo}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pilar.texto}
                </p>
              </div>
            ))}
          </div>

          <DriveDocumentCard
            titulo="Documento de Filosofía de Enseñanza (Formato Word .docx)"
            tipo="Documento Word (.docx en Drive)"
            descripcion="Respaldo documental en Google Drive de la Declaración de Filosofía de Enseñanza."
            driveUrl={filosofiaEnsenanza.driveUrl}
            nombreArchivo={filosofiaEnsenanza.nombreArchivo}
          />
        </div>
      )}

      {/* CONTENIDO 2.3: FODA PERSONAL */}
      {activeTab === "foda" && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {fodaPersonal.titulo}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {fodaPersonal.descripcion}
            </p>
          </div>

          {/* Imagen Oficial del FODA Personal */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-2 sm:p-4">
            <img
              src={fodaImage}
              alt="Matriz FODA Personal Docente - Lic. Abdel Alberto Trochez Rios"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Fortalezas */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-base mb-3">
                <FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
                <h4>Fortalezas (Internas)</h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc ps-5">
                {fodaPersonal.matriz.fortalezas.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Oportunidades */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
              <div className="flex items-center gap-2.5 text-blue-800 font-bold text-base mb-3">
                <FontAwesomeIcon icon={faLightbulb} className="text-lg" />
                <h4>Oportunidades (Externas)</h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc ps-5">
                {fodaPersonal.matriz.oportunidades.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Debilidades */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center gap-2.5 text-amber-800 font-bold text-base mb-3">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-lg" />
                <h4>Debilidades (Internas)</h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc ps-5">
                {fodaPersonal.matriz.debilidades.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Amenazas */}
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200">
              <div className="flex items-center gap-2.5 text-rose-800 font-bold text-base mb-3">
                <FontAwesomeIcon icon={faShieldHalved} className="text-lg" />
                <h4>Amenazas (Externas)</h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc ps-5">
                {fodaPersonal.matriz.amenazas.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <DriveDocumentCard
            titulo="Matriz FODA Personal Docente (Imagen PNG en Drive)"
            tipo="Imagen PNG (Drive)"
            descripcion="Imagen en alta resolución de la Matriz FODA Personal alojada en la carpeta PORTAFOLIO DOCENTE."
            driveUrl={fodaPersonal.driveUrl}
            nombreArchivo={fodaPersonal.nombreArchivo}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
