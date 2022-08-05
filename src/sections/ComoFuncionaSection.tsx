import CemPorcentoGratuito from "../assets/images/CemPorcentoGratuito";
import Compartilhamento from "../assets/images/Compartilhamento";
import CrieConexoes from "../assets/images/CrieConexoes";

export default function ComoFuncionaSection() {
  return (
    <section className="bg-white font-sora  p-6 w-full flex flex-col text-center md:py-14">
      <span className="font-semibold text-2xl md:text-4xl  md:mb-16 ">
        Como Funciona
      </span>
      <div className="flex justify-center flex-col md:flex-row md:gap-28">
        <div className="mt-8 text-center flex items-center flex-col md:w-[210px]">
          <CrieConexoes />
          <span className="font-semibold text-md mt-3">Crie conexões</span>
          <span className="text-md mt-1 text-gray-200 font-inter">
            Lorem ipsum dolor sit amet, consecteteu.
          </span>
        </div>

        <div className="mt-8 text-center flex items-center flex-col md:w-[210px]">
          <CemPorcentoGratuito />
          <span className="font-semibold text-md mt-3">100% gratuito</span>
          <span className="text-md mt-1 text-gray-200 font-inter">
            Lorem ipsum dolor sit amet, consecteteu.
          </span>
        </div>

        <div className="mt-8 text-center flex items-center flex-col md:w-[210px]">
          <Compartilhamento />
          <span className="font-semibold text-md mt-3">Compartilhamento</span>
          <span className="text-md mt-1 text-gray-200 font-inter">
            Lorem ipsum dolor sit amet, consecteteu.
          </span>
        </div>
      </div>
    </section>
  );
}
