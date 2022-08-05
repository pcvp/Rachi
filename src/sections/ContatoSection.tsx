import NotebookArvore from "../assets/images/WorkingAnywhere";
import { Button } from "../components/Button";

export default function ContatoSection() {
  return (
    <section
      id="Contato"
      className="bg-contato bg-cover text-2xl font-sora font-semibold "
    >
      <div className="bg-contatoOpacity  text-white pt-6 pb-0 pl-6 pr-6">
        <div className="flex flex-col items-center md:max-w-[510px] md:mx-auto ">
          <span className="font-semibold text-2xl">Contato</span>
          <span className="text-gray-100 font-inter text-sm mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </span>
          <div className="flex flex-col md:flex-row md:my-9 md:w-[500px] md:gap-10">
            <input
              className="mt-6 bg-transparent border-b-2 font-inter text-sm w-full placeholder:text-white focus:outline-none focus:outline-transparent  "
              placeholder="Seu melhor email"
            />
            <Button
              texto="Enviar"
              className="my-9 w-full shadow-sm shadow-blue-900 md:my-0 md:w-[200px]"
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
