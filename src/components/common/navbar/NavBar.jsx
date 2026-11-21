import { useEffect, useState } from "react";
import logo from "../../../assets/Logo-Wolf.png";
import { Link } from "react-scroll";
import { docenteInfo } from "../../../data/portafolioConfig";

const navItems = [
  { id: 1, name: "1. Inicio", url: "introduction" },
  { id: 2, name: "2. Perfil Docente", url: "perfil-docente" },
  { id: 3, name: "3. Perfil Institucional", url: "perfil-institucional" },
  { id: 4, name: "4. Modalidades y Clases", url: "modalidades-clases" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={900}
      spy={true}
      offset={-110}
      activeStyle={{
        backgroundColor: "#04488E",
        color: "white",
        borderRadius: "8px",
      }}
      className={`hover:text-picto-primary px-4 py-2.5 mx-0.5 text-sm xl:text-[15px] cursor-pointer`}
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white/95 backdrop-blur-md border-b border-gray-300 shadow-sm"
          : "bg-white border-b border-gray-100"
      } z-50 transition-all duration-500`}
    >
      {/* Barra tricolor oficial UPNFM (#04488E Azul, #FFED00 Amarillo, #E94E1A Naranja) */}
      <div className="h-1.5 w-full flex">
        <div className="w-3/5 bg-[#04488E]" />
        <div className="w-1/5 bg-[#FFED00]" />
        <div className="w-1/5 bg-[#E94E1A]" />
      </div>
      <div className="navbar flex justify-between mx-auto content py-1.5 sm:py-2 px-2 sm:px-4">
        <div className="flex items-center justify-between min-w-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm sm:btn-md px-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-md dropdown-content rounded-2xl z-50 mt-3 w-[88vw] max-w-76 p-2.5 shadow-2xl font-semibold bg-white text-black border border-gray-200`}
            >
              {menu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-3 cursor-pointer min-w-0"
          >
            <img
              src={logo}
              className="h-8 xs:h-10 sm:h-13 w-auto object-contain shrink-0"
              alt="UPNFM Portafolio Logo"
            />
            <div className="ms-2 sm:ms-3 min-w-0">
              <p className="text-sm xs:text-base sm:text-xl font-bold text-gray-900 leading-tight truncate">
                {docenteInfo.nombreCorto}
              </p>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-picto-primary font-medium truncate">
                Portafolio Docente UPNFM • CRUSB
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:flex items-center gap-2 shrink-0">
          <ul className="hidden lg:flex menu menu-horizontal font-medium md:shrink-0">
            {menu}
          </ul>
          <Link
            className="btn btn-xs xs:btn-sm sm:btn-md btn-primary rounded-lg cursor-pointer px-2.5 xs:px-3.5 sm:px-4 py-1.5"
            href="#contact"
            to={`contact`}
            smooth={true}
            duration={900}
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
