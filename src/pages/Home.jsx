import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      {/* 1. INICIO y 2. PERFIL DOCENTE (Hoja de Vida, Filosofía de enseñanza, FODA Personal) */}
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>

      {/* 3. PERFIL INSTITUCIONAL (UPNFM, VREAD, Carreras CRUSB) */}
      <div className="bg-soft-white pt-28">
        <WorkProcess />
      </div>

      {/* 4 y 5. MODALIDAD -> PERIODO (III Periodo 2026) -> SEDE (CRUSB) -> CLASE -> SUBPÁGINAS */}
      <Portfolio />

      {/* CONTACTO DOCENTE INSTITUCIONAL */}
      <Contact />
    </div>
  );
};

export default Home;
