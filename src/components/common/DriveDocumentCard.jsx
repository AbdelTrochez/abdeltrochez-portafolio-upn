import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faEye,
  faEyeSlash,
  faFileAlt,
  faFileExcel,
  faFilePdf,
  faFilePowerpoint,
  faFolderOpen,
  faImage,
  faVideo,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { getDrivePreviewUrl } from "../../data/portafolioConfig";

const getFileIcon = (tipo = "") => {
  const t = tipo.toLowerCase();
  if (t.includes("pdf")) return { icon: faFilePdf, color: "text-red-600 bg-red-50" };
  if (t.includes("xlsx") || t.includes("excel"))
    return { icon: faFileExcel, color: "text-emerald-600 bg-emerald-50" };
  if (t.includes("pptx") || t.includes("presentación"))
    return { icon: faFilePowerpoint, color: "text-orange-600 bg-orange-50" };
  if (t.includes("video") || t.includes("mp4") || t.includes("youtube"))
    return { icon: faVideo, color: "text-picto-primary bg-slate-100" };
  if (t.includes("foto") || t.includes("jpg") || t.includes("png") || t.includes("captura"))
    return { icon: faImage, color: "text-blue-600 bg-blue-50" };
  return { icon: faFileAlt, color: "text-picto-primary bg-slate-100" };
};

const DriveDocumentCard = ({
  titulo,
  tipo,
  descripcion,
  driveUrl,
  nombreArchivo,
  defaultExpanded = false,
}) => {
  const [showPreview, setShowPreview] = useState(defaultExpanded);
  const previewUrl = getDrivePreviewUrl(driveUrl);
  const hasLink = Boolean(driveUrl && driveUrl.trim() !== "" && driveUrl !== "#!");
  const { icon, color } = getFileIcon(tipo);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
        <div className="flex items-start gap-3 sm:gap-3.5 min-w-0">
          <div
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center shrink-0 ${color}`}
          >
            <FontAwesomeIcon icon={icon} className="text-lg sm:text-xl" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                {tipo || "Documento Google Drive"}
              </span>
              {hasLink ? (
                <span className="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Enlazado a Drive
                </span>
              ) : (
                <span className="text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  Pendiente de enlazar desde Drive
                </span>
              )}
            </div>
            <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 mt-1 break-words leading-snug">
              {titulo}
            </h4>
            {descripcion && (
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed break-words">
                {descripcion}
              </p>
            )}
            {nombreArchivo && (
              <p className="text-[10px] sm:text-[11px] text-gray-400 font-mono mt-1 break-all">
                Archivo en Drive: {nombreArchivo}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-nowrap items-center gap-2 shrink-0 w-full sm:w-auto pt-1 sm:pt-0">
          {hasLink ? (
            <>
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="btn btn-sm bg-slate-100 hover:bg-picto-primary text-picto-primary hover:text-white border border-slate-300 rounded-lg font-medium text-xs px-2.5 sm:px-3 py-2 flex items-center justify-center gap-1.5 w-full sm:w-auto"
              >
                <FontAwesomeIcon icon={showPreview ? faEyeSlash : faEye} />
                <span>{showPreview ? "Ocultar visor" : "Previsualizar"}</span>
              </button>
              <a
                href={driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary rounded-lg font-medium text-xs px-2.5 sm:px-3 py-2 flex items-center justify-center gap-1.5 w-full sm:w-auto"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                <span>Abrir en Drive</span>
              </a>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="col-span-2 btn btn-sm bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-lg font-medium text-xs px-3 py-2 flex items-center justify-center gap-1.5 w-full sm:w-auto"
            >
              <FontAwesomeIcon icon={faCloudArrowUp} />
              <span>{showPreview ? "Ocultar guía Drive" : "Espacio para Google Drive"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Área de incrustación de documento de Google Drive (o contenedor preparado) */}
      {showPreview && (
        <div className="border-t border-gray-100 bg-gray-50 p-2 sm:p-4">
          {hasLink && previewUrl ? (
            <div className="w-full rounded-lg overflow-hidden border border-gray-300 bg-white shadow-inner">
              <iframe
                src={previewUrl}
                title={titulo}
                className="w-full h-[360px] xs:h-[420px] sm:h-[600px]"
                allow="autoplay; fullscreen"
              />
            </div>
          ) : (
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center bg-white">
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="text-3xl text-picto-primary mb-2"
              />
              <p className="text-sm font-semibold text-gray-800">
                Espacio reservado para incrustar documento desde Google Drive
              </p>
              <p className="text-xs text-gray-500 max-w-xl mx-auto mt-1">
                Para mostrar este archivo automáticamente aquí, suba su documento a la
                carpeta{" "}
                <span className="font-mono font-semibold text-gray-700">
                  PORTAFOLIO DOCENTE
                </span>{" "}
                en Google Drive (con permiso{" "}
                <em>&ldquo;Cualquier persona con el enlace - Lector&rdquo;</em>) y
                pegue el enlace en{" "}
                <code className="bg-slate-100 text-picto-primary px-1.5 py-0.5 rounded">
                  src/data/portafolioConfig.js
                </code>
                .
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DriveDocumentCard;
