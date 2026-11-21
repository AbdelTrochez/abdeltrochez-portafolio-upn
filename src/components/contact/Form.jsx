import { useState } from "react";
import { docenteInfo } from "../../data/portafolioConfig";

const commonClass =
  "input input-md sm:input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[14px] md:placeholder:text-base focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [carrera, setCarrera] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portafolio Docente UPNFM] ${asunto || "Consulta Académica"} - ${nombre}`
    );
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${correo}\nCarrera / Unidad: ${carrera}\n\nMensaje:\n${mensaje}`
    );
    window.location.href = `mailto:${docenteInfo.correo}?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <p className="text-lg sm:text-xl font-bold text-[#132238] mb-1">
        Enviar Mensaje o Consulta Académica
      </p>
      <p className="text-xs sm:text-sm font-normal text-soft-dark">
        Complete el formulario para comunicarse directamente al correo
        institucional <strong className="text-gray-700">{docenteInfo.correo}</strong>.
      </p>
      <div className="mx-1">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Nombre completo*"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={commonClass}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico*"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className={commonClass}
            required
          />
          <input
            type="text"
            placeholder="Carrera / Unidad Académica (ej. Contaduría VREAD o Prebásica)*"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            className={commonClass}
            required
          />
          <input
            type="text"
            placeholder="Asunto (ej. Revisión de Portafolio / Tutoría)*"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            className={commonClass}
            required
          />
          <input
            type="text"
            placeholder="Mensaje*"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className={commonClass}
            required
          />
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mt-4">
            <button
              type="submit"
              className="btn btn-primary rounded-xl text-xs sm:text-sm font-semibold px-4 sm:px-6 py-3 cursor-pointer w-full sm:w-auto"
            >
              Enviar al Correo Institucional
            </button>
            <a
              href={`https://wa.me/${docenteInfo.telefonoLimpio}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-0 rounded-xl text-xs sm:text-sm font-semibold px-4 sm:px-5 py-3 w-full sm:w-auto text-center"
            >
              Contactar por WhatsApp ({docenteInfo.telefono})
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
