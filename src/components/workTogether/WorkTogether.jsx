import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faExternalLinkAlt,
  faFolderOpen,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { docenteInfo } from "../../data/portafolioConfig";

const WorkTogether = () => {
  const hasRootDrive = Boolean(
    docenteInfo.carpetaDriveRaiz && docenteInfo.carpetaDriveRaiz.trim() !== ""
  );

  return (
    <div className="py-16 sm:py-20 max-w-4xl mx-auto px-4" id="estructura-drive">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-4">
          <FontAwesomeIcon icon={faCloud} />
          <span>Flujo Oficial: Cuenta Google → Google Drive → Carpeta Portafolio Docente</span>
        </div>

        <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl pb-4">
          Repositorio Centralizado en Google Drive
        </p>

        <p className="text-[#A5ACB5] text-xs sm:text-base font-normal text-center max-w-2xl mx-auto pb-8 leading-relaxed">
          Todos los diseños didácticos, presentaciones, prácticas de laboratorio,
          evidencias de la plataforma Moodle, registros fotográficos y listas de
          asistencia del <strong>Lic. {docenteInfo.nombreCompleto}</strong> están
          organizados en la carpeta oficial{" "}
          <span className="text-white font-mono">PORTAFOLIO DOCENTE</span> con
          permiso público de lector.
        </p>

        <div className="bg-white/5 border border-white/15 rounded-2xl p-5 sm:p-6 text-left max-w-2xl mx-auto mb-8 font-mono text-xs sm:text-sm text-gray-200 space-y-1.5">
          <div className="flex items-center justify-between text-blue-200 font-sans font-bold text-xs uppercase pb-2 border-b border-white/10 mb-2">
            <span>Estructura de Carpetas en Google Drive</span>
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <FontAwesomeIcon icon={faLockOpen} />
              Cualquier persona con el enlace (Lector)
            </span>
          </div>
          <p>📁 PORTAFOLIO DOCENTE - Lic. Abdel Alberto Trochez Rios</p>
          <p className="ps-4">├── 📁 01_PERFIL_DOCENTE (Hoja de Vida, Filosofía, FODA)</p>
          <p className="ps-4">├── 📁 02_PERFIL_INSTITUCIONAL (UPNFM, VREAD, Carreras CRUSB)</p>
          <p className="ps-4">└── 📁 03_III_PERIODO_2026 (Sede CRUSB Santa Bárbara)</p>
          <p className="ps-10 text-blue-200">
            ├── 📁 Modalidad_Distancia_VREAD / Clase_Informatica_Aplicada
          </p>
          <p className="ps-10 text-blue-200">
            └── 📁 Modalidad_Presencial / Clase_Informatica_Educativa_para_Educacion_Prebasica
          </p>
        </div>

        {hasRootDrive ? (
          <a
            href={docenteInfo.carpetaDriveRaiz}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-6 py-3.5 text-sm sm:text-base rounded-xl inline-flex items-center gap-2.5"
          >
            <FontAwesomeIcon icon={faFolderOpen} />
            Abrir Carpeta Raíz en Google Drive
            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white text-xs sm:text-sm border border-white/20">
            <FontAwesomeIcon icon={faFolderOpen} className="text-blue-200" />
            <span>
              Puede vincular la carpeta raíz en{" "}
              <code className="text-blue-200 font-mono">
                docenteInfo.carpetaDriveRaiz
              </code>{" "}
              dentro de <code className="text-blue-200 font-mono">portafolioConfig.js</code>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkTogether;
