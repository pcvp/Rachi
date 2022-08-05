import CemPorcentoGratuito from "../assets/images/CemPorcentoGratuito";
import Compartilhamento from "../assets/images/Compartilhamento";
import CrieConexoes from "../assets/images/CrieConexoes";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export default function NossosPlanosSection() {
  return (
    <section className="bg-white font-sora  p-6 w-full flex flex-col text-center">
      <span className="font-semibold text-2xl md:text-4xl">Nossos Planos</span>
      <span className="text-sm font-inter mt-1 text-gray-200 max-w-[570px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices.
      </span>

      <div className="flex flex-col md:flex-row md:gap-10 md:justify-center md:container md:mx-auto">
        <Card
          tipo="secundario"
          className="mt-6 flex flex-col max-w-[370px] mx-auto"
        >
          <span className="text-2xl font-semibold ">Bronze</span>
          <div className="flex justify-center mt-9 font-roboto">
            <span className="text-lg font-bold self-start">R$</span>
            <span className="text-5xl font-bold self-start">28</span>
            <span className="text-2xl font-bold self-end">/mês</span>
          </div>
          <span className="text-gray-200 font-inter text-md mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </span>
          <Button
            texto="Assinar"
            className="mt-6 shadow-sm shadow-blue-900 mx-6"
          />
        </Card>

        <Card
          tipo="primario"
          className="mt-6 flex flex-col max-w-[370px] mx-auto"
        >
          <span className="text-2xl font-semibold ">Prata</span>
          <span className="uppercase rounded-lg bg-blue-900 mx-16 text-sm mt-6">
            Preferido
          </span>
          <div className="flex justify-center mt-9 font-roboto">
            <span className="text-lg font-bold self-start">R$</span>
            <span className="text-5xl font-bold self-start">57</span>
            <span className="text-2xl font-bold self-end">/mês</span>
          </div>
          <span className="text-gray-100 font-inter text-md mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </span>
          <Button
            texto="Assinar"
            className="mt-6 shadow-sm shadow-blue-900 mx-6"
          />
        </Card>

        <Card
          tipo="secundario"
          className="mt-6 flex flex-col max-w-[370px] mx-auto"
        >
          <span className="text-2xl font-semibold ">Ouro</span>
          <div className="flex justify-center mt-9 font-roboto">
            <span className="text-lg font-bold self-start">R$</span>
            <span className="text-5xl font-bold self-start">94</span>
            <span className="text-2xl font-bold self-end">/mês</span>
          </div>
          <span className="text-gray-200 font-inter text-md mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </span>
          <Button
            texto="Assinar"
            className="mt-6 shadow-sm shadow-blue-900 mx-6"
          />
        </Card>
      </div>
    </section>
  );
}
