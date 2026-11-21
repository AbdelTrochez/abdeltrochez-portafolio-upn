import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import { docenteInfo } from "../../data/portafolioConfig";

const addressData = [
  {
    icon: faLocationDot,
    title: "Centro Regional UPNFM",
    description: "CRUSB (Centro Regional Universitario Santa Bárbara)",
  },
  {
    icon: faEnvelope,
    title: "Correo Institucional",
    description: docenteInfo.correo,
  },
  {
    icon: faPhone,
    title: "Teléfono / WhatsApp",
    description: docenteInfo.telefono,
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-5 md:p-10 lg:p-16 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.08)] border border-gray-100"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-10 xl:gap-16 lg:flex-row justify-between">
          <div className="lg:w-1/2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-picto-primary bg-slate-100 px-3 py-1 rounded-full">
                Contacto Docente Institucional
              </span>
              <p className="text-2xl sm:text-3xl font-bold text-[#132238] mt-3">
                {docenteInfo.nombreCompleto}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-picto-primary mt-1">
                {docenteInfo.gradoAcademico}
              </p>
              <p className="text-xs sm:text-sm md:text-base pt-3 font-normal text-soft-dark leading-relaxed">
                Disponible para coordinación académica, seguimiento de espacios
                formativos, revisión de portafolio docente y atención estudiantil
                en el Centro Regional Universitario Santa Bárbara (CRUSB).
              </p>
            </div>
            <div className="my-6 space-y-3">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 py-2">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
