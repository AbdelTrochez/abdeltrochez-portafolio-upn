import logo from "../../../assets/Logo-Wolf.png";
import { docenteInfo } from "../../../data/portafolioConfig";

const navItems = [
  { id: 1, name: "1. Inicio", url: "introduction" },
  { id: 2, name: "2. Perfil Docente", url: "perfil-docente" },
  { id: 3, name: "3. Perfil Institucional", url: "perfil-institucional" },
  { id: 4, name: "4. Modalidades y Clases", url: "modalidades-clases" },
  { id: 5, name: "Contacto", url: "contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-36 content max-2xl:px-4">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200 gap-4">
        <a href="#introduction" className="flex items-center border-0">
          <img
            src={logo}
            className="h-10 sm:h-13 w-auto object-contain bg-white/95 p-1.5 rounded-xl"
            alt="UPNFM Logo"
          />
          <div className="ms-3">
            <p className="text-lg sm:text-xl font-bold text-white">
              {docenteInfo.nombreCompleto}
            </p>
            <p className="text-xs text-gray-300">
              {docenteInfo.sedePrincipal} • UPNFM
            </p>
          </div>
        </a>
        <div className="mx-4 max-md:my-4 text-center flex flex-wrap justify-center gap-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-1.5 group inline-block relative w-fit text-xs sm:text-sm text-gray-200 hover:text-white"
              href={`#${item.url}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 mt-8 py-6 text-center text-gray-300 text-xs sm:text-sm space-y-1">
        <p>
          &copy; {copyrightYear} Portafolio Docente Digital -{" "}
          <strong>{docenteInfo.nombreCompleto}</strong> ({docenteInfo.correo} •{" "}
          {docenteInfo.telefono})
        </p>
        <p className="text-gray-400 text-xs">
          Universidad Pedagógica Nacional Francisco Morazán (UPNFM) • VREAD y
          Modalidad Presencial • CRUSB Santa Bárbara
        </p>
      </div>
    </div>
  );
};

export default Footer;
