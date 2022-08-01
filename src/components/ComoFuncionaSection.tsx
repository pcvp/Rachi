import CemPorcentoGratuito from "../assets/images/CemPorcentoGratuito";
import Compartilhamento from "../assets/images/Compartilhamento";
import CrieConexoes from "../assets/images/CrieConexoes";

export default function ComoFuncionaSection() {
  return (
    <section className="bg-white font-sora  p-6 w-full flex flex-col text-center">
      <span className="font-semibold text-2xl">Como Funciona</span>
      <div className="flex justify-center flex-col">
        <div className="mt-8 text-center flex items-center flex-col">
          <CrieConexoes />
          <span className="font-semibold text-md mt-3">Crie conexões</span>
          <span className="text-md mt-1 text-gray-200">
            Lorem ipsum dolor sit amet, consecteteu.
          </span>
        </div>

        <div className="mt-8 text-center flex items-center flex-col">
          <CemPorcentoGratuito />
          <span className="font-semibold text-md mt-3">100% gratuito</span>
          <span className="text-md mt-1 text-gray-200">
            Lorem ipsum dolor sit amet, consecteteu.
          </span>
        </div>

        <div className="mt-8 text-center flex items-center flex-col">
          <Compartilhamento />
          <span className="font-semibold text-md mt-3">Compartilhamento</span>
          <span className="text-md mt-1 text-gray-200">
            Lorem ipsum dolor sit amet, consecteteu.
          </span>
        </div>
      </div>
    </section>
  );
}
