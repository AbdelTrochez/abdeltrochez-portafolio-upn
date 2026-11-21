import picProfile from "../../assets/images/pic-profiles.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { docenteInfo } from "../../data/portafolioConfig";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faEnvelope,
  faGraduationCap,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between items-center pt-8 lg:pt-16 lg:mb-20 max-xl:gap-8 gap-10 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-4 lg:me-8 w-full lg:w-auto transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04488E]/10 border border-[#04488E]/20 text-picto-primary text-xs sm:text-sm font-semibold mb-4">
            <FontAwesomeIcon icon={faGraduationCap} className="text-[#E94E1A]" />
            <span>Portafolio Docente Digital • UPNFM</span>
          </div>

          <p className="text-2xl xxs:text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            {docenteInfo.nombreCompleto}
          </p>

          <p className="text-sm sm:text-base lg:text-lg font-semibold text-picto-primary mt-2">
            {docenteInfo.gradoAcademico}
          </p>

          <div className="flex flex-wrap max-lg:justify-center gap-2 mt-3 text-xs sm:text-sm text-gray-600">
            <span className="inline-flex items-center gap-1.5 bg-white/90 border border-slate-200 px-3 py-1 rounded-md shadow-2xs">
              <FontAwesomeIcon icon={faLocationDot} className="text-picto-primary" />
              {docenteInfo.sedePrincipal}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/90 border border-slate-200 px-3 py-1 rounded-md shadow-2xs">
              <FontAwesomeIcon icon={faEnvelope} className="text-picto-primary" />
              {docenteInfo.correo}
            </span>
          </div>

          <p className="text-xs xxs:text-sm sm:text-base lg:text-[17px] my-5 text-gray-700 leading-relaxed">
            {docenteInfo.bienvenida}
          </p>

          {/* Tarjetas de Carreras y Modalidades */}
          <div className="grid sm:grid-cols-2 gap-3 my-5 text-left">
            {docenteInfo.carreras.map((c, idx) => (
              <div
                key={c.id}
                className="p-3.5 rounded-xl bg-white/95 border border-slate-200 border-l-4 shadow-sm"
                style={{
                  borderLeftColor: idx === 0 ? "#04488E" : "#E94E1A",
                }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: idx === 0 ? "#04488E15" : "#E94E1A18",
                    color: idx === 0 ? "#04488E" : "#E94E1A",
                  }}
                >
                  {c.modalidad}
                </span>
                <p className="font-semibold text-gray-900 text-sm mt-1.5">
                  {c.nombre}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{c.unidad}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col xs:flex-row flex-wrap max-lg:justify-center gap-2.5 sm:gap-3 mt-6">
            <Link
              to="modalidades-clases"
              smooth={true}
              duration={900}
              offset={-100}
              className="btn-primary btn btn-md sm:btn-lg text-white rounded-xl cursor-pointer flex items-center justify-center gap-2 max-xs:w-full text-xs sm:text-base"
            >
              <FontAwesomeIcon icon={faBookOpen} />
              Explorar Espacios Formativos
            </Link>
            <Link
              to="perfil-docente"
              smooth={true}
              duration={900}
              offset={-100}
              className="btn btn-md sm:btn-lg bg-white hover:border-picto-primary hover:text-picto-primary text-gray-800 border border-gray-300 rounded-xl cursor-pointer max-xs:w-full text-xs sm:text-base"
            >
              Ver Perfil Docente
            </Link>
          </div>
        </div>

        <div className="mx-auto lg:mx-0 relative w-full sm:w-fit">
          <div className="grid grid-cols-3 w-full sm:w-fit mt-6 sm:mt-8 gap-1.5 sm:gap-2">
            {docenteInfo.estadisticas.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Fotografía principal ajustada a proporción cuadrada/retrato de pic-profiles.jpg (958x960) */}
      <div className="max-w-68 xs:max-w-80 sm:max-w-104 lg:max-w-115 w-full max-lg:mx-auto aspect-square relative shrink-0 px-2 sm:px-0">
        <div className="absolute -inset-1.5 sm:-inset-2 rounded-[2rem] bg-gradient-to-tr from-[#04488E] via-[#E94E1A] to-[#FFED00] opacity-25 blur-md" />
        <img
          className="relative shadow-2xl shadow-slate-300 w-full h-full object-cover object-center bg-slate-900 rounded-3xl border-4 border-white"
          src={picProfile}
          alt={docenteInfo.nombreCompleto}
        />
      </div>
    </div>
  );
};

export default Introduction;
