import Roles from "./Roles";
import { Link } from "react-scroll";

const rolesData = [
  {
    id: 1,
    title: "Informática Aplicada (Profesorado en Contaduría y Gestión Empresarial - VREAD)",
    description:
      "Formación práctica en herramientas ofimáticas avanzadas, hojas de cálculo financieras, automatización contable, análisis de datos y sistemas de información gerencial mediante encuentros de acompañamiento y plataforma Moodle.",
  },
  {
    id: 2,
    title: "Informática Educativa para Educación Prebásica (Modalidad Presencial)",
    description:
      "Desarrollo de competencias tecnopedagógicas para la primera infancia, creación de materiales didácticos digitales, gamificación, cuentos interactivos e integración responsable de las TIC en el aula prebásica.",
  },
  {
    id: 3,
    title: "Mediación Virtual (Moodle) y Ecosistema Google Workspace",
    description:
      "Diseño instruccional de aulas virtuales en Moodle, producción de videotutoriales didácticos y gestión de portafolios digitales basados en Google Drive para evidenciar la calidad educativa en el CRUSB.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-12 md:py-16 lg:py-24 gap-8"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-16 max-md:text-center my-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-picto-primary bg-slate-200/80 px-3 py-1 rounded-full w-fit max-md:mx-auto mb-3">
          Áreas de Especialización Docente
        </span>
        <p className="section-title max-md:text-center text-gray-900">
          Práctica Pedagógica y Tecnológica
        </p>
        <div className="mt-6 text-[14px] space-y-4">
          <p className="text-xs sm:text-base font-normal text-gray-600 leading-relaxed">
            Como <strong>Profesor en Informática Educativa en el grado de Licenciatura</strong>{" "}
            en el Centro Regional Universitario Santa Bárbara (CRUSB - UPNFM),
            articulo la tecnología educativa con la didáctica específica de cada
            carrera.
          </p>
          <p className="text-xs sm:text-base font-normal text-gray-600 leading-relaxed">
            Mi labor abarca tanto el acompañamiento bimodal en la{" "}
            <strong>Vicerrectoría de Educación Abierta y a Distancia (VREAD)</strong>{" "}
            como la docencia en <strong>Modalidad Presencial</strong>, manteniendo
            un registro transparente y verificable de cada periodo académico.
          </p>
        </div>
        <Link
          to="contact"
          smooth={true}
          duration={900}
          className="mt-6 md:mt-8 btn btn-primary text-white w-fit md:py-3 md:px-6 text-xs sm:text-base font-semibold max-md:mx-auto rounded-xl cursor-pointer"
        >
          Comunicación Académica
        </Link>
      </div>
      <div>
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
