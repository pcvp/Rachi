import NotebookArvore from "../assets/images/WorkingAnywhere";
import { Button } from "../components/Button";

export default function ContatoSection() {
  return (
    <section className="bg-contato bg-cover text-2xl font-sora font-semibold ">
      <div className="bg-contatoOpacity flex flex-col items-center text-white pt-6 pb-0 pl-6 pr-6">
        <span className="font-semibold text-2xl">Contato</span>
        <span className="text-gray-100 font-inter text-sm mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          mi quis euismod ultrices.
        </span>
        <input
          className="mt-6 bg-transparent border-b-2 font-inter text-sm w-full py-2 placeholder:text-white focus:outline-none focus:outline-transparent  "
          placeholder="Seu melhor email"
        />
        <Button
          texto="Enviar"
          className="mt-9 mb-9 w-full shadow-sm shadow-blue-900"
        ></Button>
      </div>
    </section>
  );
}
