import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className={`flex flex-col gap-4 justify-center items-center fixed bottom-0 bg-white h-[100vh] w-[100vw] mx-auto z-50`}
    >
      <HashLoader color="#04488E" speedMultiplier={1.8} size={80} />
      <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#04488E]">
        Cargando Portafolio Docente UPNFM...
      </p>
    </div>
  );
};

export default Loading;
